import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, reason, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // TODO: Connect to email service (e.g. SendGrid, Resend, Nodemailer)
    // Example:
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   from: 'noreply@lincsstaycationguide.co.uk',
    //   subject: `[Contact Form] ${subject}`,
    //   body: `Name: ${name}\nEmail: ${email}\nReason: ${reason}\n\n${message}`,
    // });

    // TODO: Optionally save to database
    // await db.contactSubmissions.create({
    //   data: { name, email, subject, reason, message },
    // });

    console.log('Contact form submission:', { name, email, subject, reason, message });

    return NextResponse.json({ success: true, message: 'Message received' });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
