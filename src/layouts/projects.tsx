import Projects from "../components/projectsMain/projectsMain";
import { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  useEffect(() => {
    document.title = "Fusiom Projects";
  }, []);

  return (
    <>
      <Navbar />
      <Projects />
      <Footer />
    </>
  );
}
