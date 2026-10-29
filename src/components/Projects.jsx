import { useLanguage } from "../context/LanguageContext";
import useInView from "../hooks/useInView";
import { FaArrowUpRightFromSquare, FaChartSimple, FaCode, FaLayerGroup, FaListCheck } from "react-icons/fa6";

const projectMarks = [<FaChartSimple />, <FaListCheck />, <FaCode />, <FaLayerGroup />];

export default function Projects() {
  const { t } = useLanguage();
  const [ref, inView] = useInView(0.08);
  const projects = t("projects.items");

  return (
    <section id="projects" ref={ref} className="section projects-section">
      <header className={`section-heading ${inView ? "is-visible" : ""}`}>
        <div><p className="eyebrow">{t("projects.preTitle")}</p><h2>{t("projects.title")}</h2></div>
        <span className="section-index">03 <i /> SELECTED WORK</span>
      </header>
      <div className="project-list">
        {projects.map((project, index) => (
          <article className={`project-row project-row-${index + 1} ${inView ? "is-visible" : ""}`} key={project.title} style={{ "--row-index": index }}>
            <div className={`project-visual project-visual-${index + 1}`} aria-hidden="true">
              <div className="visual-grid" />
              <div className="visual-window">
                <div className="visual-window-bar"><i /><i /><i /><span>0{index + 1} / 04</span></div>
                <div className="visual-window-content">
                  <div className="visual-mark">{projectMarks[index] || <FaCode />}</div>
                  <div className="visual-lines"><i /><i /><i /></div>
                  <div className="visual-shape" />
                </div>
              </div>
              <span className="visual-caption">SADRA H. — PROJECT STUDY</span>
            </div>
            <div className="project-info">
              <div className="project-meta"><span>0{index + 1}</span><i />{index === 0 ? "DASHBOARD" : index === 1 ? "BACKEND" : index === 2 ? "PERSONAL" : "EDUCATION"}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span className="project-more" aria-hidden="true">{projectMarks[index] || <FaCode />}<span>PROJECT OVERVIEW</span><FaArrowUpRightFromSquare /></span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
