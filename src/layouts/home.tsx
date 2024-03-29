import HomeSplash from "../components/homeSplash/homeSplash";
import Navbar from "../components/navbar/navbar";
import Footer from "../components/footer/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Fusiom Home";
  }, []);

  return (
    <>
      <Navbar />
      <HomeSplash />
      <Footer />
    </>
  );
}
