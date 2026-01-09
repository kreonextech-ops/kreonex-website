import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
    console.log("---------------");
    console.log("1. API Route was hit!");

    try {
        const { name, email, subject, message } = await request.json();

        // 🔴 CHANGE: Using Port 587 (TLS) instead of default SSL
        const transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Lead: ${subject}`,
            html: `
                <h3>New Contact Form Submission</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        };

        console.log("5. Attempting to send email via Port 587...");
        await transporter.sendMail(mailOptions);
        console.log("6. SUCCESS! Email sent.");

        return NextResponse.json({ message: "Email Sent Successfully!" }, { status: 200 });

    } catch (error) {
        console.error("❌ ERROR FAILED:", error);
        return NextResponse.json({ message: "Failed to send email.", error: error.message }, { status: 500 });
    }
}