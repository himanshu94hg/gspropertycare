import "./App.css";
import Header from "./Header/header";
import Logo from "./assets/img/logo.svg";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import "animate.css";
import "./mobile-main.css";

function App() {
  return (
    <>
      <Header logo={Logo} />
      <Home />
      <div className="clearfix"></div>
      <Footer />
    </>
  );
}

export default App;
