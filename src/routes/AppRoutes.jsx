import { Routes, Route } from "react-router-dom"
import Home from "../components/Home"
import Navbar from "../components/Navbar"

const AppRoutes = () => {
  return (
    <div className="app-body">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default AppRoutes