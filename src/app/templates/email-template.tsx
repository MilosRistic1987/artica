import * as React from "react";
import '../[locale]/scss/main.scss'

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  content: string
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  subject,
  content,
}) => (
  <div style={{ backgroundColor: "white" }}>
    <header style={{ backgroundColor: "#3680BA", color: 'white', textTransform: 'uppercase', fontWeight: '200', letterSpacing: '2px' }}>
      <h1 style={{ margin: "0 auto", padding: '20px' }}>Artica</h1>
    </header>
    <section style={{ backgroundColor: '#ececec' }}>
      <h5>Name: {name}</h5>
      <h5>Email: {email}</h5>
      <h5>Subject: {subject}</h5>
    </section>
    <section>
      <h5>Message: </h5>
      <p>{content}</p>
    </section>
    <footer style={{ backgroundColor: "#3680BA", color: 'white' }}>
      <label style={{ margin: "0 auto", padding: '20px' }}>ARTICA INTERNATIONAL doo</label>
    </footer>
  </div>
);

export default EmailTemplate;
