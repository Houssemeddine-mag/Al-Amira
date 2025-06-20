import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations";
import "../styles/Contact.css";

const Contact = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const handleCall = () => {
    window.location.href = "tel:0541376303";
  };

  return (
    <div className="contact-page">
      {/* Add particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      {/* Existing content */}
      <h1>{t.contactPage.title}</h1>
      <div className="contact-container">
        <div className="contact-info">
          <h2>{t.contactPage.infoTitle}</h2>
          <p>
            <i className="icon">📍</i> {t.contactPage.address1}
          </p>
          <p>
            <i className="icon">📍</i> {t.contactPage.address2}
          </p>
          <p>
            <i className="icon">📍</i> {t.contactPage.address3}
          </p>
          <p>
            <i className="icon">📍</i> {t.contactPage.address4}
          </p>
          <p>
            <i className="icon">📞</i> {t.contactPage.phone}
          </p>
          <p>
            <i className="icon">✉️</i>
            <a href="mailto:alameera2500@gmail.com" className="email-link">
              {t.contactPage.email}
            </a>
          </p>
          <p>
            <i className="icon">📱</i>
            <a
              href="https://www.instagram.com/alameeradz?igsh=MW04NDc3ZW9mNXZyaw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              @alameeradz
            </a>
          </p>
          <button onClick={handleCall} className="call-button">
            {t.contactPage.callButton}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
