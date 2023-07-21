import "./contactMain.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const linkdenLogo = <FontAwesomeIcon icon={faLinkedin} />;

const contactMain = () => {
  return (
    <>
      <h1>If you wish to contact me, please contact me at</h1>
      <div className="social"></div>
      <h2>
        <a href="https://www.linkedin.com/in/super-fusiom">{linkdenLogo}</a>
      </h2>
    </>
  );
};

export default contactMain;
