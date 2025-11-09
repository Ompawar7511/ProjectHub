import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useState, useEffect } from "react";

export default function DashboardNavbar() {
  const { logout, user } = useAuth();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirect to home after logout
  };

  // Inline styles
  const navbarStyle = {
    backgroundColor: "#0b1b33",
    color: "white",
    padding: "10px 20px",
    fontFamily: "Poppins, sans-serif",
  };

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  };

  const brandStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
    color: "white",
    textDecoration: "none",
  };

  const navLinksStyle = {
    display: windowWidth > 768 ? "flex" : menuOpen ? "flex" : "none",
    flexDirection: windowWidth > 768 ? "row" : "column",
    gap: "20px",
    width: windowWidth > 768 ? "auto" : "100%",
    marginTop: windowWidth > 768 ? "0" : "10px",
  };

  const rightStyle = {
    display: windowWidth > 768 ? "flex" : menuOpen ? "flex" : "none",
    flexDirection: windowWidth > 768 ? "row" : "column",
    alignItems: "center",
    gap: "15px",
    marginTop: windowWidth > 768 ? "0" : "10px",
  };

  const logoutBtnStyle = {
    backgroundColor: "#ff4d4d",
    border: "none",
    padding: "8px 14px",
    color: "white",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.2s",
  };

  return (
    <header style={navbarStyle}>
      <div style={containerStyle}>
        {/* Brand */}
        <Link to="/DashboardPage" style={brandStyle}>
          Dashboard
        </Link>

        {/* Hamburger Menu Button */}
        {windowWidth <= 768 && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "transparent",
              border: "none",
              fontSize: "24px",
              color: "white",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        )}

        {/* Navigation Links */}
        <nav style={navLinksStyle}>
          <Link to="/projects" style={{ textDecoration: "none", color: "white" }}>
            AI Projects
          </Link>
          <Link to="/webprojects" style={{ textDecoration: "none", color: "white" }}>
            Web Projects
          </Link>
          <Link to="/cyberprojects" style={{ textDecoration: "none", color: "white" }}>
            Cybersecurity Projects
          </Link>
        </nav>

        {/* Right Section */}
        <div style={rightStyle}>
          {user && (
            <span style={{ fontWeight: 500 }}>
              Hello, {user.username || user.email}
            </span>
          )}
          <button
            onClick={handleLogout}
            style={logoutBtnStyle}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#d93c3c")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#ff4d4d")}
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
