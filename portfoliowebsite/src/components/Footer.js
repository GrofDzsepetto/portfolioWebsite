import React from "react";
import "../styles/Footer.css";
import GitHubIcon from "../assets/images/svg/githubIcon.svg"
import LinkedInIcon from "../assets/images/svg/linkedinIcon.svg"
import FacebookIcon from "../assets/images/svg/facebookIcon.svg"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LEFT */}
        <div className="footer-left">
          <img
            src="/logo.svg"
            alt="Logo"
            className="footer-logo"
          />

          <p className="footer-title">Sign up for the mailing list</p>

          <form className="footer-newsletter">
            <input
              type="email"
              placeholder="email@example.com"
              required
            />
            <button type="submit">→</button>
          </form>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>About Me</h4>
            <ul>
              <li><a href="#">About</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Experience</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Programming Languages</h4>
            <ul>
              <li><a href="#">C# </a></li>
              <li><a href="#">Python</a></li>
              <li><a href="#">Powershell</a></li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <div className="footer-social">
              <a href="https://github.com/GrofDzsepetto"><img src={GitHubIcon} alt="Github" /></a>
              <a href="https://www.linkedin.com/in/pint%C3%A9r-benedek-1a0b3b3a5/"><img src={LinkedInIcon} alt="LinkedIn" /></a>
              <a href="https://www.facebook.com/pinter.benedek.14/?locale=hu_HU"><img src={FacebookIcon} alt="Facebook" /></a>
            </div>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Benedek Pintér aka. Dzsepetto
      </div>
    </footer>
  );
}

export default Footer;
