import logo from '../../assets/logo.svg';
import './logo.css';

const Logo = () => {
  return (
    <a href="/" className="logo">
      <img src={logo} alt="Логотип" />
    </a>
  );
};

export default Logo;
