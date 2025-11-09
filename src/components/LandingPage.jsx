import { Link } from "react-router-dom";
import "../styles/LandingPage.css";
import NavBar from "./NavBar";

// Store each project separately
const aiProject = {
  id: "aiproject",
  title: "Deep-Learning Image Classifier",
  description:
    "A neural-network powered image classification model built with TensorFlow and React.",
  tags: ["AI", "TensorFlow", "React"],
};

const webProject = {
  id: "webproject",
  title: "Web Development Platform",
  description:
    "Web app enabling multiple users to edit code simultaneously using WebSockets and Node.js.",
  tags: ["Web", "Node.js", "Realtime"],
};

const cybersecurityProject = {
  id: "cybersecurityproject",
  title: "Cybersecurity Threat Dashboard",
  description:
    "Interactive dashboard visualising live cyber-threat data with D3.js and Python backend.",
  tags: ["Security", "DataViz", "Python"],
};

export default function LandingPage() {
  return (
    <div className="landing-page">
      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="container hero-inner">
          <h1>Discover, Share & Build CS/IT Projects</h1>
          <p>
            From beginner tutorials to advanced open-source systems — find your
            next project or share your own work.
          </p>
          <Link to="/explore" className="btn btn-primary">
            Explore Projects
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features">
        <div className="container">
          <h2>Why Use ProjectHub?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="icon">🚀</div>
              <h3>AI Chatbot</h3>
              <p>
                A conversational AI chatbot built using NLP techniques to assist
                users with queries..
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">💡</div>
              <h3>Inspiration & Ideas</h3>
              <p>
                Browse thousands of projects by students, professionals and
                hobbyists alike.
              </p>
            </div>
            <div className="feature-card">
              <div className="icon">🤝</div>
              <h3>Collaborative & Open</h3>
              <p>
                Learn from code, contribute your own, and build a portfolio that
                stands out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="featured-projects" className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="projects-grid">
            {/* AI Project */}
            <div id={aiProject.id} className="project-card">
              <h4>{aiProject.title}</h4>
              <p>{aiProject.description}</p>
              <div className="tags">
                {aiProject.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={"/AccessDenied"} className="btn btn-sm">
                View Project
              </Link>
            </div>

            {/* ML Project */}
            <div id={webProject.id} className="project-card">
              <h4>{webProject.title}</h4>
              <p>{webProject.description}</p>
              <div className="tags">
                {webProject.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={"/AccessDenied"} className="btn btn-sm">
                View Project
              </Link>
            </div>

            {/* Cybersecurity Project */}
            <div id={cybersecurityProject.id} className="project-card">
              <h4>{cybersecurityProject.title}</h4>
              <p>{cybersecurityProject.description}</p>
              <div className="tags">
                {cybersecurityProject.tags.map((tag, i) => (
                  <span key={i} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <Link to={"/AccessDenied"} className="btn btn-sm">
                View Project
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>
            &copy; {new Date().getFullYear()} CS & IT ProjectHub. All rights
            reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
