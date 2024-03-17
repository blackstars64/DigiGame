import { Link } from "react-router-dom";
import mafumafu from "../assets/mafumafu-mini.png";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import "../scss/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <Link className="footer-link-portfolio" to="https://nelson-almeida.fr/">
        <picture>
          <img className="footer-img-portfolio" src={mafumafu} alt="mafumafu" />
        </picture>
        <p className="footer-p-portfolio">Create by: Blackstars</p>
      </Link>
      <div className="footer-link">
        <Link
          className="footer-link-select"
          to="https://www.linkedin.com/in/almeidanelson64/"
        >
          <picture>
            <img className="footer-link-img" src={linkedin} alt="linkedin" />
          </picture>
          <p className="footer-link-p">Linkedin</p>
        </Link>
        <Link
          className="footer-link-select"
          to="https://github.com/blackstars64"
        >
          <picture>
            <img className="footer-link-img" src={github} alt="" />
          </picture>
          <p className="footer-link-p">GitHub</p>
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
