import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "animate.css";
import "./mobile-main.css";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
