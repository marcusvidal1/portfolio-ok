import '../styles/footer.css';
import Mascot from "./Mascot";
import { socialLinks } from '../config/links';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Marcus Vidal. Todos os direitos reservados.</p>
        <Mascot />
        <div className="footer-links">
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href={socialLinks.email}>Contato</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;