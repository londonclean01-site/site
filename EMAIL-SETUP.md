# Email Setup Guide for Contact Form

The contact form sends quote requests to your email. You need to configure email sending before deployment.

## ✅ Vercel Deployment - YES, Email Works!

**Vercel fully supports email sending** through:
- **Resend** (recommended, easiest)
- **SMTP** (Gmail, SendGrid, Mailgun, etc.)
- **SendGrid API**
- **Nodemailer**

---

## Option 1: Resend (Recommended for Vercel) ⭐

**Why Resend?**
- Built for Vercel/Next.js
- Free tier: 3,000 emails/month
- Simple setup (5 minutes)
- No SMTP configuration needed
- Excellent deliverability

### Setup Steps:

1. **Sign up at [resend.com](https://resend.com)**

2. **Verify your domain** (or use their test domain for development)
   - Add DNS records they provide
   - Wait 5-10 minutes for verification

3. **Get API Key**
   - Go to API Keys section
   - Create new API key
   - Copy the key (starts with `re_...`)

4. **Add to Vercel Environment Variables**
   ```bash
   RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxx
   CONTACT_EMAIL=info@londonclean.co.uk
   ```

5. **Install Resend package**
   ```bash
   npm install resend
   ```

6. **Deploy** - emails will work immediately!

---

## Option 2: SMTP (Gmail, SendGrid, etc.)

### Using Gmail:

1. **Enable 2-Factor Authentication** on your Gmail account

2. **Create App Password**
   - Go to Google Account → Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
   - Copy the 16-character password

3. **Add to Vercel Environment Variables**
   ```bash
   SMTP_HOST=smtp.gmail.com
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=your-email@gmail.com
   SMTP_PASS=your-16-char-app-password
   SMTP_FROM=noreply@londonclean.co.uk
   CONTACT_EMAIL=info@londonclean.co.uk
   ```

4. **Install Nodemailer**
   ```bash
   npm install nodemailer
   ```

### Using SendGrid:

1. **Sign up at [sendgrid.com](https://sendgrid.com)** (free tier: 100 emails/day)

2. **Create API Key**
   - Settings → API Keys → Create API Key
   - Full Access permissions

3. **Add to Vercel Environment Variables**
   ```bash
   SMTP_HOST=smtp.sendgrid.net
   SMTP_PORT=587
   SMTP_SECURE=false
   SMTP_USER=apikey
   SMTP_PASS=your-sendgrid-api-key
   SMTP_FROM=noreply@londonclean.co.uk
   CONTACT_EMAIL=info@londonclean.co.uk
   ```

---

## Local Development Testing

For local testing without email setup:

1. **Create `.env.local`**
   ```bash
   CONTACT_EMAIL=info@londonclean.co.uk
   ```

2. **Check console logs**
   - Form submissions will log to terminal
   - You'll see: "Contact Form Submission: { name, phone, service }"

3. **Test with real email later** when deploying to Vercel

---

## Vercel Deployment Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Add contact form with email integration"
   git push
   ```

2. **Import to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect Next.js

3. **Add Environment Variables in Vercel Dashboard**
   - Project Settings → Environment Variables
   - Add all variables from `env.template`
   - Include email configuration (Resend or SMTP)

4. **Deploy** - Done! ✅

---

## Testing After Deployment

1. **Fill out the contact form** on your live site

2. **Check your email** (CONTACT_EMAIL)
   - Should receive quote request within seconds
   - Subject: "New Quote Request from [Name]"

3. **If no email received:**
   - Check Vercel logs: Project → Deployments → View Function Logs
   - Verify environment variables are set correctly
   - Check spam folder
   - For Resend: verify domain is verified
   - For Gmail: ensure app password is correct

---

## Email Template

The email sent looks like this:

```
Subject: New Quote Request from John Smith

New Quote Request
━━━━━━━━━━━━━━━━━━

Name: John Smith
Phone: +44 20 1234 5678
Email: john@example.com (optional)
Service: Deep Cleaning

━━━━━━━━━━━━━━━━━━
Sent from London Clean website contact form
```

---

## Cost Comparison

| Service | Free Tier | Paid Plans |
|---------|-----------|------------|
| **Resend** | 3,000/month | $20/month for 50k |
| **SendGrid** | 100/day | $15/month for 40k |
| **Gmail** | 500/day | Free (with limits) |
| **Mailgun** | 5,000/month | $35/month for 50k |

**Recommendation:** Start with **Resend** free tier (3,000 emails/month is plenty for most businesses).

---

## Security Notes

- ✅ API keys are stored in environment variables (not in code)
- ✅ Form has validation (required fields)
- ✅ Rate limiting recommended (add later if needed)
- ✅ Email addresses are not exposed to client
- ✅ HTTPS encryption on Vercel by default

---

## Troubleshooting

**"Module not found: resend"**
- Run: `npm install resend`

**"Module not found: nodemailer"**
- Run: `npm install nodemailer`

**Emails not sending on Vercel**
- Check environment variables are set in Vercel dashboard
- Check function logs for errors
- Verify API key is correct

**Gmail "Less secure app" error**
- Use App Password, not regular password
- Enable 2FA first

---

## Next Steps

After email is working:
1. ✅ Test form submission
2. ✅ Verify email delivery
3. 📧 Set up auto-reply to customers (optional)
4. 📊 Track conversions in Google Analytics (already implemented)
5. 🔔 Add Slack/Discord notifications (optional)

---

**Questions?** Check the API route: `src/app/api/contact/route.ts`
