import { memo } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTypedText } from "../../hooks/useTypedText";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { ROUTE_PATHS } from "../../helpers/routes/RoutesHelper";
import "./Dashboard.css";

const TYPED_ROLES = [
  "Full Stack Developer",
  "Problem Solver",
  "CS Graduate",
  "Open Source Enthusiast",
];

const SKILLS = [
  {
    category: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "Java", "C#", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "React",
      "Spring Boot",
      "Express.js",
      "Flask",
      "Node.js",
      "discord.py",
      "TensorFlow",
      "Unity",
    ],
  },
  {
    category: "Databases & Cloud",
    items: [
      "PostgreSQL",
      "Redis",
      "Supabase",
      "Railway",
      "Vercel",
      "Docker",
      "Kubernetes",
    ],
  },
  {
    category: "Tools",
    items: ["Git", "Playwright", "GraphQL", "Jenkins", "Postman", "GDS", "Pygame"],
  },
];

const scrollToAbout = () => {
  document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
};

const DashboardContainer = () => {
  const typedText = useTypedText(TYPED_ROLES);
  const aboutRef = useScrollReveal<HTMLElement>();
  const skillsRef = useScrollReveal<HTMLElement>();

  return (
    <div className="dashboard-container">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg">
          <div className="hero-grid" />
          <div className="hero-glow" />
        </div>

        <div className="hero-content">
          <p className="hero-eyebrow">Hello, I'm</p>
          <h1 className="hero-name">Lucas Phillips</h1>
          <div className="hero-role">
            <span className="hero-role-text">{typedText}</span>
            <span className="hero-cursor">|</span>
          </div>
          <p className="hero-bio">
            Building elegant solutions to complex problems. Passionate about
            algorithms, clean code, and modern web technologies.
          </p>
          <div className="hero-cta">
            <Link
              to={ROUTE_PATHS.PROJECTS}
              className="cta-btn cta-btn--primary"
            >
              View Projects
              <FontAwesomeIcon icon="arrow-right" />
            </Link>
            <a
              href="https://www.linkedin.com/in/lucasphillips28"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--secondary"
            >
              LinkedIn ↗
            </a>
          </div>
        </div>

        <button
          type="button"
          className="hero-scroll"
          onClick={scrollToAbout}
          aria-label="Scroll to about section"
        >
          <FontAwesomeIcon icon="chevron-down" />
        </button>
      </section>

      {/* About */}
      <section id="about" className="about-section" ref={aboutRef}>
        <div className="section-content">
          <div className="section-label reveal">About</div>
          <h2 className="section-title reveal reveal-delay-1">
            Building with purpose,
            <br />
            shipping with care.
          </h2>
          <p className="about-text reveal reveal-delay-2">
            I'm a full stack developer with a background in computer science,
            specialising in building clean, performant applications. From VR
            simulations and machine learning pipelines to modern web apps, I
            enjoy working across the full stack — wherever the interesting
            problems live.
          </p>
          <div className="about-cards reveal reveal-delay-3">
            <div className="about-card">
              <span className="about-card-number">3+</span>
              <span className="about-card-label">Years of Experience</span>
            </div>
            <div className="about-card">
              <span className="about-card-number">15+</span>
              <span className="about-card-label">Technologies Used</span>
            </div>
            <div className="about-card">
              <span className="about-card-number">CS</span>
              <span className="about-card-label">Degree Graduate</span>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="skills-section" ref={skillsRef}>
        <div className="section-content">
          <div className="section-label reveal">Tech Stack</div>
          <h2 className="section-title reveal reveal-delay-1">
            Tools I work with
          </h2>
          <div className="skills-grid reveal reveal-delay-2">
            {SKILLS.map((group) => (
              <div key={group.category} className="skills-group">
                <h3 className="skills-group-title">{group.category}</h3>
                <div className="skills-items">
                  {group.items.map((skill) => (
                    <span key={skill} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export const Dashboard = memo(DashboardContainer);
