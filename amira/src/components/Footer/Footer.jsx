import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations.js";
import "./Footer.css";

const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>{t.footer.brand}</h3>
          <p>{t.footer.tagline}</p>
        </div>

        <div className="footer-section">
          <h3>{t.footer.quickLinks}</h3>
          <ul>
            <li>
              <Link to="/">{t.footer.navigation.home}</Link>
            </li>
            <li>
              <Link to="/produits">{t.footer.navigation.products}</Link>
            </li>
            <li>
              <Link to="/contact">{t.footer.navigation.contact}</Link>
            </li>
            <li>
              <Link to="/login">Admin</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>{t.footer.contactSection.title}</h3>
          <p>{t.footer.contactSection.email}</p>
          <p>{t.footer.contactSection.phone}</p>
        </div>
      </div>

      <div className="copyright">
        <p>{t.footer.copyright}</p>
      </div>
    </footer>
  );
};

export default Footer;
