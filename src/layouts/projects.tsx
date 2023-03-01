import HomeSplash from "../components/homeSplash/homeSplash";
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
      <HomeSplash />
      <Footer />
    </>
  );
}
