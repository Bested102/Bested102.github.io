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
    }, 100);
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
