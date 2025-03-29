import NextPassenger from '../NextPassenger/NextPassenger';
import success from '../../assets/success.svg';
import './passengersCheckSuccess.css';

const PassengersCheckSuccess = () => {
  return (
    <div className="passengers-check_success">
      <div className="passengers-check__wrapper_success">
        <img
          className="passengers-check__icon_success"
          src={success}
          alt="success"
        />
        <span className="passengers-check__text_success">Готово</span>
      </div>

      <NextPassenger />
    </div>
  );
};

export default PassengersCheckSuccess;
