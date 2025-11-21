# Contact Form Setup Guide

The contact form is now set up to send emails to `info@johngalt.am`. Since your site is deployed on GitHub Pages (static hosting), you have several options:

## Option 1: Use Formspree (Easiest - Recommended for Static Sites)

1. **Sign up at [Formspree.io](https://formspree.io)** (free tier available)
2. **Create a new form** and get your form endpoint URL
3. **Update the form action** in `src/components/Contact.astro`:

```html
<form id="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="space-y-6">
```

4. **Add hidden field** for the recipient email:
```html
<input type="hidden" name="_to" value="info@johngalt.am" />
<input type="hidden" name="_subject" value="New Contact Form Submission" />
```

5. **Remove the JavaScript fetch code** and let Formspree handle it

## Option 2: Use Resend (Recommended for Production)

1. **Sign up at [Resend.com](https://resend.com)** (free tier: 3,000 emails/month)
2. **Get your API key** from the dashboard
3. **Install Resend**:
```bash
npm install @resend/node
```

4. **Add API key to environment variables**:
   - Create `.env` file (for local development)
   - Add to GitHub Secrets (for production):
     - Go to your GitHub repo → Settings → Secrets and variables → Actions
     - Add secret: `RESEND_API_KEY` with your Resend API key

5. **Update `src/pages/api/contact.ts`**:
   - Uncomment the Resend code
   - The API route will automatically work in production with serverless functions

6. **Deploy to a platform that supports serverless functions**:
   - **Vercel** (recommended): Just connect your GitHub repo
   - **Netlify**: Add `netlify.toml` configuration
   - **Cloudflare Pages**: Supports Workers

## Option 3: Use EmailJS (Client-Side, No Backend Needed)

1. **Sign up at [EmailJS.com](https://www.emailjs.com)** (free tier available)
2. **Create an email service** (Gmail, Outlook, etc.)
3. **Create an email template**
4. **Get your Service ID, Template ID, and Public Key**
5. **Install EmailJS**:
```bash
npm install @emailjs/browser
```

6. **Update `src/components/Contact.astro`** to use EmailJS instead of the API route

## Option 4: Use a Webhook Service

1. **Set up a webhook** using Zapier, Make.com, or n8n
2. **Add webhook URL** to environment variable: `CONTACT_WEBHOOK_URL`
3. **Configure the webhook** to send emails using your email service

## Current Implementation

The current implementation uses an API route (`/api/contact`) that:
- Validates the form data
- Formats the email
- Can be configured to use any of the above services

**For GitHub Pages deployment**, you'll need to:
1. Use Option 1 (Formspree) - works immediately
2. Or deploy to Vercel/Netlify to use the API route with Resend

## Quick Start with Formspree (5 minutes)

1. Go to https://formspree.io and sign up
2. Create a new form
3. Copy your form endpoint (e.g., `https://formspree.io/f/xjvqkqyz`)
4. Update the form in `src/components/Contact.astro`:

```html
<form id="contact-form" action="https://formspree.io/f/xjvqkqyz" method="POST" class="space-y-6">
  <!-- Add these hidden fields -->
  <input type="hidden" name="_to" value="info@johngalt.am" />
  <input type="hidden" name="_subject" value="New Contact Form Submission from John Galt Website" />
  
  <!-- Rest of your form fields -->
</form>
```

5. Remove or comment out the JavaScript fetch code
6. Deploy - it will work immediately!

## Recommended: Deploy to Vercel + Use Resend

1. **Deploy to Vercel**:
   - Connect your GitHub repo to Vercel
   - Vercel will automatically detect Astro and deploy

2. **Set up Resend**:
   - Sign up at resend.com
   - Get API key
   - Add to Vercel environment variables: `RESEND_API_KEY`

3. **Uncomment Resend code** in `src/pages/api/contact.ts`

4. **Done!** The form will send emails to info@johngalt.am

