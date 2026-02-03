import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, email: customerEmail } = body;

    // Validation
    if (!name || !phone || !service) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@londonclean.co.uk';
    
    // For Vercel deployment, we'll use Resend (recommended) or SendGrid
    // Install: npm install resend
    
    // Option 1: Using Resend (recommended for Vercel)
    if (process.env.RESEND_API_KEY) {
      const { Resend } = await import('resend');
      const resend = new Resend(process.env.RESEND_API_KEY);

      await resend.emails.send({
        from: 'London Clean <noreply@londonclean.co.uk>',
        to: recipientEmail,
        replyTo: customerEmail || undefined,
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${customerEmail ? `<p><strong>Email:</strong> ${customerEmail}</p>` : ''}
          <p><strong>Service:</strong> ${service}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">Sent from London Clean website contact form</p>
        `,
      });

      return NextResponse.json({ success: true, message: 'Request sent successfully' });
    }

    // Option 2: Using Nodemailer (works on Vercel with SMTP)
    if (process.env.SMTP_HOST) {
      const nodemailer = await import('nodemailer');
      
      const transporter = nodemailer.default.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || 'noreply@londonclean.co.uk',
        to: recipientEmail,
        replyTo: customerEmail || undefined,
        subject: `New Quote Request from ${name}`,
        html: `
          <h2>New Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          ${customerEmail ? `<p><strong>Email:</strong> ${customerEmail}</p>` : ''}
          <p><strong>Service:</strong> ${service}</p>
          <hr />
          <p style="color: #666; font-size: 12px;">Sent from London Clean website contact form</p>
        `,
      });

      return NextResponse.json({ success: true, message: 'Request sent successfully' });
    }

    // Fallback: Log to console (development only)
    console.log('Contact Form Submission:', { name, phone, service, customerEmail });
    
    return NextResponse.json({ 
      success: true, 
      message: 'Request received (email not configured)',
      warning: 'Email sending not configured. Add RESEND_API_KEY or SMTP credentials to environment variables.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 }
    );
  }
}
