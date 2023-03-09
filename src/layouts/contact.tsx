import Contact from "../components/contactMain/contactMain";
import { useEffect } from "react";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

export default function Home() {
  useEffect(() => {
    document.title = "Contact Fusiom";
  }, []);

  return (
    <>
      <Navbar />
      <Contact />
      <Footer />
    </>
  );
}
