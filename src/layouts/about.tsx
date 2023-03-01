import HomeSplash from "../components/homeSplash/homeSplash";
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
      <HomeSplash />
      <Footer />
    </>
  );
}
