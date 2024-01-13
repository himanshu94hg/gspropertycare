import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "animate.css";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "./otherPage.css";
import "./mobile-main.css";
import { useState } from "react";
import Header from "./Header/header";
// import Services from "./Services/Services";
import Products from "./Services/products";
import ProductDetail from "./Services/ProductDetail";
import QueryForm from "./Header/QueryForm";
import AboutUs from "./Home/AboutUs/AboutUs";

function App() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [formOpen, setFormOpen] = useState(false);

  const handleForm = () => {
    setFormOpen(!formOpen);
    console.log(formOpen);
  };

  return (
    <>
      <BrowserRouter>
        <Header scrollToSection={scrollToSection} handleForm={handleForm} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                formOpen={formOpen}
                handleForm={handleForm}
                scrollToSection={scrollToSection}
              />
            }
          />
          <Route path="/Services" element={<Products />} />
          <Route path="/:productName" element={<ProductDetail />} />
          <Route
            path="/AboutUs"
            element={
              <div className="about-us-page">
                <AboutUs />
              </div>
            }
          />
        </Routes>
        <Footer scrollToSection={scrollToSection} />
      </BrowserRouter>

      <div
        className={`form-container-main-close ${
          formOpen ? "form-container-main-open" : ""
        }`}
      >
        <QueryForm handleForm={handleForm} />
      </div>
    </>
  );
}

export default App;
