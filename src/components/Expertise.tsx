import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faPython } from "@fortawesome/free-brands-svg-icons";
import Chip from "@mui/material/Chip";
import "../assets/styles/Expertise.scss";

const backendStack = [
  "Python",
  "Django",
  "DRF",
  "PostgreSQL",
  "Celery",
  "Redis",
  "Gunicorn",
  "Channels",
];

const frontendStack = [
  "ReactJS",
  "React Router",
  "Redux/toolkit",
  "Axios",
  "Material UI",
  "TailwindCSS",
  "Apexcharts",
];

const mobileStack = [
  "React Native",
  "Expo",
  "React Navigation",
  "React Native Paper",
  "Nativewind",
  "Axios",
];

function Expertise() {
  return (
    <div className="container" id="expertise">
      <div className="skills-container">
        <h1>Expertise</h1>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faPython} size="3x" />
            <h3>Backend Development</h3>
            <p>
              I have developed robust backend systems from the ground up using
              Django. I have strong proficiency in backend architecture,
              including database design, and RESTful API development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {backendStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Frontend Development</h3>
            <p>
              I have built a diverse array of web applications from scratch
              using modern technologies as React. I have a strong proficiency in
              the SDLC process and frontend development.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {frontendStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faReact} size="3x" />
            <h3>Mobile Development</h3>
            <p>
              I have created cross-platform mobile applications using React
              Native, delivering smooth and responsive user experiences from UI
              design to state management and API integration across iOS and
              Android.
            </p>
            <div className="flex-chips">
              <span className="chip-title">Tech stack:</span>
              {mobileStack.map((label, index) => (
                <Chip key={index} className="chip" label={label} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Expertise;
