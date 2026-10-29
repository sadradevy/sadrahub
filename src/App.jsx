import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider, useLanguage } from "./context/LanguageContext";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import ContactForm from "./components/ContactForm";
import ScrollProgress from "./components/ScrollProgress";
import BackToTop from "./components/BackToTop";
import useTypewriter from "./hooks/useTypewriter";
import { FaArrowDown, FaArrowRight, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function AppContent() {
  const { t } = useLanguage();
  const roles = t("hero.roles");
  const { text } = useTypewriter(roles, { typeSpeed: 60, deleteSpeed: 35, pauseTime: 2500 });

  return (
    <>
      <ScrollProgress />
      <div className="site-atmosphere" aria-hidden="true" />
      <Navbar />

      <main>
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow hero-eyebrow"><span className="status-dot" />{t("hero.greeting")}</p>
              <h1 id="hero-title" className="hero-heading">
                <span>{t("hero.name.first")}</span>
                <span className="hero-last-name">{t("hero.name.last")}</span>
              </h1>
              <p className="hero-role"><span className="role-bracket">/</span> {text}<span className="type-caret" aria-hidden="true" /></p>
              <p className="hero-description">{t("hero.subtitle")}</p>
              <div className="hero-actions">
                <a href="#projects" className="button button-primary">{t("hero.cta.work")}<FaArrowRight aria-hidden="true" /></a>
                <a href="#contact" className="button button-quiet">{t("hero.cta.contact")}<span aria-hidden="true">↗</span></a>
              </div>
              <a href="#about" className="scroll-cue"><span className="scroll-line" />{t("about.preTitle")}<FaArrowDown aria-hidden="true" /></a>
            </div>

            <div className="hero-art" aria-hidden="true">
              <div className="hero-art-glow" />
              <div className="orbit orbit-outer"><span /></div>
              <div className="orbit orbit-inner"><span /></div>
              <div className="hero-monogram"><span>SH</span><i /></div>
              <div className="art-coordinate coordinate-top">35°41′ N</div>
              <div className="art-coordinate coordinate-bottom">51°25′ E <span>•</span> 01</div>
              <div className="art-crosshair crosshair-one" />
              <div className="art-crosshair crosshair-two" />
            </div>
          </div>
          <div className="hero-index"><span>01</span><i />PORTFOLIO — 2026</div>
        </section>

        <About />
        <Skills />
        <Projects />

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-shell">
            <div className="contact-copy">
              <p className="eyebrow">{t("contact.preTitle")}</p>
              <h2 id="contact-title">{t("contact.title")}</h2>
              <p>{t("contact.description")}</p>
              <a className="contact-direct" href="https://github.com/sadradevy" target="_blank" rel="noreferrer">
                <span className="contact-direct-icon"><FaGithub aria-hidden="true" /></span>
                <span><small>GITHUB</small><b>@sadradevy</b></span>
                <span className="contact-direct-arrow">↗</span>
              </a>
            </div>
            <div className="contact-form-wrap"><ContactForm /></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a href="#" className="footer-mark">SH<span>·</span></a>
        <p>{t("footer.copyright", { year: new Date().getFullYear() })}</p>
        <div className="footer-socials">
          <a href="https://github.com/sadradevy" target="_blank" rel="noreferrer" aria-label="GitHub"><FaGithub /></a>
          <a href="https://x.com/sadradevy" target="_blank" rel="noreferrer" aria-label="X"><FaXTwitter /></a>
        </div>
        <span className="footer-note">{t("footer.codeWithPassion")}</span>
      </footer>
      <BackToTop />
    </>
  );
}

export default function App() {
  return <ThemeProvider><LanguageProvider><AppContent /></LanguageProvider></ThemeProvider>;
}
