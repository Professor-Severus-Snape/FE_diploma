import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setIsOpen } from '../../redux/passengersSlice';
import Documents from '../Documents/Documents';
import FullName from '../FullName/FullName';
import Gender from '../Gender/Gender';
import LimitedMobility from '../LimitedMobility/LimitedMobility';
import PassengersCheckFail from '../PassengersCheckFail/PassengersCheckFail';
import PassengersCheckSuccess from '../PassengersCheckSuccess/PassengersCheckSuccess';
import PassengersNotChecked from '../PassengersNotChecked/PassengersNotChecked';
import PassengerType from '../PassengerType/PassengerType';
import './articlePassenger.css';

const ArticlePassenger = ({ index }: { index: number }) => {
  const dispatch: AppDispatch = useDispatch();

  // получаем заготовку массива с пассажирами:
  const { passengersList } = useSelector(
    (state: RootState) => state.passengers
  );

  // деструктурируем данные конкретного пассажира:
  const { isOpen, data } = passengersList[index];

  // деструктурируем данные конкретного пассажира:
  const {
    type,
    // lastName,
    // firstName,
    // middleName,
    gender,
    // birthdate,
    limitedMobility,
    document,
    passportSeries,
    passportNumber,
    certificateNumber,
  } = data;

  const documentsData = {
    index,
    document,
    passportSeries,
    passportNumber,
    certificateNumber,
  };

  const limitedMobilityData = {
    index,
    limitedMobility,
  };

  const passengerTypeData = {
    index,
    type,
  };

  const genderData = {
    index,
    gender,
  };

  // проверка, что нет ошибок при валидации полей:
  // TODO: дополнить данными ФИО и даты рождения
  const passportSeriesErr = passportSeries.hasError;
  const passportNumberErr = passportNumber.hasError;
  const certificateNumberErr = certificateNumber.hasError;

  const hasErrors =
    passportSeriesErr || passportNumberErr || certificateNumberErr;

  // проверка, что все поля заполнены данными:
  // TODO: дополнить данными ФИО и даты рождения
  const isValid =
    ((passportSeries.isValid && passportNumber.isValid) ||
      certificateNumber.isValid) &&
    // NOTE: временная заглушка true для остальных данных
    true;

  // обработчик скрытия/показа данных конкретного пассажира:
  const handleContentViewChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const payload = {
      index,
      isOpen: event.target.checked,
    };

    dispatch(setIsOpen(payload)); // ориентируемся на значение чекбокса
  };

  return (
    <article className="passenger">
      <header className="passenger__header">
        <div className="passenger__left-wrapper">
          {/* Скрыть/показать информацию о пассажире: */}
          <input
            id={`passenger-${index}`}
            type="checkbox"
            className="passenger__checkbox"
            onChange={handleContentViewChange}
            checked={isOpen}
          />
          <label
            htmlFor={`passenger-${index}`}
            className="passenger__label"
          ></label>

          <h3 className="passenger__title">Пассажир {index + 1}</h3>
        </div>
        {/* TODO: реализовать удаление данных пассажира по клику на крестик */}
        <div className="passenger__remove"></div>
      </header>

      <div
        className={
          isOpen
            ? 'passenger__content passenger__content_active'
            : 'passenger__content'
        }
      >
        <div className="passenger__main-data">
          <PassengerType {...passengerTypeData} />

          <div className="passenger__names">
            {/* TODO: реализовать хранение и валидацию ФИО */}
            <FullName />
          </div>

          <div className="passenger__details">
            <Gender {...genderData} />

            {/* Дата рождения: */}
            {/* TODO: реализовать хранение и валидацию даты рождения */}
            <div className="passenger__info">
              <label
                htmlFor="passenger-birthday"
                className="passenger__label-info"
              >
                Дата рождения
              </label>
              <input
                id="passenger-birthday"
                // type="date" // TODO: использовать библиотеку (например, flatpickr)
                type="text"
                placeholder="ДД/ММ/ГГ"
                className="passenger__input-birthday"
              />
            </div>
          </div>

          <LimitedMobility {...limitedMobilityData} />
        </div>

        <Documents {...documentsData} />

        <div className="passenger__footer">
          {!hasErrors && !isValid && <PassengersNotChecked />}
          {!hasErrors && isValid && <PassengersCheckSuccess />}
          {hasErrors && (
            <PassengersCheckFail
              err={
                passportSeriesErr || passportNumberErr
                  ? 'passport'
                  : 'certificate'
                // TODO: дополнить данными ФИО и даты рождения
                // : certificateNumberErr
                // ? 'certificate'
                // : ''
              }
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticlePassenger;
