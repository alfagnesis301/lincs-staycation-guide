import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { setTimeout as delay } from 'node:timers/promises';
import path from 'node:path';

const ROOT = process.cwd();
const PORT = Number(process.env.PORT) || 3010;
const baseURL = `http://127.0.0.1:${PORT}`;
const nextBin = path.join(ROOT, 'node_modules', 'next', 'dist', 'bin', 'next');
const playwrightCli = path.join(ROOT, 'node_modules', '@playwright', 'test', 'cli.js');
const testArgs = process.argv.slice(2).length > 0 ? process.argv.slice(2) : ['--reporter=line', '--workers=1'];

function spawnNode(args, env = {}) {
  return spawn(process.execPath, args, {
    cwd: ROOT,
    env: { ...process.env, ...env },
    stdio: ['ignore', 'pipe', 'pipe'],
    windowsHide: true,
  });
}

function pipeWithPrefix(stream, prefix) {
  stream.setEncoding('utf8');
  stream.on('data', (chunk) => {
    for (const line of chunk.split(/\r?\n/)) {
      if (line.trim()) console.log(`${prefix} ${line}`);
    }
  });
}

async function waitForServer(processRef) {
  const startedAt = Date.now();
  const timeoutMs = 120_000;
  let lastError;

  while (Date.now() - startedAt < timeoutMs) {
    if (processRef.exitCode !== null) {
      throw new Error(`Next server exited before becoming ready with code ${processRef.exitCode}.`);
    }

    try {
      const response = await fetch(baseURL, { signal: AbortSignal.timeout(2_000) });
      if (response.ok || response.status < 500) return;
    } catch (error) {
      lastError = error;
    }

    await delay(1_000);
  }

  throw new Error(`Timed out waiting for ${baseURL}: ${lastError?.message ?? 'no response'}`);
}

async function stopProcess(processRef) {
  if (!processRef || processRef.exitCode !== null) return;

  if (process.platform === 'win32') {
    await new Promise((resolve) => {
      const killer = spawn('taskkill', ['/pid', String(processRef.pid), '/T', '/F'], {
        stdio: 'ignore',
        windowsHide: true,
      });
      killer.on('close', resolve);
      killer.on('error', resolve);
    });
    return;
  }

  processRef.kill('SIGTERM');
  await Promise.race([
    new Promise((resolve) => processRef.once('close', resolve)),
    delay(5_000).then(() => processRef.kill('SIGKILL')),
  ]);
}

if (!existsSync(nextBin)) {
  console.error(`Missing Next.js binary at ${nextBin}`);
  process.exit(1);
}

if (!existsSync(playwrightCli)) {
  console.error(`Missing Playwright CLI at ${playwrightCli}`);
  process.exit(1);
}

const server = spawnNode([nextBin, 'start', '-p', String(PORT)]);
pipeWithPrefix(server.stdout, '[next]');
pipeWithPrefix(server.stderr, '[next]');

try {
  await waitForServer(server);
  console.log(`[e2e] Running Playwright against ${baseURL}`);

  const tests = spawnNode([playwrightCli, 'test', ...testArgs], {
    NO_PLAYWRIGHT_WEBSERVER: '1',
    PORT: String(PORT),
  });
  tests.stdout.pipe(process.stdout);
  tests.stderr.pipe(process.stderr);

  const exitCode = await new Promise((resolve) => {
    tests.on('close', resolve);
    tests.on('error', (error) => {
      console.error(error);
      resolve(1);
    });
  });

  await stopProcess(server);
  process.exit(exitCode ?? 1);
} catch (error) {
  console.error(`[e2e] ${error.message}`);
  await stopProcess(server);
  process.exit(1);
}
