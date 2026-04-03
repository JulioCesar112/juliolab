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
          Hola,soy <span className="hero-name">Julio Cesar</span>
        </h1>

        <h4 className="hero-subtitle">
          Desarrollador y SysAdmin
        </h4>

        <p className="hero-description">
          Este es mi laboratorio digital donde construyo, experimento y comparto lo que aprendo
          sobre backend, Linux y desarrollo. Todo lo que ves aquí forma parte de mi proceso.
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
            <p>Julio Cesar - Dev & SysAdmin</p>
            <p className="comand">&gt; cat lab_status.txt </p>
            <p>Creando contenido sobre:</p>
            <ul>
              <li> - Backend</li>
              <li> - Linux</li>
              <li> - APIs</li>
              <li> - Automatización</li>
            </ul>

            <p className="comand">&gt; ls contenido</p>
            <ul>
              <li>tutoriales/</li>
              <li>Proyectos/</li>
              <li>Notas/</li>
            </ul>
            <p className="comand">&gt; echo <span className="com-miss">$MISSION</span> </p>
            <p>Construir y compartir conocimiento</p>
            <p className="comand ">&gt; <span className="blink"> _</span></p>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Home