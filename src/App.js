import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "animate.css";
import "./mobile-main.css";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <HashRouter>
        <Routes>
          <Route
            path="/"
            element={<Home scrollToSection={scrollToSection} />}
          />
        </Routes>
      </HashRouter>
      <Footer scrollToSection={scrollToSection} />
    </>
  );
}

export default App;
