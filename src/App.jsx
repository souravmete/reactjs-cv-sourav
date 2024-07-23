import { Contact } from "./components/Contact"
import { Experience } from "./components/Experience"
import { Footer } from "./components/Footer"
import { Home } from "./components/Home"
import { NavBar } from "./components/NavBar"
import { Projects } from "./components/Projects"
import { Skills } from "./components/Skills"
import { SocialLinks } from "./components/SocialLinks"




function App() {

  return (
    <>
    <NavBar/>
    <Home/>
    <SocialLinks/>
    <Skills/>
    <Projects/>

    <Experience/>
    <Contact/>

    <Footer/>
    
    </>
  )
}

export default App
