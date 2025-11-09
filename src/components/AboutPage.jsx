import { Link } from "react-router-dom";
import "../styles/ProjectHub.css";
import Navbar from "./NavBar";

export default function AboutPage() {
  const projects = [
    {
      title: "AI Chatbot",
      description:
        "A conversational AI chatbot built using NLP techniques to assist users with queries.",
      icon: "🤖",
    },
    {
      title: "Web Development Platform",
      description:
        "A responsive web application platform to showcase portfolio projects for developers.",
      icon: "💻",
    },
    {
      title: "Cybersecurity Dashboard",
      description:
        "An interactive dashboard to monitor cybersecurity threats and analytics.",
      icon: "🔒",
    },
  ];

  return (
    <div className="projecthub-container">
    
      {/* Mission & Vision */}
      <section className="mission-vision">
        <div className="card">
          <h3>Our Mission</h3>
          <p>
            To provide a hub for students and professionals to share, explore,
            and collaborate on cutting-edge CS and IT projects.
          </p>
        </div>
        <div className="card">
          <h3>Our Vision</h3>
          <p>
            To be the leading platform connecting innovators in computer science
            and IT, encouraging collaboration and learning worldwide.
          </p>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section">
        <h2>Featured Projects</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="project-icon">{project.icon}</div>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 ProjectHub. All rights reserved.</p>
      </footer>
    </div>
  );
}
