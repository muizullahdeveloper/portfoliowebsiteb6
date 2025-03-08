import AboutDev from "./components/aboutdev/AboutDev"
import AboutMe from "./components/aboutme/AboutMe"
import Education from "./components/education/Education"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import './index.css'

const App = () => {
  console.log(
    "hello"
  )
  return (
    <div>
      <Header />
      <div className="website-layout">
        <AboutMe />
        <AboutDev />
        <Projects />
        <Education />
      </div>
    </div>
  )
}

export default App