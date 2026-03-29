import { Link } from "react-router-dom";
import "../styles/Navbar.css"
const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-logo">@Juliolab:~$</h1>
      <div className="navbar-links">
        <Link>cd home/</Link>
        <Link>cd Projects/</Link>
        <Link>cd about/</Link>
      </div>
    </nav>
  );
};

export default Navbar;