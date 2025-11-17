import { useState } from "react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../translations/translations";
import logo from "../../assets/logo.jpg";
import "./Header.css";

const Header = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo-link" onClick={closeMenu}>
          <img src={logo} alt="Al Ameera Logo" className="logo" />
        </Link>

        <nav className="nav">
          <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
            <li>
              <Link to="/" onClick={closeMenu}>
                {t.home}
              </Link>
            </li>
            <li>
              <Link to="/produits" onClick={closeMenu}>
                {t.products}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={closeMenu}>
                {typeof t.contact === "string" ? t.contact : t.contact.title}
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  toggleLanguage();
                  closeMenu();
                }}
                className="language-switch"
              >
                {language === "fr" ? "عربي" : "Français"}
              </button>
            </li>
          </ul>
        </nav>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
    </header>
  );
};

export default Header;
