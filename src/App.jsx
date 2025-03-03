import AboutMe from "./components/aboutme/AboutMe"
import Header from "./components/header/Header"
import './index.css'

const App = () => {
  return (
    <div className="website-layout">
      <Header />
      <AboutMe />
    </div>
  )
}

export default App