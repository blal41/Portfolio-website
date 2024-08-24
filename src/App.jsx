
import './App.css'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import My_Skills from './components/My_Skills'
import EducationAndInternship from './components/EducationAndInternship';

function App() {

  return (
    <div>
        <Navbar />
        <Hero />
        <About />
        <EducationAndInternship />
        <My_Skills />
        <Projects />
        <Contact />
        <Footer />
    </div>
  )
}

export default App
