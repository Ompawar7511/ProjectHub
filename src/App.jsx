import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Link,
} from "react-router-dom";

import LandingPage from "./components/LandingPage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ExploreProjects from "./components/ExploreProjects";
import Project from "./components/projects/Project";
import Webprojects from "./components/projects/webprojects";
import Cyberprojects from "./components/projects/Cyberprojects";
import { AuthProvider } from "./context/AuthContext";
import DashboardPage from "./components/DashboardPage";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import { isAuthenticated } from "./services/authService";
import NavBar from "./components/NavBar";
import DashboardNavbar from "./components/DashboardNavbar";
import AccessDenied from "./components/Accessdenied";

// ---------------- LAYOUTS ----------------
const PublicLayout = ({ children }) => (
  <>
    <NavBar />
    <main>{children}</main>
  </>
);

const PrivateLayout = ({ children }) => (
  <>
    <DashboardNavbar />
    <main>{children}</main>
  </>
);

// ---------------- ROUTE GUARDS ----------------

// PublicRoute: redirects logged-in users to dashboard
const PublicRoute = ({ children }) => {
  const token = isAuthenticated();
  if (token) return <Navigate to="/DashboardPage" replace />;
  return <PublicLayout>{children}</PublicLayout>;
};

// PrivateRoute: redirects non-authenticated users to landing page
const PrivateRoute = ({ children }) => {
  const token = isAuthenticated();
  if (!token) return <Navigate to="/" replace />;
  return <PrivateLayout>{children}</PrivateLayout>;
};

// ---------------- APP ----------------

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          {/* Public Pages */}
          <Route
            path="/"
            element={
              <PublicRoute>
                <LandingPage />
              </PublicRoute>
            }
          />
          <Route
            path="/AccessDenied"
            element={
              <PublicRoute>
                <AccessDenied />
              </PublicRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PublicRoute>
                <AboutPage />
              </PublicRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PublicRoute>
                <ContactPage />
              </PublicRoute>
            }
          />
          <Route
            path="/explore"
            element={
              <PublicRoute>
                <ExploreProjects />
              </PublicRoute>
            }
          />
          <Route
            path="/login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="/register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />

          {/* Private Pages */}
          <Route
            path="/DashboardPage"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/projects"
            element={
              <PrivateRoute>
                <Project />
              </PrivateRoute>
            }
          />
          <Route
            path="/webprojects"
            element={
              <PrivateRoute>
                <Webprojects />
              </PrivateRoute>
            }
          />
          <Route
            path="/cyberprojects"
            element={
              <PrivateRoute>
                <Cyberprojects />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
