import "../styles/components/Footer.css";
import { socials } from "../config/socials";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-container">
        <div className="footer-links">
          <div className="footer-column footer-contact">
            <h4 className="footer-contact-title">Contact Me</h4>
            <span className="footer-contact-email">pinterbence2002@gmail.com</span>
          </div>

          <div className="footer-column">
            <h4>Programming Languages</h4>
            <ul className="footer-skills">
              <li>C#</li>
              <li>.NET</li>
              <li>Python</li>
              <li>PowerShell</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Social</h4>
            <div className="footer-social">
              {socials.map((item) => (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.name}
                >
                  <img src={item.icon} alt={item.name} />
                </a>
              ))}
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
