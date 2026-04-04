import { Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Navbar from "../components/Navbar"
import Projects from "../components/Projects"
import Docs from "../components/Docs"
import About from "../components/About"
import Contact from "../components/Contact"


const AppRoutes = () => {
  return (
    <div className="app-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects/>}/>
        <Route path="/docs"  element={<Docs/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
    </div>
  )
}

export default AppRoutes