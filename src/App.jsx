import AboutMe from "./components/aboutme/AboutMe"
import Header from "./components/header/Header"
import Projects from "./components/projects/Projects"
import './index.css'

const App = () => {
  return (
    <div>
      <Header />
      <div className="website-layout">
        <AboutMe />
        <Projects />
      </div>
    </div>
  )
}

export default App