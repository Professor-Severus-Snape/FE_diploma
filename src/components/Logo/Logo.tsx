import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './logo.css';

const Logo = () => {
  return (
    <Link to="/" className="logo">
      <img src={logo} alt="Логотип" />
    </Link>
  );
};

export default Logo;
