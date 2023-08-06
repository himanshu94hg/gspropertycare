import "./App.css";
import Header from "./Header/header";
import Logo from "./assets/img/GS-logo.jpg";
import Home from "./Home/Home";
import Footer from "./Footer/Footer";
import News from "./News/News";
import "animate.css";
import "./mobile-main.css";

function App() {
  return (
    <>
      <Header logo={Logo} />
      <Home />
      <News />
      <div className="clearfix"></div>
      <Footer />
    </>
  );
}

export default App;
