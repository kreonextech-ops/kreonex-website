import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    // 1. Get the data from the form (including phone)
    const { name, email, phone, message } = await req.json();

    // 2. Setup the transporter (Using your Gmail credentials from .env)
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 3. Configure the email layout
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // Sends the email to yourself
      subject: `New Kreonex Lead: ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; max-width: 600px; border: 1px solid #ddd; padding: 20px;">
          <h2 style="color: #d60000; border-bottom: 2px solid #d60000; padding-bottom: 10px;">New Contact Submission</h2>
          
          <p><strong>👤 Name:</strong> ${name}</p>
          <p><strong>📧 Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <p><strong>📞 Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
          
          <p><strong>📝 Message:</strong></p>
          <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #d60000; font-style: italic;">
            ${message}
          </p>
        </div>
      `,
    };

    // 4. Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email Error:", error);
    return NextResponse.json({ message: "Failed to send email" }, { status: 500 });
  }
}