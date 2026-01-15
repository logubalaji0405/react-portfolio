import Hey from "./Navbar";
import "./index.css";
import img from "./assets/profile.avif";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="body">

      <Hey />


      <section id="a1" className="container pt-5">
        <div className="row mt-5 mb-5 align-items-center">
          <div className="col-md-6 text-center">
            <h3>Hey, I'm Balaji 👋</h3>
            <p className="underline">I'm a Front-End Developer</p>
          </div>

          <div className="col-md-6 text-center">
            <img className="proimg" src={img} alt="Profile" />
          </div>
        </div>
      </section>


      <section id="a2" className="container">
        <h1>ABOUT</h1>
        <p>
          I am a Python Full Stack Developer skilled in backend development using
          Python and frontend technologies including HTML, CSS, JavaScript,
          Bootstrap, and React.
        </p>
      </section>


      <section id="a3" className="container">
        <h1>Skills</h1>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React & Bootstrap</li>
          <li>Responsive Web Design</li>
          <li>Git & GitHub</li>
          <li>MS Office</li>
          <li>Team Collaboration</li>
        </ul>
      </section>


      <section id="a4" className="container">
        <h1>Projects</h1>
        <h3>Front-End Project</h3>
        <p>
          Built a frontend e-commerce website using HTML, CSS, JavaScript, and
          Bootstrap with a responsive and user-friendly interface.
        </p>
        <p>
          Project link:{" "}
          <a href="https://logubalaji0405.github.io/mini-project/" target="_blank" rel="noopener noreferrer">
            Front-End Project
          </a>
        </p>

        <h3>React-project</h3>
        <p>Built a responsive React portfolio website using HTML, CSS, and Bootstrap to showcase personal projects and technical skills.</p>
                <p>
          Project link:{" "}
          <a href="" target="_blank" rel="noopener noreferrer">
            React-Project
          </a>
        </p>
      </section>

      <footer>
        <p>© 2025 Balaji</p>
      </footer>

    </div>
  );
}

export default App;
