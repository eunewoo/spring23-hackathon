// import Navbar from "./components/Navbar/Navbar";
import Navbar from "../Navbar/Navbar";
import Intro from "../Intro/Intro";
import Services from "../Services/Services";
import Experience from "../Experience/Experience";
import Works from "../Works/Works";
import Portfolio from "../Portfolio/Portfolio";
import Testimonial from "../Testimonials/Testimonial";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import { useContext } from "react";
import { themeContext } from "../../Context";

const HomePage = () => {
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
      <Contact />
      <Footer />
    </div>
  )
};

export default HomePage;