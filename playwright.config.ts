import { defineConfig, devices } from '@playwright/test';

const PORT = Number(process.env.PORT) || 3010;
const baseURL = `http://127.0.0.1:${PORT}`;

export default defineConfig({
  testDir: './tests',
  timeout: 30_000,
  expect: {
    timeout: 5_000,
  },
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 2 : undefined,
  reporter: process.env.CI ? [['github'], ['line']] : [['list']],
  use: {
    baseURL,
    actionTimeout: 10_000,
    navigationTimeout: 15_000,
    trace: 'on-first-retry',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: process.env.NO_PLAYWRIGHT_WEBSERVER
    ? undefined
    : {
        command: `node node_modules/next/dist/bin/next start -p ${PORT}`,
        url: baseURL,
        reuseExistingServer: !process.env.CI,
        timeout: 120_000,
        stdout: 'pipe',
        stderr: 'pipe',
      },
});
