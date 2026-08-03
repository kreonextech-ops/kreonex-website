import nodemailer from 'nodemailer';

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, contact, brief } = body;

    if (!name || !contact || !brief) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'kreonextech@gmail.com',
        pass: 'pxszgozhnzcnudak',
      },
    });

    const mailOptions = {
      from: 'kreonextech@gmail.com',
      to: 'info@kreonex.com, kreonextech@gmail.com',
      subject: `New Lead: ${name}`,
      text: `
Name: ${name}
Contact: ${contact}

Brief:
${brief}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send message' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
