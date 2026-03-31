import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, service, email: customerEmail, preferredDate, preferredTime, comments } = body;

    // Comprehensive server-side validation
    const errors: string[] = [];

    // Name validation
    const nameTrimmed = name?.trim() || '';
    if (!nameTrimmed) {
      errors.push('Full name is required');
    } else if (nameTrimmed.length < 3) {
      errors.push('Name must be at least 3 characters');
    } else if (!/^[a-zA-Z\s'-]+$/.test(nameTrimmed)) {
      errors.push('Name can only contain letters, spaces, hyphens and apostrophes');
    } else if (nameTrimmed.split(' ').filter((word: string) => word.length > 0).length < 2) {
      errors.push('Please provide both first and last name');
    }

    // UK Phone validation
    const phoneTrimmed = phone?.trim() || '';
    if (!phoneTrimmed) {
      errors.push('Phone number is required');
    } else {
      const ukMobilePattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;
      const ukLandlinePattern = /^(\+44\s?[1-2]\d{1,2}|\(?0[1-2]\d{1,2}\)?)\s?\d{3,4}\s?\d{4}$/;
      const phoneDigitsOnly = phoneTrimmed.replace(/[^0-9+]/g, '');
      const internationalPattern = /^\+\d{10,15}$/;
      
      if (!ukMobilePattern.test(phoneTrimmed) && 
          !ukLandlinePattern.test(phoneTrimmed) && 
          !internationalPattern.test(phoneDigitsOnly)) {
        errors.push('Please provide a valid UK phone number');
      }
    }

    // Email validation (optional but must be valid if provided)
    const emailTrimmed = customerEmail?.trim() || '';
    if (emailTrimmed) {
      const emailPattern = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      if (!emailPattern.test(emailTrimmed)) {
        errors.push('Please provide a valid email address');
      }
    }

    // Service validation
    if (!service) {
      errors.push('Service selection is required');
    }

    if (errors.length > 0) {
      return NextResponse.json(
        { error: errors.join('. '), errors },
        { status: 400 }
      );
    }

    // Email configuration
    const recipientEmail = process.env.CONTACT_EMAIL || 'info@londonclean.co.uk';
    
    // Using Resend for email delivery
    if (process.env.RESEND_API_KEY) {
      try {
        const { Resend } = await import('resend');
        const resend = new Resend(process.env.RESEND_API_KEY);

        const emailResult = await resend.emails.send({
          from: 'London Clean <info@london-clean01.co.uk>',
          to: recipientEmail,
          replyTo: emailTrimmed || undefined,
          subject: `🧹 New Quote Request from ${nameTrimmed}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="utf-8">
              <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
              <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
                <h1 style="color: white; margin: 0; font-size: 28px;">🧹 New Quote Request</h1>
              </div>
              
              <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; border: 1px solid #e0e0e0;">
                <h2 style="color: #667eea; margin-top: 0;">Customer Details</h2>
                
                <table style="width: 100%; border-collapse: collapse;">
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold; width: 30%;">Name:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">${nameTrimmed}</td>
                  </tr>
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold;">Phone:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">
                      <a href="tel:${phoneTrimmed.replace(/\s/g, '')}" style="color: #667eea; text-decoration: none;">${phoneTrimmed}</a>
                    </td>
                  </tr>
                  ${emailTrimmed ? `
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold;">Email:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">
                      <a href="mailto:${emailTrimmed}" style="color: #667eea; text-decoration: none;">${emailTrimmed}</a>
                    </td>
                  </tr>
                  ` : ''}
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold;">Service:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">
                      <span style="background: #667eea; color: white; padding: 4px 12px; border-radius: 20px; font-size: 14px;">${service}</span>
                    </td>
                  </tr>
                  ${preferredDate ? `
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold;">Preferred Date:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">${preferredDate}</td>
                  </tr>
                  ` : ''}
                  ${preferredTime ? `
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold;">Preferred Time:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">${preferredTime}</td>
                  </tr>
                  ` : ''}
                  ${comments ? `
                  <tr>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0; font-weight: bold;">Additional Comments:</td>
                    <td style="padding: 12px; background: white; border: 1px solid #e0e0e0;">${comments}</td>
                  </tr>
                  ` : ''}
                </table>
                
                <div style="margin-top: 30px; padding: 20px; background: #fff3cd; border-left: 4px solid #ffc107; border-radius: 4px;">
                  <p style="margin: 0; font-weight: bold; color: #856404;">⚡ Action Required</p>
                  <p style="margin: 5px 0 0 0; color: #856404;">Please respond to this customer within 24 hours for best conversion rate.</p>
                </div>
              </div>
              
              <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666; font-size: 12px;">
                <p style="margin: 0;">Sent from London Clean website contact form</p>
                <p style="margin: 5px 0 0 0;">Received: ${new Date().toLocaleString('en-GB', { timeZone: 'Europe/London' })}</p>
              </div>
            </body>
            </html>
          `,
        });

        console.log('Email sent successfully via Resend:', emailResult);
        return NextResponse.json({ 
          success: true, 
          message: 'Thank you! Your request has been sent successfully. We\'ll contact you within 24 hours.' 
        });
      } catch (resendError: any) {
        console.error('Resend email error:', resendError);
        return NextResponse.json(
          { 
            error: 'Failed to send email. Please try again or call us directly.',
            details: resendError.message 
          },
          { status: 500 }
        );
      }
    }

    // No email service configured
    console.error('RESEND_API_KEY not configured!');
    console.log('Contact Form Submission (not sent):', { name: nameTrimmed, phone: phoneTrimmed, service, email: emailTrimmed, preferredDate, preferredTime, comments });
    
    return NextResponse.json({ 
      error: 'Email service not configured. Please contact us directly at +44 7438 217078',
      warning: 'RESEND_API_KEY not found in environment variables'
    }, { status: 503 });

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send request. Please try again.' },
      { status: 500 }
    );
  }
}
