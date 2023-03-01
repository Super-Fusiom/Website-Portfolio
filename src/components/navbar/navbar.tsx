import { Link } from "react-router-dom";
import "./navbar.css";

export default function navbar() {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/about">About Me</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}
