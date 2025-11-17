import { useNavigate } from "react-router-dom";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../translations/translations.js";
import "../styles/Landing.css";
import kalbLouz from "../assets/kalb louz1.jpg";
import logo from "../assets/logo.jpg"; // Add this import

const Landing = () => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div className="landing-page">-
      {/* Hero Section */}
      <section className="landing-hero">
        <div className="wave-container">
          <div className="wave wave-1"></div>
          <div className="wave wave-2"></div>
          <div className="wave wave-3"></div>
        </div>
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-logo">
              <img src={logo} alt="Al Ameera Logo" />
            </div>
            <div className="brand-name">Al Ameera</div>
            <h1>{t.hero.title}</h1>
            <p className="hero-subtitle">{t.hero.subtitle}</p>
            <div className="hero-buttons">
              <button
                className="gold-button"
                onClick={() => navigate("/produits")}
              >
                {t.hero.discover}
              </button>
              <a
                href="https://elcharkelyoum.dz/2025/02/27/%D9%82%D8%B3%D9%86%D8%B7%D9%8A%D9%86%D8%A9-%D9%82%D9%84%D8%A8-%D8%A7%D9%84%D9%84%D9%88%D8%B2-%D8%A7%D9%84%D8%A3%D9%85%D9%8A%D8%B1%D8%A9-%D8%A3%D8%B5%D9%84%D9%8A%D8%A9-%D9%88-%D9%86%D9%88%D8%B9/"
                className="outline-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.hero.article}
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={kalbLouz} alt="Kalb el Louz" />
          </div>
        </div>
      </section>

      {/* Featured Collection */}
      <section className="featured-section">
        <div className="section-header">
          <h2>{t.history.title}</h2>
          <p>{t.history.subtitle}</p>
        </div>

        <div className="featured-grid">
          <div className="featured-item">
            <div className="item-number">01</div>
            <h3>{t.history.tradition.title}</h3>
            <p>{t.history.tradition.text}</p>
          </div>

          <div className="featured-item">
            <div className="item-number">02</div>
            <h3>{t.history.ingredients.title}</h3>
            <p>{t.history.ingredients.text}</p>
          </div>

          <div className="featured-item">
            <div className="item-number">03</div>
            <h3>{t.history.reputation.title}</h3>
            <p>{t.history.reputation.text}</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section">
        <div className="about-content">
          <h2>{t.about.title}</h2>
          <p>{t.about.text}</p>
          <button
            className="outline-button"
            onClick={() => navigate("/contact")}
          >
            {t.about.contact}
          </button>
        </div>
      </section>
    </div>
  );
};

export default Landing;
