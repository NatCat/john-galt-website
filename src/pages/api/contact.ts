import type { APIRoute } from 'astro';

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, phone, company, message } = data;

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Name, email, and message are required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Email configuration - can be set via environment variable or use default
    const toEmail = import.meta.env.CONTACT_EMAIL || 'info@johngalt.am';
    const subject = `New Contact Form Submission from ${name}`;
    
    // Format email body
    const emailBody = `
New contact form submission from John Galt website:

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}
Company: ${company || 'Not provided'}

Message:
${message}

---
This email was sent from the contact form on ${new URL(request.url).origin}
    `.trim();

    // Option 1: Use a service like Resend, SendGrid, or Mailgun
    // For now, we'll use a simple approach with a webhook or email service
    
    // You can use one of these services:
    // 1. Resend (recommended): https://resend.com
    // 2. SendGrid: https://sendgrid.com
    // 3. Mailgun: https://mailgun.com
    // 4. Formspree: https://formspree.io (easiest for static sites)
    
    // Example with Resend (you'll need to install @resend/node and set RESEND_API_KEY)
    // Uncomment and configure when ready:
    /*
    import { Resend } from '@resend/node';
    const resend = new Resend(import.meta.env.RESEND_API_KEY);
    
    await resend.emails.send({
      from: 'contact@johngalt.am',
      to: toEmail,
      subject: subject,
      text: emailBody,
    });
    */

    // For now, we'll use a webhook approach or log the data
    // In production, replace this with actual email sending
    
    // Option: Use a webhook service like Zapier, Make.com, or n8n
    const webhookUrl = import.meta.env.CONTACT_WEBHOOK_URL;
    
    if (webhookUrl) {
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: toEmail,
          subject: subject,
          body: emailBody,
          formData: data,
        }),
      });
    } else {
      // Log for development (remove in production)
      console.log('Contact form submission:', {
        to: toEmail,
        subject: subject,
        body: emailBody,
      });
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Message sent successfully' }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error processing contact form:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
};

