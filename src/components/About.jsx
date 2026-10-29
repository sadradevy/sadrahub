import useInView from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";
import { FaArrowDown } from "react-icons/fa6";

export default function About() {
  const { t } = useLanguage();
  const [ref, inView] = useInView(0.12);
  const highlights = t("about.highlights");

  return (
    <section id="about" ref={ref} className="section about-section">
      <div className={`about-kicker ${inView ? "is-visible" : ""}`}>
        <p className="eyebrow">{t("about.preTitle")}</p>
        <span className="section-index">01 <i /> A LITTLE ABOUT ME</span>
      </div>
      <div className={`about-content ${inView ? "is-visible" : ""}`}>
        <h2>{t("about.title")}<span className="about-period">.</span></h2>
        <div className="about-copy">
          <p className="about-lede">{t("about.bio1")}</p>
          <p>{t("about.bio2")}</p>
          <p>{t("about.bio3")}</p>
        </div>
        <ul className="about-highlights">
          {highlights.map((item, index) => <li key={item}><span>0{index + 1}</span>{item}<FaArrowDown aria-hidden="true" /></li>)}
        </ul>
      </div>
    </section>
  );
}
