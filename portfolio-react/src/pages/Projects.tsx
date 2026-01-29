import "../styles/Projects.css";
import PortfolioIMG from '../assets/images/project-images/portfolio_temp.jpg'
import CatsyIMG from '../assets/images/project-images/catsy.png'

const projects = [
  {
    title: "Catsy",
    image: CatsyIMG,
    url: "https://github.com/GrofDzsepetto/Catsy",
    color: "#C33742",
  },
  {
    title: "My portfolio (idk if this counts)",
    image: PortfolioIMG,
    url: "https://github.com/GrofDzsepetto/portfolioWebsite",
    color: "#2B2B2B",
  },
];

export default function Projects() {
  return (
    <section className="projects">
      <div className="projects-inner">
        <h1>PROJECTS</h1>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="project-card"
            >
              <div className="project-image">
                <img src={project.image} alt={project.title} />
              </div>

              <div
                className="project-footer"
                style={{ backgroundColor: project.color }}
              >
                {project.title}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}



