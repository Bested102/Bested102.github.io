import Header from "./components/Header"
import Landing from "./components/Landing"
import AboutMe from "./components/AboutMe"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import "./assets/styles/main.css"

export default function App(){
  return(
     <>
      <Header/>
      <Landing/>
      <AboutMe/>
      <Projects/>
      <Contact/>
      <Footer/>
     </>
  )
}

