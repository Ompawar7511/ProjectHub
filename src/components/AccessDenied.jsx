import React from "react";
import accessDeniedImage from "../assets/images/access.jpg"; // put your image in src folder

export default function AccessDenied() {


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        backgroundColor: "#f9fafc",
        textAlign: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <img
        src={accessDeniedImage}
        alt="Access Denied"
        style={{ maxWidth: "300px", marginBottom: "30px" }}
      />
      <h2 style={{ color: "#e74c3c", marginBottom: "20px" }}>Access Denied</h2>
      <p style={{ color: "#555", marginBottom: "30px" }}>
        You need to register first to access this page.
      </p>

      <h3>भाई, Sign up कर दे और देखले प्रोजेक्ट 😎 !!</h3>
    </div>
  );
}
