import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFoursquare } from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <p>
          Copyright © {new Date().getFullYear()}. All rights reserved
        </p>
        <div className="icons">
          <a href="https://github.com/Bested102">
            <FontAwesomeIcon icon={faGithub} className="icon"/> 
          </a>
          <a href="https://www.frontendmentor.io/profile/Bested101">
            <FontAwesomeIcon icon={faFoursquare} className="icon"/>
          </a>
        </div>
      </div>
    </footer>
  );
}
