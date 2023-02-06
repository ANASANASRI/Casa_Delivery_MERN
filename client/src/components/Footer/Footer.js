import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import github from "../../images/icons8-github-40 (1).png";
import Twitter from "../../images/icons8-twitter-circled-40.png";
import linkedin from "../../images/icons8-linkedin-circled-40 (1).png";
import FooterCss from "./FooterCss.css";

const Footer = () => {
    return (
      <footer>
        <p className="footer-heart text-center">
          by{" "}
          <a href="https://www.linkedin.com/in/anasanasri/">Anas ANASRI</a>
        </p>
        <div className="social-icons d-flex justify-content-center">
            <a href="https://github.com/ANASANASRI" target="_blank" rel="noreferrer noopener"> <img src={github} alt="facebook"/></a>
            <a href="https://twitter.com/anasanasri_" target="_blank" rel="noreferrer noopener"> <img src={Twitter} alt="twitter"/></a>
            <a href="https://www.linkedin.com/in/anasanasri/" target="_blank" rel="noreferrer noopener" > <img src={linkedin} alt="Linkedin"/></a>
        </div>
      </footer>
    );
};

export default Footer;