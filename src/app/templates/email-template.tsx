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
  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: mailBg ? `url(${mailBg}) no-repeat center center` : "none",
        backgroundSize: "cover",
        fontFamily: "'Inter', sans-serif",
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
        {articaLogo && (
          <img
            src={articaLogo}
            alt="Artica Logo"
            style={{
              maxWidth: "100%",
              height: "150px",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              margin: 0,
              padding: 0,
            }}
          />
        )}
      </header>
      <main>
        <section
          style={{
            backgroundColor: "#f3f3f3f5",
            padding: "20px",
          }}
        >
          <h5>Name: {name}</h5>
          <h5>Email: {email}</h5>
          <h5>Subject: {subject}</h5>
        </section>
        <section
          style={{
            padding: "20px",
            backgroundColor: "#fffffff7",
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
