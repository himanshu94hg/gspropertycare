import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Header from "./Header/header";
import Logo from "./assets/img/logo.svg";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "animate.css";
import QueryForm from "./Header/QueryForm";
import "./mobile-main.css";
import Form from "./Form/Form";

function App() {
  return (
    <>
      <Header logo={Logo} />
      <HashRouter>
        <Routes>
          <Route path="/form" element={<Form />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      <div className="clearfix"></div>
      <Footer />
    </>
  );
}

export default App;
