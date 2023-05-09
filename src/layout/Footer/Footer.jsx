
import { HashLink } from "react-router-hash-link";
import { Github } from "react-bootstrap-icons";

export default function Footer() {

  const githubUrl = "https://github.com/jsohndata/neo-tokyo-portfolio";
  const currentYear = new Date().getFullYear();

  return (
    <footer>      
      {/* <HashLink to="#intro">
        <p className="text-center">👆🏽</p>
      </HashLink> */}
  
      <p className="text-center text-secondary">
        <a href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="button-effect">
        <Github size="40" color="grey" />
        <br /><small>Code in GitHub</small>
        </a>
        <small>&copy; {currentYear} Original AI Art</small></p>

      <p id="mozarts-ghost"><a href="https://notiempo.lol/mozartsghost/11"
        alt="Click on it and press control-shift."
        title="Click on it and press control-shift.">π</a></p>
    </footer>
  )
}
