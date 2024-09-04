import Header from "./components/Header";
import Landing from "./components/Landing";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./assets/styles/main.css";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        }
      });
    });

    setInterval(() => {
      const hiddenElements = document.querySelectorAll(
        ".hidden-left, .hidden-right , .hidden-up "
      );

      hiddenElements.forEach((el) => observer.observe(el));
    }, 300);

    setTimeout(() => {
      document.body.style.transition = "background .35s, color .35s";
      const colorVar = getComputedStyle(document.body).getPropertyValue(
        "--Text-Color"
      );
      document.querySelectorAll("body .theme-change").forEach((e) => {
        const styles = getComputedStyle(e);
        let addedTrans = "";
        if (styles.color != colorVar) {
          addedTrans += ",color .35s";
        }
        if (styles.background != "none") {
          addedTrans += ",background .35s";
        }
        if (styles.boxShadow != "none") {
          addedTrans += ",box-shadow .35s";
        }
        e.style.transition = styles.transition + addedTrans;
      });
    }, 200);
  }, []);
  return (
    <>
      <Header />
      <Landing />
      <AboutMe />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
