import { Link } from "react-router-dom";
import NavBar from "./NavBar";
import React, { useState } from "react";
import * as emailjs from "@emailjs/browser";

export default function DashboardPage() {
  const projects = [
    {
      id: "project1",
      title: "AI Project",
      description: "Build intelligent systems with AI and ML techniques.",
      gradient: "linear-gradient(135deg, #ff6b6b, #ff8787)",
      link: "/projects",
    },
    {
      id: "project2",
      title: "Web Project",
      description: "Create modern web applications with React and Node.js.",
      gradient: "linear-gradient(135deg, #4ECDC4, #45B7AF)",
      link: "/webprojects",
    },
    {
      id: "project3",
      title: "Cybersecurity Project",
      description: "Learn to secure applications and protect data.",
      gradient: "linear-gradient(135deg, #FFD93D, #FFC300)",
      link: "/cyberprojects",
    },
  ];

  // ✅ State Hooks
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    wantProject: false,
    projectDescription: "",
  });

  const [showToast, setShowToast] = useState(false);

  // ✅ Input change handler
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFeedback((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // ✅ Form submit handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // Send email via EmailJS
    emailjs
      .send(
        "service_psmwl5t", // replace with your EmailJS service ID
        "template_x2y24rq", // replace with your EmailJS template ID
        {
          name: feedback.name,
          email: feedback.email,
          projectdescription: feedback.projectDescription,
          to_email: "dreamdev87@example.com", // your email
        },
        "Z95Q9nfEMLLam_rzk" // replace with your EmailJS public key
      )
      .then(
        () => {
          setShowToast(true);
          setFeedback({
            name: "",
            email: "",
            wantProject: false,
            projectDescription: "",
          });
          setTimeout(() => setShowToast(false), 3000);
        },
        (error) => {
          console.error("⚠️ Error sending email:", error);
        }
      );
  };

  // ✅ Styles
  const styles = {
    page: {
      fontFamily: "'Poppins', sans-serif",
      backgroundColor: "#f9fafc",
      minHeight: "100vh",
      margin: 0,
      padding: 0,
    },
    welcomeSection: {
      textAlign: "center",
      padding: "4rem 2rem",
      background: "linear-gradient(120deg, #e0f7fa, #f1f8e9)",
      borderBottom: "2px solid #e0e0e0",
      boxShadow: "0 2px 8px rgba(0,0,0,0.05)",
    },
    welcomeTitle: {
      fontSize: "2.4rem",
      color: "#333",
      fontWeight: "700",
      marginBottom: "1rem",
    },
    welcomeText: {
      color: "#555",
      fontSize: "1.2rem",
      maxWidth: "600px",
      margin: "0 auto",
    },
    projectsSection: {
      padding: "3rem 2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      gap: "2rem",
      flexWrap: "wrap",
    },
    card: {
      padding: "2rem 1.5rem",
      borderRadius: "16px",
      width: "280px",
      color: "#fff",
      textAlign: "center",
      boxShadow: "0 8px 16px rgba(0,0,0,0.15)",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      cursor: "pointer",
    },
    cardTitle: {
      fontSize: "1.4rem",
      fontWeight: "600",
      marginBottom: "0.5rem",
    },
    cardDescription: {
      fontSize: "1rem",
      opacity: 0.9,
      marginBottom: "1rem",
    },
    button: {
      display: "inline-block",
      marginTop: "1rem",
      padding: "0.6rem 1.2rem",
      borderRadius: "8px",
      backgroundColor: "#fff",
      color: "#333",
      textDecoration: "none",
      fontWeight: "600",
      fontSize: "0.95rem",
      boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
      transition: "all 0.3s ease",
    },
    feedbackSection: {
      background: "#f0f4f8",
      padding: "3rem 2rem",
      textAlign: "center",
      position: "relative",
    },
    feedbackForm: {
      maxWidth: "500px",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },
    input: {
      padding: "10px 15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      outline: "none",
    },
    textarea: {
      padding: "10px 15px",
      borderRadius: "6px",
      border: "1px solid #ccc",
      fontSize: "1rem",
      outline: "none",
      minHeight: "100px",
      resize: "vertical",
    },
    toast: {
      position: "fixed",
      bottom: "20px",
      right: "20px",
      backgroundColor: "#10b981",
      color: "#fff",
      padding: "12px 20px",
      borderRadius: "8px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
      zIndex: 1000,
    },
  };

  // ✅ JSX
  return (
    <div style={styles.page}>
      {/* Welcome Section */}
      <section style={styles.welcomeSection}>
        <h2 style={styles.welcomeTitle}>Welcome to ProjectHub 🤗 !!</h2>
        <p style={styles.welcomeText}>
          Discover exciting projects, learn new technologies, and start building
          your portfolio today.
        </p>
      </section>

      {/* Projects Section */}
      <section style={styles.projectsSection}>
        {projects.map((project) => (
          <div
            key={project.id}
            style={{ ...styles.card, background: project.gradient }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 16px rgba(0,0,0,0.15)";
            }}
          >
            <h3 style={styles.cardTitle}>{project.title}</h3>
            <p style={styles.cardDescription}>{project.description}</p>
            <Link
              to={project.link}
              style={styles.button}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = "#333";
                e.target.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = "#fff";
                e.target.style.color = "#333";
              }}
            >
              View Project
            </Link>
          </div>
        ))}
      </section>

      {/* Feedback Section */}
      <section style={styles.feedbackSection}>
        <h2>Request a Project !</h2>
        <form style={styles.feedbackForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={feedback.name}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={feedback.email}
            onChange={handleChange}
            style={styles.input}
            required
          />
          <label style={{ textAlign: "left" }}>
            <input
              type="checkbox"
              name="wantProject"
              checked={feedback.wantProject || false}
              onChange={handleChange}
              style={{ marginRight: "8px" }}
            />
            I want a project
          </label>
          <textarea
            name="projectDescription"
            placeholder="Short description about the project (title, language, etc.)"
            value={feedback.projectDescription || ""}
            onChange={handleChange}
            style={styles.textarea}
            disabled={!feedback.wantProject}
            required={feedback.wantProject}
          />
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#333";
              e.target.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#fff";
              e.target.style.color = "#333";
            }}
          >
            Submit
          </button>
        </form>
      </section>

      {/* Toast */}
      {showToast && (
        <div style={styles.toast}>Feedback Submitted Successfully!</div>
      )}

      {/* Footer */}
      <footer
        style={{
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "20px 20px",
        }}
      >
        <p>&copy; 2025 CS & IT Projects Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
