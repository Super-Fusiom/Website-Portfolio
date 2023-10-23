import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";

const linkdenLogo = <FontAwesomeIcon icon={faLinkedinIn} />;
const githubLogo = <FontAwesomeIcon icon={faGithub} />;
const mailLogo = <FontAwesomeIcon icon={faEnvelope} />;

export default function footer() {
  return (
    <footer>
      <div className="br">
        <span></span>
      </div>
      <div className="content">
        <div className="fcontact">
          <a href="https://www.linkdin.com/in/super-fusiom">{linkdenLogo}</a>
          <a href="https://github.com/Super-Fusiom">{githubLogo}</a>
          <a href="mailto:paul21479@gmail.com">{mailLogo}</a>
        </div>
        <div></div>
      </div>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0">
        This website is proudly made under the MIT License.
      </a>
    </footer>
  );
}
