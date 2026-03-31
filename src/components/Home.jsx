import "../styles/Home.css"
import { FaReact } from "react-icons/fa";
import { BsJavascript } from "react-icons/bs";
import { RiNodejsLine } from "react-icons/ri";
import { FcLinux } from "react-icons/fc";
import { BiLogoPostgresql } from "react-icons/bi";
import { FaDatabase } from "react-icons/fa";
const Home = () => {
  return (
    <div className="home">

      <div className="hero">

        <h1 className="hero-title">
          Hola, soy <span className="hero-name">Julio Cesar</span>
        </h1>

        <h4 className="hero-subtitle">
          Desarrollador y SysAdmin
        </h4>

        <p className="hero-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, consequatur illum, blanditiis reprehenderit nesciunt eaque similique fugiat dolorem maiores itaque maxime ducimus cum sunt. Id quaerat quis esse consequuntur at?
        </p>

        <ul className="hero-tech">
          <li className="tech-item react"><FaReact /> React</li>
          <li className="tech-item javascript"><BsJavascript /> JavaScript</li>
          <li className="tech-item node"><RiNodejsLine /> Node.js</li>
          <li className="tech-item linux"><FcLinux /> Linux</li>
          <li className="tech-item database"><FaDatabase /> Database</li>
        </ul>

      </div>

      <div className="hero-logo" >

        <div className="terminal">

          <div className="title-bar">
            <div className="window-controls">
              <div className="btn-close close"></div>
              <div className="btn-min min"></div>
              <div className="btn-max max"></div>
            </div>
            <div className="terminal-title">Julio@lab:~$</div>
          </div>

          <div className="terminal-body">
            <p className="comand">&gt; whoami</p>
            <p>informacion de whoami</p>
            <p className="comand">&gt; cat habilidades.txt </p>
            <ul>
              <li> - habilidad</li>
              <li> - habilidad</li>
              <li> - habilidad</li>
              <li> - habilidad</li>
            </ul>
            <p className="comand">&gt; _</p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home