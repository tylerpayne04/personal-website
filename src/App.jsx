import './App.css'

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="logo">Tyler Payne</h2>
          <ul className="nav-links">
            <li><a onClick={() => scrollToSection('home')}>Home</a></li>
            <li><a onClick={() => scrollToSection('about')}>About</a></li>
            <li><a onClick={() => scrollToSection('projects')}>Projects</a></li>
            <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Tyler Payne</h1>
          <p className="hero-location">📍 Eugene / Portland, Oregon</p>
          <p className="hero-bio">
            Data Science major with minors in Sports Business, Computer Science, and Math, 
            interested in applying analytics, automation, and technology to solve problems 
            in the sports and business industries.
          </p>
          <div className="hero-links">
            <a href="https://github.com/tylerpayne04" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/tylerpayne04/" target="_blank" rel="noopener noreferrer" className="social-btn">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
              LinkedIn
            </a>
          </div>
          <div className="hero-contact">
            <a href="mailto:tpay@uoregon.edu" className="email-link">tpay@uoregon.edu</a>
            <span className="separator">•</span>
            <a href="mailto:tylerpayne04@outlook.com" className="email-link">tylerpayne04@outlook.com</a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="section-container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-card">
              <h3>🎓 Education</h3>
              <p>Data Science Major</p>
              <p className="minor">Minors: Sports Business, Computer Science, Mathematics</p>
            </div>
            <div className="about-card">
              <h3>💼 Interests</h3>
              <p>Sports Analytics • Business Intelligence • Automation • Technology Solutions</p>
            </div>
            <div className="about-card">
              <h3>🎯 Goals</h3>
              <p>Bridging the gap between data science and real-world applications in sports and business</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-container">
          <h2 className="section-title">Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <h3>Project Name</h3>
              <p>Description of your project and the technologies used. What problem does it solve?</p>
              <div className="project-tags">
                <span className="tag">React</span>
                <span className="tag">Python</span>
                <span className="tag">Data Analysis</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Project Name</h3>
              <p>Description of your project and the technologies used. What problem does it solve?</p>
              <div className="project-tags">
                <span className="tag">JavaScript</span>
                <span className="tag">API</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
              </div>
            </div>
            <div className="project-card">
              <h3>Project Name</h3>
              <p>Description of your project and the technologies used. What problem does it solve?</p>
              <div className="project-tags">
                <span className="tag">Machine Learning</span>
                <span className="tag">Sports Analytics</span>
              </div>
              <div className="project-links">
                <a href="#" target="_blank" rel="noopener noreferrer">View Project →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in new opportunities and collaborations. Feel free to reach out!
          </p>
          <div className="contact-methods">
            <a href="mailto:tpay@uoregon.edu" className="contact-card">
              <span className="contact-icon">📧</span>
              <span className="contact-text">tpay@uoregon.edu</span>
            </a>
            <a href="mailto:tylerpayne04@outlook.com" className="contact-card">
              <span className="contact-icon">📧</span>
              <span className="contact-text">tylerpayne04@outlook.com</span>
            </a>
            <a href="https://www.linkedin.com/in/tylerpayne04/" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">💼</span>
              <span className="contact-text">LinkedIn Profile</span>
            </a>
            <a href="https://github.com/tylerpayne04" target="_blank" rel="noopener noreferrer" className="contact-card">
              <span className="contact-icon">💻</span>
              <span className="contact-text">GitHub Profile</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Tyler Payne. Built with React.</p>
      </footer>
    </div>
  )
}

export default App
