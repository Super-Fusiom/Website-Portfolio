import HomeSplash from "../components/homeSplash/homeSplash";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Fusiom Home";
  }, []);

  return <HomeSplash />;
}
