import "./topProject.css";

const topProjects = () => {
  return (
    <main>
      <ul>
        <li>
          <h3 className="projectLink">
            <a href="https://www.github.com/Super-Fusiom/Arch-config">
              My Linux Configuration
            </a>
          </h3>
          <p>
            Although the setup script is used for arch based distrobutions, the
            dot files can be used in any linux based distrobution.
          </p>
          <p>
            I do need to update this with a better neovim config and others.
          </p>
          <p>
            I also clean up my home directory using xdg-ninja so that whenever I
            list out my home directory, It stays clean.
          </p>
        </li>
        <li>
          <h3 className="projectLink">
            <a href="https://github.com/Fuser-JS/Minder">
              Minder (My backend for my lister web app)
            </a>
          </h3>
          <p>
            This project is built using the go programming language with the gin
            framework insted of python's FastAPI or javascript's node.js due to
            how fast it returns a get request from a client.
          </p>
          <p>
            Of course I'm still working on it and as such I can't really show
            this as it doesn't work with the frontend but it still good for
            testing speed.
          </p>
        </li>
      </ul>
      <h2>
        Of course there will be more projects that I'll feature in this page...
      </h2>
    </main>
  );
};

export default topProjects;
