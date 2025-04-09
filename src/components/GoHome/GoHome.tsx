import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppDispatch } from '../../redux/store';
import { resetTrainsSlice } from '../../redux/trainsSlice';
import { resetPaymentSlice } from '../../redux/paymentSlice';
import { resetTownsSlice } from '../../redux/townsSlice';
import { resetSearchFormSlice } from '../../redux/searchFormSlice';
import { resetPassengersSlice } from '../../redux/passengersSlice';
import { resetParamsSlice } from '../../redux/paramsSlice';
import { clearArrivalData } from '../../redux/arrivalSlice';
import { clearDepartureData } from '../../redux/departureSlice';
import { resetCheckboxDetailsSlice } from '../../redux/checkboxDetailsSlice';
import { resetCheckboxSlice } from '../../redux/checkboxSlice';
import { resetLastTicketsSlice } from '../../redux/lastTicketsSlice';
import { resetCarriagesSlice } from '../../redux/carriagesSlice';
import { resetOrderSlice } from '../../redux/orderSlice';

import './goHome.css';

const GoHome = () => {
  const dispatch: AppDispatch = useDispatch();

  // полная очистка redux-store:
  const handleResetStore = () => {
    dispatch(resetOrderSlice()); // 1. полная очистка redux-store по ключу 'order'
    dispatch(resetPaymentSlice()); // 2. полная очистка redux-store по ключу 'payment'
    dispatch(resetPassengersSlice()); // 3. полная очистка redux-store по ключу 'passengers'
    dispatch(clearArrivalData()); // 4. полная очистка redux-store по ключу 'arrival'
    dispatch(clearDepartureData()); // 5. полная очистка redux-store по ключу 'departure'
    dispatch(resetCarriagesSlice()); // 6. полная очистка redux-store по ключу 'carriages'
    dispatch(resetTrainsSlice()); // 7. полная очистка redux-store по ключу 'trains'
    dispatch(resetLastTicketsSlice()); // 8. полная очистка redux-store по ключу 'lastTickets'
    dispatch(resetTownsSlice()); // 9. полная очистка redux-store по ключу 'towns'
    dispatch(resetParamsSlice()); // 10. полная очистка redux-store по ключу 'params'
    dispatch(resetSearchFormSlice()); // 11. полная очистка redux-store по ключу 'searchForm'
    dispatch(resetCheckboxDetailsSlice()); // 12. полная очистка redux-store по 'checkboxDetails'
    dispatch(resetCheckboxSlice()); // 13. полная очистка redux-store по ключу 'checkbox'
  };

  return (
    <Link className="go-home" to="/" onClick={handleResetStore}>
      вернуться на главную
    </Link>
  );
};

export default GoHome;
