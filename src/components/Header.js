import logo from "../images/logo.svg";
import "../styles/Header.scss";
const Header = () => {
  return (
    <header className="header">
      <img className="header__img" src={logo} alt="logo taska master" />
    </header>
  );
};

export default Header;
