import { useDispatch } from 'react-redux';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { resetArrivalSlice } from '../../redux/arrivalSlice';
import { resetCarriagesSlice } from '../../redux/carriagesSlice';
import { resetCheckboxDetailsSlice } from '../../redux/checkboxDetailsSlice';
import { resetCheckboxSlice } from '../../redux/checkboxSlice';
import { resetDepartureSlice } from '../../redux/departureSlice';
import { resetLastTicketsSlice } from '../../redux/lastTicketsSlice';
import { resetOrderSlice } from '../../redux/orderSlice';
import { resetParamsSlice } from '../../redux/paramsSlice';
import { resetPassengersSlice } from '../../redux/passengersSlice';
import { resetPaymentSlice } from '../../redux/paymentSlice';
import { resetSearchFormSlice } from '../../redux/searchFormSlice';
import { resetTownsSlice } from '../../redux/townsSlice';
import { resetTrainsSlice } from '../../redux/trainsSlice';
import './menu.css';

const Menu = () => {
  const location = useLocation(); // например, '/'
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleGoHome = async (hash: string) => {
    if (location.pathname !== '/') {
      // сначала переходим на корневой роут:
      await navigate(`/${hash}`);

      // полная очистка redux-store (только после перехода на роут):
      setTimeout(() => {
        dispatch(resetOrderSlice()); // 1. полная очистка redux-store по ключу 'order'
        dispatch(resetPaymentSlice()); // 2. полная очистка redux-store по ключу 'payment'
        dispatch(resetPassengersSlice()); // 3. полная очистка redux-store по ключу 'passengers'
        dispatch(resetArrivalSlice()); // 4. полная очистка redux-store по ключу 'arrival'
        dispatch(resetDepartureSlice()); // 5. полная очистка redux-store по ключу 'departure'
        dispatch(resetCarriagesSlice()); // 6. полная очистка redux-store по ключу 'carriages'
        dispatch(resetTrainsSlice()); // 7. полная очистка redux-store по ключу 'trains'
        dispatch(resetLastTicketsSlice()); // 8. полная очистка redux-store по ключу 'lastTickets'
        dispatch(resetTownsSlice()); // 9. полная очистка redux-store по ключу 'towns'
        dispatch(resetParamsSlice()); // 10. полная очистка redux-store по ключу 'params'
        dispatch(resetSearchFormSlice()); // 11. полная очистка redux-store по ключу 'searchForm'
        dispatch(resetCheckboxDetailsSlice()); // 12. очистка redux-store по 'checkboxDetails'
        dispatch(resetCheckboxSlice()); // 13. полная очистка redux-store по ключу 'checkbox'
      }, 0); // нулевая задержка, чтобы дать время React на обработку навигации
    } else {
      navigate(hash);
    }
  };

  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          {/* переход на Home page */}
          <a className="menu__link" onClick={() => handleGoHome('#about')}>
            О нас
          </a>
        </li>
        <li className="menu__item">
          {/* переход на Home page */}
          <a
            className="menu__link"
            onClick={() => handleGoHome('#description')}
          >
            Как это работает
          </a>
        </li>
        <li className="menu__item">
          {/* переход на Home page */}
          <a className="menu__link" onClick={() => handleGoHome('#feedback')}>
            Отзывы
          </a>
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
