import './menu.css';

const Menu = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#about" className="menu__link">О нас</a>
        </li>
        <li className="menu__item">
          <a href="#description" className="menu__link">Как это работает</a>
        </li>
        <li className="menu__item">
          <a href="#feedback" className="menu__link">Отзывы</a>
        </li>
        <li className="menu__item">
          <a href="#footer" className="menu__link">Контакты</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
