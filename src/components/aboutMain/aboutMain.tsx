import Language from "../languageList/languageList";
import "./aboutMain.css";

const aboutMain = () => {
  return (
    <>
      <h1>I Paul or rather Super_Fusiom had been wondering?</h1>
      <h2>Why?</h2>
      <div className="aboutGrid">
        <div className="aboutBox">
          <h2>My most common languages in Github include:</h2>
          <Language username={"Super-Fusiom"} />
        </div>
        <div className="aboutBox">
          <h1>I'm not a good designer really but I can get stuff done</h1>
          <p>
            I do like to do a lot of IT and programming in my free time.
            <br />
            Most of my time is mainly networking and IT, however I do some
            programming on the side.
          </p>
        </div>
      </div>
    </>
  );
};

export default aboutMain;
