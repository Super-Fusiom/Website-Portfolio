import Home from "./layouts/home";
import Projects from "./layouts/projects";
import About from "./layouts/about";
import Contact from "./layouts/contact";

import "./App.css";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
