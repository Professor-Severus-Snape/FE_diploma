import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  setPassportSeriesValue,
  setPassportNumberValue,
  setPassportSeriesError,
  setPassportNumberError,
} from '../../redux/passengersSlice';
import './passport.css';

interface IPassportProps {
  index: number;
  passportSeries: { value: string; error: boolean };
  passportNumber: { value: string; error: boolean };
}

const Passport = (props: IPassportProps) => {
  const { index, passportSeries, passportNumber } = props;

  const dispatch: AppDispatch = useDispatch();

  // изменение серии паспорта:
  const handleSeriesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    const cursorPosition = target.selectionStart || 0; // сохраняем текущую позицию курсора

    const filteredValue = value.replace(/\D/g, ''); // пропускаем только цифры

    // если данные не поменялись, нет смысла обновлять store:
    if (passportSeries.value === filteredValue) {
      return;
    }

    const payload = {
      index,
      passportSeriesValue: filteredValue,
    };

    dispatch(setPassportSeriesValue(payload));

    // если введено правильное значение, сбрасываем ошибку:
    if (passportSeries.error && filteredValue.length === 4) {
      dispatch(setPassportSeriesError({ index, passportSeriesError: false }));
    }

    // восстанавливаем позицию курсора после обновления значения:
    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    }, 0); // отложенная установка, чтобы избежать проблемы с перерисовкой
  };

  // изменение номера паспорта:
  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value } = target;

    const cursorPosition = target.selectionStart || 0; // сохраняем текущую позицию курсора

    const filteredValue = value.replace(/\D/g, ''); // пропускаем только цифры

    // если данные не поменялись, нет смысла обновлять store:
    if (passportNumber.value === filteredValue) {
      return;
    }

    const payload = {
      index,
      passportNumberValue: filteredValue,
    };

    dispatch(setPassportNumberValue(payload));

    // если введено правильное значение, сбрасываем ошибку:
    if (passportNumber.error && filteredValue.length === 6) {
      dispatch(setPassportNumberError({ index, passportNumberError: false }));
    }

    // восстанавливаем позицию курсора после обновления значения:
    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    }, 0); // отложенная установка, чтобы избежать проблемы с перерисовкой
  };

  // обработка события blur для проверки правильности серии паспорта:
  const handleSeriesBlur = () => {
    const isValid = passportSeries.value.length === 4;

    const payload = {
      index,
      passportSeriesError: !isValid,
    };

    dispatch(setPassportSeriesError(payload));
  };

  // обработка события blur для проверки правильности номера паспорта:
  const handleNumberBlur = () => {
    const isValid = passportNumber.value.length === 6;

    const payload = {
      index,
      passportNumberError: !isValid,
    };

    dispatch(setPassportNumberError(payload));
  };

  return (
    <>
      <div className="passport__column">
        <label htmlFor="passport-series" className="passport__label">
          Серия
        </label>
        <input
          id="passport-series"
          className={`passport__input${
            passportSeries.error ? ' passport__input_invalid' : ''
          }`}
          type="text"
          minLength={4}
          maxLength={4}
          placeholder="____"
          required
          value={passportSeries.value}
          onChange={handleSeriesChange}
          onBlur={handleSeriesBlur}
        />
      </div>

      <div className="passport__column">
        <label htmlFor="passport-number" className="passport__label">
          Номер
        </label>
        <input
          id="passport-number"
          className={`passport__input${
            passportNumber.error ? ' passport__input_invalid' : ''
          }`}
          type="text"
          minLength={6}
          maxLength={6}
          placeholder="______"
          required
          value={passportNumber.value}
          onChange={handleNumberChange}
          onBlur={handleNumberBlur}
        />
      </div>
    </>
  );
};

export default Passport;
