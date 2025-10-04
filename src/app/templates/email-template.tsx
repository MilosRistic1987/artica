import * as React from "react";
import '../[locale]/scss/main.scss'
import { ImageBucket } from "@/types/types";
import { getPageImage } from "@/firebase/actions";

interface EmailTemplateProps {
  name: string;
  email: string;
  subject: string;
  content: string;
}

const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = async ({
  name,
  email,
  subject,
  content,
}) => {


  const [articaLogo, mailBg] = await Promise.all([
    getPageImage(ImageBucket.MAIL, "articaBlueII.png"),
    getPageImage(ImageBucket.MAIL, "iceWall.png"),
  ]);

  console.log("EMAIL", articaLogo)
  console.log('usao')
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        // background: mailBg ? `url(${mailBg}) no-repeat center center` : "none",
        // backgroundSize: "cover",
        fontFamily: "'Inter', sans-serif",
        minWidth: '300px',
        maxWidth: '550px',
        border: "1px solid #f0e9e9",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px"
      }}
    >
      <header
        style={{
          backgroundColor: "#ffffff",
          color: "white",
          textTransform: "uppercase",
          fontWeight: 200,
          letterSpacing: "2px",
          height: "200px",
          position: "relative",
        }}
      >

        <img
          src={articaLogo}
          alt="Artica Logo"
          style={{
            maxWidth: "100%",
            height: "150px",
            display: "block",
            margin: "40px auto",  // Center image with margin
            padding: 0,
          }}
        />


      </header>
      <main>
        <section
          style={{
            backgroundColor: "#fafafaf5",
            padding: "20px",
          }}
        >
          <label style={{ display: 'block', margin: '5px 0' }}>Name: {name}</label>
          <label style={{ display: 'block', margin: '5px 0' }}>Email: {email}</label>
          <label style={{ display: 'block', margin: '5px 0' }}>Subject: {subject}</label>
        </section>
        <section
          style={{
            padding: "20px",
            backgroundColor: "#fffffff7",
            whiteSpace: "pre-wrap"
          }}
        >
          <h5>Message:</h5>
          <p>{content}</p>
        </section>
      </main>
      <footer
        style={{
          backgroundColor: "#3680BA",
          color: "white",
          textAlign: "center",
          padding: "20px",
          fontWeight: 200,
          fontSize: 'smaller'
        }}
      >
        <label style={{ display: "block" }}>ARTICA INTERNATIONAL doo</label>
        <label style={{ display: "block" }}>Bulevar Nikole Tesle 48</label>
        <label style={{ display: "block" }}>11070 Novi Beograd, Srbija</label>
      </footer>
    </div>
  );
}

export default EmailTemplate;
