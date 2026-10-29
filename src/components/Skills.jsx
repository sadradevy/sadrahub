import useInView from "../hooks/useInView";
import { useLanguage } from "../context/LanguageContext";

const technologies = [
  { title: "skills.frontend", names: ["React", "Next.js", "TypeScript", "Tailwind CSS", "shadcn"] },
  { title: "skills.backend", names: ["Node.js", "Flask", "PostgreSQL", "Python", "REST APIs"] },
  { title: "skills.tools", names: ["Git", "Figma", "Vercel", "Linux", "Docker"] },
];

export default function Skills() {
  const { t } = useLanguage();
  const [ref, inView] = useInView(0.1);

  return (
    <section id="skills" ref={ref} className="section skills-section">
      <header className={`section-heading ${inView ? "is-visible" : ""}`}>
        <div><p className="eyebrow">{t("skills.preTitle")}</p><h2>{t("skills.title")}</h2></div>
        <span className="section-index">02 <i /> THE TOOLKIT</span>
      </header>
      <div className="skills-board">
        {technologies.map((group, index) => (
          <div className={`skill-group ${inView ? "is-visible" : ""}`} key={group.title} style={{ "--row-index": index }}>
            <div className="skill-group-heading"><span>0{index + 1}</span><h3>{t(group.title)}</h3></div>
            <ul>{group.names.map((name) => <li key={name}><span className="skill-marker" />{name}</li>)}</ul>
          </div>
        ))}
      </div>
    </section>
  );
}
