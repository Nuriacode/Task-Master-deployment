import "../styles/Footer.scss";
import logo from "../images/logo.svg";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__div">
        <i className="fa-solid fa-envelope" />
        <i className="fa-brands fa-github-alt" />
        <i className="fa-brands fa-linkedin" />
      </div>
      <p className="footer__text">Created by Nuria Castaño</p>
      <img className="footer__img" src={logo} alt="logo taska master" />
    </footer>
  );
}
export default Footer;
