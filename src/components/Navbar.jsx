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
        <h1 className="navbar-logo">
          <ImLab className="navbar-iconlab" />
          Julio<span className="nav-span">LAB</span>
        </h1>
      </div>

      <div className="navbar-links">
        <Link className="navlink">Inicio</Link>
        <Link className="navlink">Proyectos</Link>
        <Link className="navlink">Tutoriales</Link>
        <Link className="navlink">Sobre Mi</Link>
      </div>

      <div className="navbar-icons">
        <FaGithub className="navbar-icons-github" />
        <button className="navbar-icons-btn">Contacto</button>
      </div>
      <div className="menu-btn" onClick={() => setOpen(!open) }><GiHamburgerMenu /></div>
      <div className={`menu ${ open ? "active": ""}`}>
        <div className="btn-close" onClick={() => setOpen(!open)}><IoCloseSharp /></div>
        <Link>Inicio</Link>
        <Link>Proyectos</Link>
        <Link>Tutoriales</Link>
        <Link>Sobre mi</Link>
      </div>
    </nav>
  );
};

export default Navbar;