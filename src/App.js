import Navbar from "./components/navbar/Navbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Services from "./components/services/Services.jsx";
import Experience from "./components/Experience/Experience.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import "./App.css";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
import { themeContext } from "./Context.js";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "",
        color: darkMode ? "white" : "",
      }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
