import "./App.css";

const projects = [
  {
    number: "01",
    title: "Farmart",
    category: "FULL-STACK APPLICATION",
    description:
      "A full-stack agricultural platform designed to bring together a practical user experience with the functionality of a complete web application.",
    technologies: ["Frontend", "Backend", "JavaScript"],
    github: "https://github.com/celestine-021/Farmart.git",
  },

  {
    number: "02",
    title: "Hostel",
    category: "FULL-STACK SYSTEM",
    description:
      "A Hostel Management Information System developed to support hostel administration and make accommodation management more organized and efficient.",
    technologies: ["Frontend", "Backend", "JavaScript"],
    github: "https://github.com/celestine-021/hostel-management-.git",
  },

  {
    number: "03",
    title: "Pizza Menu",
    category: "FRONTEND PROJECT",
    description:
      "A responsive pizza menu interface created to present menu items through a clean and user-friendly web experience.",
    technologies: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/celestine-021/pizza-menu.git",
  },

  {
    number: "04",
    title: "Farmart Frontend",
    category: "FRONTEND DEVELOPMENT",
    description:
      "The frontend side of the Farmart project, focused on creating the user-facing experience and interface.",
    technologies: ["Frontend", "JavaScript", "CSS"],
    github: "https://github.com/celestine-021/Farmart_frontend.git",
  },
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Python",
  "Flask",
  "SQL",
  "SQLite",
  "REST APIs",
  "Frontend Development",
  "Backend Development",
  "Git & GitHub",
];

const githubProfile = "https://github.com/celestine-021";

const linkedinProfile =
  "https://www.linkedin.com/in/celestine-wangari-45140134a/";

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGATION */}

      <nav className="navbar">
        <a href="#" className="logo">
          CW.
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#skills">Skills</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <main>
        {/* HERO */}

        <section className="hero">
          <div className="hero-content">
            <p className="eyebrow">FULL-STACK DEVELOPER • NAIROBI, KENYA</p>

            <h1>
              Celestine
              <br />
              <span>Wainaina.</span>
            </h1>

            <p className="hero-description">
              I build thoughtful digital experiences from the frontend interface
              to the backend logic that makes everything work.
            </p>

            <div className="hero-buttons">
              <a href="#work" className="primary-button">
                Explore my work ↓
              </a>

              <a href="#contact" className="secondary-button">
                Let's talk ↗
              </a>

              <a
                href="/celestine_wainaina_.CV.pdf"
                className="secondary-button"
                target="_blank"
                rel="noopener noreferrer"
              >
                View CV ↗
              </a>
            </div>

            <div className="scroll-text">
              <span>↓</span> SCROLL TO EXPLORE
            </div>
          </div>
        </section>

        {/* ABOUT */}

        <section className="about" id="about">
          <p className="section-label">01 — ABOUT ME</p>

          <div className="about-content">
            <h2>
              Code with
              <br />
              <span>purpose.</span>
            </h2>

            <div>
              <p>
                I'm Celestine, a full-stack developer and Moringa School
                graduate passionate about building useful, beautiful, and
                user-focused digital experiences.
              </p>

              <p className="about-second">
                I work across both frontend and backend development,
                transforming ideas into functional web applications and
                exploring how design, technology, and problem-solving can work
                together.
              </p>
            </div>
          </div>
        </section>

        {/* PROJECTS */}

        <section className="work" id="work">
          <p className="section-label">02 — SELECTED WORK</p>

          <div className="projects">
            {projects.map((project) => (
              <article className="project" key={project.number}>
                <div className="project-number">{project.number}</div>

                <div className="project-info">
                  <p className="project-category">{project.category}</p>

                  <h3>{project.title}</h3>

                  <p className="project-description">{project.description}</p>

                  <div className="tags">
                    {project.technologies.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <div className="project-buttons">
                    <a
                      href={project.github}
                      className="github-link"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* SKILLS */}

        <section className="skills" id="skills">
          <p className="section-label">03 — WHAT I DO</p>

          <div className="skills-intro">
            <h2>
              From idea
              <br />
              to <span>production.</span>
            </h2>

            <p>
              I enjoy working across the stack and turning ideas into functional
              digital products. From responsive interfaces to backend
              functionality, I enjoy understanding how the pieces fit together.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div key={skill}>{skill}</div>
            ))}
          </div>
        </section>

        {/* EDUCATION */}

        <section className="education" id="education">
          <p className="section-label">04 — EDUCATION</p>

          <div className="education-card">
            <div>
              <p className="education-year">MORINGA SCHOOL</p>

              <h2>
                Software
                <br />
                Development
              </h2>
            </div>

            <p className="education-description">
              Moringa School graduate with hands-on experience developing
              frontend and backend applications, working with modern web
              technologies, APIs, databases, version control, and software
              development practices.
            </p>
          </div>
        </section>

        {/* CONTACT */}

        <section className="contact" id="contact">
          <p className="section-label">05 — CONTACT</p>

          <h2>
            Let's build
            <br />
            <span>something great.</span>
          </h2>

          <div className="contact-details">
            <a href="mailto:wangaricelestine036@gmail.com">
              wangaricelestine036@gmail.com
            </a>

            <a
              href="https://wa.me/254794382881"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp: +254 794 382 881
            </a>
          </div>

          <div className="social-links">
            <a href={githubProfile} target="_blank" rel="noopener noreferrer">
              GitHub ↗
            </a>

            <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
              LinkedIn ↗
            </a>
          </div>
        </section>
      </main>

      {/* FOOTER */}

      <footer>
        <p>© 2026 Celestine Wainaina</p>

        <div className="footer-links">
          <a href={githubProfile} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>

          <a href={linkedinProfile} target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
        </div>
      </footer>
    </div>
  );
}

export default App;
