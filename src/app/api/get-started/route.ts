import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  try {
    const {
      firstName,
      lastName,
      companyName,
      email,
      phone,
      service,
      description,
    } = await req.json();

    if (!firstName || !lastName || !companyName || !email || !phone || !service || !description) {
      return NextResponse.json(
        { message: 'All fields are required.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.AWS_SES_HOST,
      port: Number(process.env.AWS_SES_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.AWS_SES_USER,
        pass: process.env.AWS_SES_PASS,
      },
    });

    const emailContent = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <style>
            body {
              font-family: 'Arial', sans-serif;
              line-height: 1.6;
              color: #2D3748;
              max-width: 600px;
              margin: 0 auto;
              background-color: #ffffff;
            }
            .container {
              padding: 24px;
              background-color: #ffffff;
              border-radius: 8px;
              box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
            }
            .header {
              text-align: center;
              margin-bottom: 32px;
            }
            .logo {
              max-width: 180px;
              height: auto;
              margin-bottom: 20px;
            }
            .title {
              color: #34A56F;
              font-size: 24px;
              font-weight: 600;
              margin: 16px 0;
              text-align: center;
              border-bottom: 2px solid #34A56F;
              padding-bottom: 16px;
            }
            .field {
              margin-bottom: 24px;
              background-color: #F7FAFC;
              padding: 16px;
              border-radius: 6px;
              border-left: 4px solid #34A56F;
            }
            .label {
              font-weight: 600;
              color: #34A56F;
              text-transform: uppercase;
              font-size: 14px;
              margin-bottom: 8px;
            }
            .value {
              color: #28282B;
              font-size: 16px;
              font-weight: 700;
            }
            .project-description {
              background-color: #F7FAFC;
              padding: 20px;
              border-radius: 8px;
              margin-top: 24px;
              border: 1px solid #E2E8F0;
            }
            .project-description .label {
              color: #34A56F;
              margin-bottom: 12px;
            }
            .project-description .value {
              white-space: pre-wrap;
              line-height: 1.8;
            }
            .footer {
              margin-top: 32px;
              padding-top: 20px;
              border-top: 1px solid #E2E8F0;
              font-size: 14px;
              color: #718096;
              text-align: center;
            }
            .contact-info {
              display: flex;
              justify-content: space-between;
              flex-wrap: wrap;
            }
            .contact-item {
              flex: 1;
              min-width: 250px;
              margin: 8px;
            }
            @media (max-width: 600px) {
              .container {
                padding: 16px;
              }
              .field {
                margin-bottom: 16px;
                padding: 12px;
              }
              .contact-item {
                flex: 100%;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <img src="https://mustard-seed-assets.s3.us-east-2.amazonaws.com/logo.jpg" alt="Mustard Seed Marketing" class="logo" />
              <h1 class="title">New Get Started Form Submission</h1>
            </div>
            
            <div class="field">
              <div class="label">Full Name</div>
              <div class="value">${firstName} ${lastName}</div>
            </div>
            
            <div class="field">
              <div class="label">Company Name</div>
              <div class="value">${companyName}</div>
            </div>
            
            <div class="field">
              <div class="label">Contact Information</div>
              <div class="contact-info">
                <div class="contact-item">
                  <strong>Email:</strong><br/>
                  <a href="mailto:${email}" style="color: #28282B; text-decoration: none; font-weight: 700;">${email}</a>
                </div>
                <div class="contact-item">
                  <strong>Phone:</strong><br/>
                  <a href="tel:${phone}" style="color: #28282B; text-decoration: none; font-weight: 700;">${phone}</a>
                </div>
              </div>
            </div>
            
            <div class="field">
              <div class="label">Requested Service</div>
              <div class="value">${service}</div>
            </div>
            
            <div class="project-description">
              <div class="label">Project Description</div>
              <div class="value">${description}</div>
            </div>
            
            <div class="footer">
              This email was sent from the Mustard Seed Marketing website contact form.
              <br/>
              <span style="color: #A0AEC0;">© ${new Date().getFullYear()} Mustard Seed Marketing</span>
            </div>
          </div>
        </body>
      </html>
    `;

    await transporter.sendMail({
      from: process.env.AWS_SES_FROM,
      to: process.env.AWS_SES_TO,
      replyTo: email,
      subject: 'New Get Started Form Submission',
      html: emailContent,
    });

    return NextResponse.json(
      { message: 'Your information has been sent successfully.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Internal Server Error.' },
      { status: 500 }
    );
  }
}