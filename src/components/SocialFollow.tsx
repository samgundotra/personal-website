import React from 'react';
import './SocialFollow.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithubSquare,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";


function SocialFollow() {
  return (
    <div className="social-container">
    <a
      href="https://www.linkedin.com/in/samantha-gundotra-7503b01b4/"
      className="linkedin social"
    >
      <FontAwesomeIcon icon={faLinkedin} size="2x" />
    </a>
    <a
      href="https://github.com/samgundotra"
      className="github social"
    >
      <FontAwesomeIcon icon={faGithubSquare} size="2x" />
    </a>
    <a href="https://twitter.com/samgundotra" 
    className="twitter social"
    >
      <FontAwesomeIcon icon={faTwitter} size="2x" />
    </a>
  </div>
  );

}

export default SocialFollow;