import { Link } from "react-router-dom";
import Navbar from "./NavBar";

export default function ContactPage() {
  return (
    <div
      style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      <main style={{ flex: 1, padding: "60px 20px", background: "#f8f9fa" }}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            background: "#fff",
            padding: "50px",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h1
            style={{
              fontSize: "42px",
              marginBottom: "10px",
              color: "#333",
              textAlign: "center",
            }}
          >
            Contact CS & IT Projects Hub
          </h1>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              textAlign: "center",
              marginBottom: "40px",
            }}
          >
            Have questions about our CS & IT projects or want to collaborate?
            Reach out to us!
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "30px",
              marginBottom: "50px",
            }}
          >
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "15px" }}>📧</div>
              <h3>Email</h3>
              <p>dreamdev87@gmail.com.com</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "15px" }}>📞</div>
              <h3>Phone</h3>
              <p>+91 9922837511</p>
            </div>
            <div
              style={{
                textAlign: "center",
                padding: "30px",
                background: "#f8f9fa",
                borderRadius: "8px",
              }}
            >
              <div style={{ fontSize: "36px", marginBottom: "15px" }}>📍</div>
              <h3>Address</h3>
              <p style={{ margin: 0 }}>
                Wakad,Jagtap Dairy
                <br />
                Pune,Maharashtra
              </p>
            </div>
          </div>

          <section style={{ marginTop: "40px" }}>
            <h2
              style={{
                fontSize: "28px",
                marginBottom: "20px",
                color: "#10b981",
              }}
            >
              Send us a Message
            </h2>
            <form
              style={{ display: "flex", flexDirection: "column", gap: "20px" }}
            >
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}
                >
                  Name
                </label>
                <input
                  type="text"
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "16px",
                  }}
                  placeholder="Your name"
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "16px",
                  }}
                  placeholder="your@email.com"
                />
              </div>
              <div
                style={{ display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <label
                  style={{ fontSize: "16px", fontWeight: "500", color: "#333" }}
                >
                  Message
                </label>
                <textarea
                  rows="6"
                  style={{
                    padding: "12px",
                    border: "1px solid #ddd",
                    borderRadius: "6px",
                    fontSize: "16px",
                    resize: "vertical",
                    fontFamily: "inherit",
                  }}
                  placeholder="Your message"
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  background: "#10b981",
                  color: "#fff",
                  padding: "15px 40px",
                  borderRadius: "8px",
                  fontSize: "18px",
                  fontWeight: "600",
                  cursor: "pointer",
                  border: "none",
                  alignSelf: "flex-start",
                }}
              >
                Send Message
              </button>
            </form>
          </section>
        </div>
      </main>

      <footer
        style={{
          background: "#333",
          color: "#fff",
          textAlign: "center",
          padding: "30px 20px",
        }}
      >
        <p>&copy; 2025 CS & IT Projects Hub. All rights reserved.</p>
      </footer>
    </div>
  );
}
