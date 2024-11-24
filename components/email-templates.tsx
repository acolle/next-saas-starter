import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);

interface InviteEmailTemplateProps {
  email: string,
  inviteId: string
}

export const InviteEmailTemplate: React.FC<InviteEmailTemplateProps> = ({ email, inviteId }) => (
  <div>
    <h1>Welcome</h1>
    <p>You have been invited you to join the team!</p>
    <p>To accept the invite, click the link below. If you weren't expecting to receive this email, please ignore it.</p>
    <p><a href="" target="_blank">https://acme.com/i/invite/${inviteId}</a></p>
  </div>
);
