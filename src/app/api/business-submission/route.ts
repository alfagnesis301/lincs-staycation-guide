import { NextResponse } from 'next/server';

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
    } = body;

    // Validate required fields
    if (!businessName || !contactName || !contactEmail || !category || !town || !description) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(contactEmail)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Validate URL if provided
    if (website && !/^https?:\/\/.+/.test(website)) {
      return NextResponse.json(
        { error: 'Invalid website URL' },
        { status: 400 }
      );
    }

    // TODO: Save to database
    // await db.businessSubmissions.create({
    //   data: {
    //     businessName, contactName, contactEmail, phone, website,
    //     category, town, address, description, features, listingInterest, message,
    //     status: 'pending',
    //   },
    // });

    // TODO: Send notification email to admin
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `[New Business Submission] ${businessName}`,
    //   body: `Business: ${businessName}\nCategory: ${category}\nTown: ${town}\nContact: ${contactName} (${contactEmail})\n\n${description}`,
    // });

    console.log('Business submission:', {
      businessName, contactName, contactEmail, phone, website,
      category, town, address, description, features, listingInterest, message,
    });

    return NextResponse.json({ success: true, message: 'Business submission received' });
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}
