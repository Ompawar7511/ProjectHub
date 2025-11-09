// components/Navbar.js
import { Link } from "react-router-dom";

export const PublicNav =() => {
  <nav>
    <Link to="/">Home</Link> | 
    <Link to="/about">About</Link> | 
    <Link to="/contact">Contact</Link> | 
    <Link to="/explore">Explore Projects</Link> 
  </nav>
};


// components/DashboardNavbar.js


 export const PrivateNav = () => (
  <nav>
    <Link to="/DashboardPage">Dashboard</Link> | 
    <Link to="/projects">Projects</Link> | 
    <Link to="/webprojects">Web Projects</Link> | 
    <Link to="/cyberprojects">Cyber Projects</Link> | 
    <Link to="/" >Logout</Link>
  </nav>
);

