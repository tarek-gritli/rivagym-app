import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { pages } from "./types";
function App() {
  const [selectedPage, setSelectedPage] = useState<pages>(pages.HOME);
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(pages.HOME);
      } else {
        setIsTopOfPage(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-full w-full app bg-blue-50 overflow-hidden">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <Classes setSelectedPage={setSelectedPage} />
      <Contact setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
