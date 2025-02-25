import { Link } from 'react-router-dom';
import './goHome.css';

const GoHome = () => {
  return (
    <Link className="go-home" to="/">
      вернуться на главную
    </Link>
  );
};

export default GoHome;
