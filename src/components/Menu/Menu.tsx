import { Link } from 'react-router-dom';
import './menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          {/* переход на Home page */}
          <Link to="/#about" className="menu__link">
            О нас
          </Link>
        </li>
        <li className="menu__item">
          {/* переход на Home page */}
          <Link to="/#description" className="menu__link">
            Как это работает
          </Link>
        </li>
        <li className="menu__item">
          {/* переход на Home page */}
          <Link to="/#feedback" className="menu__link">
            Отзывы
          </Link>
        </li>
        <li className="menu__item">
          {/* остаемся на том же роуте => слэш не нужен */}
          <Link to="#footer" className="menu__link">
            Контакты
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
