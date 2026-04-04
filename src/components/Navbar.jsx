import { Link } from "react-router-dom";
import "../styles/Navbar.css"
import { ImLab } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { MdDarkMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const Navbar = () => {

  const [open, setOpen] = useState(false)




  return (
    <nav className="navbar">

      <div className="navbar-logo-container">
        <Link to="/">
          <h1 className="navbar-logo">
            <ImLab className="navbar-iconlab" />
            Julio<span className="nav-span">LAB</span>
          </h1>
        </Link>
      </div>

      <div className="navbar-links">
        <Link className="navlink" to="/">Inicio</Link>
        <Link className="navlink" to="/projects">Proyectos</Link>
        <Link className="navlink" to="/docs">Docs</Link>
        <Link className="navlink" to="/about">Sobre Mi</Link>
      </div>

      <div className="navbar-icons">
        <a href="https://github.com/JulioCesar112"
          target="_blank"
          rel="noopener noreferrer"><FaGithub className="navbar-icons-github" /></a>
        <Link to="/contact"><button className="navbar-icons-btn">Contacto</button></Link>
      </div>

      <div className="menu-btn" onClick={() => setOpen(!open)}><GiHamburgerMenu /></div>

      <div className={`menu ${open ? "active" : ""}`}>
        <div className="btn-close" onClick={() => setOpen(!open)}><IoCloseSharp /></div>
        <Link to="/" onClick={() => setOpen(!open)}>Inicio</Link>
        <Link to="/projects" onClick={() => setOpen(!open)}>Proyectos</Link>
        <Link to="/docs" onClick={() => setOpen(!open)}>Docs</Link>
        <Link to="/about" onClick={() => setOpen(!open)}>Sobre mi</Link>
      </div>
    </nav>
  );
};

export default Navbar;