import { Resend } from 'resend';
import EmailTemplate from '@/app/templates/email-template';
import { NextRequest } from 'next/server';

const resend = new Resend('re_JkmHEbjV_GeX8Y18vhnJvgTTTmFpq1sEV');

export async function POST(req: NextRequest) {
  try {
    const content = await req.json();

    const { data, error } = await resend.emails.send({
      from: 'Antica <onboarding@resend.dev>',
      to: ['ristic.aleksandra1990@gmail.com'],
      subject: 'Redirect from artica.rs contact form',
      text: 'Message text',
      react: EmailTemplate(content),

    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }
    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
