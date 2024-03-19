import type { APIRoute } from 'astro';
import { SMTPClient } from 'emailjs';

export const POST: APIRoute = async ({ request }) => {
  const client = new SMTPClient({
    user: import.meta.env.EMAILJS_CLIENT_USER,
    password: import.meta.env.EMAILJS_CLIENT_PASSWORD,
    host: import.meta.env.EMAILJS_CLIENT_HOST,
    tls: {
      ciphers: 'SSLv3',
    },
  });

  const data = await request.formData();
  const name = data.get('name');
  const email = data.get('email');
  const message = data.get('message');

  let sendErr;
  const messageBody: string = `
  name: ${name}\n
  email: ${email}\n
  
  ${message}
  `;

  client.send(
    {
      from: import.meta.env.EMAILJS_SEND_FROM,
      to: import.meta.env.EMAILJS_SEND_TO,
      subject: 'hammadmajid.me | New form submission',
      text: `${messageBody}`,
    },
    (err) => {
      sendErr = err;
    },
  );

  if (sendErr) {
    return new Response(
      JSON.stringify({
        message: "Failed to submit form.",
        status: 500,
      }),
      { status: 500 },
    );
  }

  return new Response(
    JSON.stringify({
      message: "Form submitted successfully!",
      status: 200,
    }),
    { status: 200 },
  );
};