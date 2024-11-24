import { z } from 'zod';
import { Resend } from 'resend';

import { InviteEmailTemplate } from '@/components/email-templates';


// TODO: 
export async function sendInvitationEmail(email: string, inviteId: string) {

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'Acme <team@glow.as>',
    to: [email],
    subject: "You've been invited to join a team on Glow!",
    react: InviteEmailTemplate({email, inviteId}),
  });

}