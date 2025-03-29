import fail from '../../assets/fail.svg';
import './passengersCheckFail.css';

interface IPassengersCheckFailProps {
  err: 'passport' | 'certificate';
}

const PassengersCheckFail = ({ err }: IPassengersCheckFailProps) => {
  const typeError = {
    passport: {
      text: 'Номер паспорта указан некорректно',
      example: '1234 123456',
    },

    certificate: {
      text: 'Номер свидетельства о рождении указан некорректно',
      example: 'VII-ЫП-123456',
    },
  };

  const currentError = typeError[err];

  return (
    <div className="passengers-check_fail">
      <img className="passengers-check__icon_fail" src={fail} alt="fail" />

      <div className="passengers-check__wrapper_fail">
        <div className="passengers-check__reason">{currentError.text}</div>

        <div className="passengers-check__example">
          Пример:
          <span className="passengers-check__current-example">
            {' ' + currentError.example}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PassengersCheckFail;
