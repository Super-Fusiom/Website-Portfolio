import About from "../components/aboutMain/aboutMain";
import { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  useEffect(() => {
    document.title = "About Fusiom";
  }, []);

  return (
    <>
      <Navbar />
      <About />
      <Footer />
    </>
  );
}
