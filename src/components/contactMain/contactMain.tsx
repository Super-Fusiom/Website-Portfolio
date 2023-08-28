import "./contactMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const linkdenLogo = <FontAwesomeIcon icon={faLinkedin} />;
const githubLogo = <FontAwesomeIcon icon={faGithub} />;

const contactMain = () => {
  return (
    <>
      <h1>If you wish to contact me, please contact me at</h1>
      <div className="social">
        <ul>
          <li>
            <h3>Linkden</h3>
            <a href="https://www.linkedin.com/in/super-fusiom">{linkdenLogo}</a>
          </li>
          <li>
            <h3>Github</h3>
            <a href="https://github.com/Super-Fusiom">{githubLogo}</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default contactMain;
