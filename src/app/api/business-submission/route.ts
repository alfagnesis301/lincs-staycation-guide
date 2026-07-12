import { NextResponse } from 'next/server';
import { sendNotificationEmail, emailDeliveryConfigured } from '@/lib/email';

const MAX_FIELD = 300;
const MAX_TEXT = 5000;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      businessName,
      contactName,
      contactEmail,
      phone,
      website,
      category,
      town,
      address,
      description,
      features,
      listingInterest,
      message,
      honeypot,
    } = body;

    // Bots that fill the hidden field get a generic OK and are dropped.
    if (typeof honeypot === 'string' && honeypot.trim() !== '') {
      return NextResponse.json({ success: true, message: 'Business submission received' });
    }

    if (!businessName || !contactName || !contactEmail || !category || !town || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const shortFields = [businessName, contactName, contactEmail, phone, website, category, town, address, listingInterest];
    if (
      shortFields.some((v) => typeof v === 'string' && v.length > MAX_FIELD) ||
      [description, message].some((v) => typeof v === 'string' && v.length > MAX_TEXT)
    ) {
      return NextResponse.json({ error: 'Input too long' }, { status: 400 });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    if (website && !/^https?:\/\/.+/.test(website)) {
      return NextResponse.json(
        { error: 'Invalid website URL' },
        { status: 400 }
      );
    }

    if (!emailDeliveryConfigured()) {
      // Never pretend the submission was delivered when no provider is set up.
      return NextResponse.json(
        { error: 'Submissions are temporarily unavailable. Please email us directly.' },
        { status: 503 }
      );
    }

    const sent = await sendNotificationEmail({
      subject: `[Business submission] ${businessName}`,
      replyTo: contactEmail,
      text: [
        `Business: ${businessName}`,
        `Category: ${category}`,
        `Town: ${town}`,
        `Address: ${address ?? 'not given'}`,
        `Website: ${website ?? 'not given'}`,
        `Contact: ${contactName} (${contactEmail}${phone ? `, ${phone}` : ''})`,
        `Listing interest: ${listingInterest ?? 'not given'}`,
        `Features: ${Array.isArray(features) ? features.join(', ') : features ?? 'not given'}`,
        '',
        `Description:`,
        description,
        '',
        `Message:`,
        message ?? '(none)',
      ].join('\n'),
    });

    if (!sent) {
      return NextResponse.json(
        { error: 'We could not send your submission right now. Please email us directly.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: 'Business submission received' });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
