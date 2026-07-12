// Transactional email delivery via the Resend HTTP API (no SDK needed).
//
// Required environment variables (set on the host, never committed):
//   RESEND_API_KEY     - API key from https://resend.com
//   CONTACT_EMAIL      - inbox that receives form notifications
//   CONTACT_FROM_EMAIL - verified sender, e.g. forms@lincs-staycation-guide.co.uk
//                        (the domain must be verified in Resend first)
//
// While these are unset the form APIs return 503 instead of faking success,
// and the UI shows the direct email address as a fallback.

type NotificationEmail = {
  subject: string;
  text: string;
  replyTo?: string;
};

export function emailDeliveryConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY &&
      process.env.CONTACT_EMAIL &&
      process.env.CONTACT_FROM_EMAIL
  );
}

export async function sendNotificationEmail({
  subject,
  text,
  replyTo,
}: NotificationEmail): Promise<boolean> {
  if (!emailDeliveryConfigured()) return false;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: process.env.CONTACT_FROM_EMAIL,
        to: [process.env.CONTACT_EMAIL],
        subject,
        text,
        ...(replyTo ? { reply_to: [replyTo] } : {}),
      }),
    });

    if (!response.ok) {
      console.error('Email delivery failed:', response.status, await response.text());
      return false;
    }
    return true;
  } catch (error) {
    console.error('Email delivery error:', error);
    return false;
  }
}
