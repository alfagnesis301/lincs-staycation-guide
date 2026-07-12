import { NextResponse } from 'next/server';
import { sendNotificationEmail, emailDeliveryConfigured } from '@/lib/email';

const MAX_FIELD = 300;
const MAX_MESSAGE = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, reason, message, honeypot } = body;

    // Bots that fill the hidden field get a generic OK and are dropped.
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Message received' });
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    if (
      [name, email, subject, reason].some(
        (v) => typeof v === 'string' && v.length > MAX_FIELD
      ) ||
      (typeof message === 'string' && message.length > MAX_MESSAGE)
    ) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (!emailDeliveryConfigured()) {
      // Never pretend the message was delivered when no provider is set up.
      return NextResponse.json(
        { error: 'The contact form is temporarily unavailable. Please email us directly.' },
        { status: 503 }
      );
    }

    const sent = await sendNotificationEmail({
      subject: `[Contact form] ${subject}`,
      replyTo: email,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Reason: ${reason ?? 'not given'}`,
        '',
        message,
      ].join('\n'),
    });

    if (!sent) {
      return NextResponse.json(
        { error: 'We could not send your message right now. Please email us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Message received' });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
