import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email:string;
  subject:string;
  content:string
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  content,
}) => (
  <div>
    <h5>Name: {name}</h5>
    <h5>Email: {email}</h5>
    <h5>Subject: {subject}</h5>
    <h5>Message: {content}</h5>
  </div>
);

export default EmailTemplate;
