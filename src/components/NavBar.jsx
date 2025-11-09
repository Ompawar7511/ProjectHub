import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import AuthModal from "./auth/AuthModal";

export default function NavBar() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [authMode, setAuthMode] = useState("login");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const openAuthModal = (mode) => {
    setAuthMode(mode);
    setShowAuthModal(true);
  };

  // Inline styles
  const navbarStyle = {
    background: "#fff",
    padding: "10px 0",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "0 15px",
  };

  const brandStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#10b981",
    textDecoration: "none",
  };

  const navLinksStyle = {
    display: windowWidth > 768 ? "flex" : menuOpen ? "flex" : "none",
    flexDirection: windowWidth > 768 ? "row" : "column",
    gap: "20px",
    width: windowWidth > 768 ? "auto" : "100%",
    marginTop: windowWidth > 768 ? "0" : "10px",
  };

  const buttonStyle = (bg = "transparent", color = "#333") => ({
    background: bg,
    color: color,
    fontSize: windowWidth > 480 ? "16px" : "14px",
    fontWeight: "500",
    padding: windowWidth > 480 ? "8px 20px" : "6px 15px",
    borderRadius: "6px",
    border: "none",
    cursor: "pointer",
  });

  return (
    <header className="navbar" style={navbarStyle}>
      <div className="container navbar-inner" style={containerStyle}>
        <Link to="/" className="brand" style={brandStyle}>
          CS & IT ProjectHub
        </Link>

        {/* Hamburger for mobile */}
        {windowWidth <= 768 && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        <nav className="nav-links" style={navLinksStyle}>
          <Link to="/" style={{ textDecoration: "none", color: "#333" }}>
            Home
          </Link>
          <Link to="/explore" style={{ textDecoration: "none", color: "#333" }}>
            Explore Projects
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "#333" }}>
            About
          </Link>
          <Link to="/contact" style={{ textDecoration: "none", color: "#333" }}>
            Contact Us
          </Link>

          <div
            style={{
              display: "flex",
              gap: "10px",
              flexWrap: "wrap",
              marginTop: windowWidth > 768 ? "0" : "10px",
            }}
          >
            <button onClick={() => openAuthModal("login")} style={buttonStyle()}>
              Sign In
            </button>
            <button
              onClick={() => openAuthModal("register")}
              style={buttonStyle("#059669", "#fff")}
            >
              Sign Up
            </button>
          </div>
        </nav>

        {showAuthModal && (
          <AuthModal
            mode={authMode}
            onClose={() => setShowAuthModal(false)}
            onSwitchMode={setAuthMode}
          />
        )}
      </div>
    </header>
  );
}
