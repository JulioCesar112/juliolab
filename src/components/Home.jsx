import logo from "../assets/img/logo.png"
import "../styles/Home.css"

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
        <img className="home-logo" src={logo} alt="logo" />
      </div>

      <div className="home-right">
        <div className="terminal">
          <p>
            <span className="prompt">@Juliolab:~$</span> whoami
          </p>

          <p className="output">Backend Developer & Linux Enthusiast</p>

          <br />

          <p>
            <span className="prompt">@Juliolab:~$</span> cat about.txt
          </p>

          <p className="output">
            Welcome to Juliolab. This is my personal lab where I build and document
            real-world projects using Node.js, React, and Linux.
          </p>

          <p className="output">
            Here I share what I learn, from backend development to server
            configurations with Nginx.
          </p>

          <br />

          <p>
            <span className="prompt">@Juliolab:~$</span> ls projects/
          </p>

          <p className="output">
            api-rest/ &nbsp; frontend-apps/ &nbsp; linux-configs/ &nbsp; nginx/
          </p>
        </div>
      </div>
    </div>
  )
}

export default Home