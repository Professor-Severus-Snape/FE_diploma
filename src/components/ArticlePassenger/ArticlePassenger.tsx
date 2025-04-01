import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setIsOpen } from '../../redux/passengersSlice';
import Birthdate from '../Birthdate/Birthdate';
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
    lastName,
    firstName,
    middleName,
    gender,
    birthdate,
    limitedMobility,
    document,
    passportSeries,
    passportNumber,
    certificateNumber,
  } = data;

  const birthdateData = {
    index,
    birthdate,
  };

  // формируем пропсы:
  const documentsData = {
    index,
    document,
    passportSeries,
    passportNumber,
    certificateNumber,
  };

  const genderData = {
    index,
    gender,
  };

  const limitedMobilityData = {
    index,
    limitedMobility,
  };

  const nameData = {
    index,
    lastName,
    firstName,
    middleName,
  };

  const passengerTypeData = {
    index,
    type,
  };

  // проверка, что нет ошибок при валидации полей:
  const birthdateErr = birthdate.hasError;
  const lastNameErr = lastName.hasError;
  const firstNameErr = firstName.hasError;
  const middleNameErr = middleName.hasError;
  const passportSeriesErr = passportSeries.hasError;
  const passportNumberErr = passportNumber.hasError;
  const certificateNumberErr = certificateNumber.hasError;

  const errorTypes = [
    { condition: birthdateErr, type: 'birthdate' },
    { condition: lastNameErr || firstNameErr || middleNameErr, type: 'name' },
    { condition: passportSeriesErr || passportNumberErr, type: 'passport' },
    { condition: certificateNumberErr, type: 'certificate' },
  ];

  // если нет ошибок, то получим undefined:
  const currentError = errorTypes.find((error) => error.condition)?.type;

  // проверка, что все поля заполнены данными:
  const isValid =
    birthdate.isValid &&
    lastName.isValid &&
    firstName.isValid &&
    middleName.isValid &&
    ((passportSeries.isValid && passportNumber.isValid) ||
      certificateNumber.isValid);

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
            <FullName {...nameData} />
          </div>

          <div className="passenger__details">
            <Gender {...genderData} />
            <Birthdate {...birthdateData} />
          </div>

          <LimitedMobility {...limitedMobilityData} />
        </div>

        <Documents {...documentsData} />

        <div className="passenger__footer">
          {!currentError && !isValid && <PassengersNotChecked />}
          {!currentError && isValid && <PassengersCheckSuccess />}
          {currentError && (
            <PassengersCheckFail
              err={
                currentError as
                  | 'birthdate'
                  | 'name'
                  | 'passport'
                  | 'certificate'
              }
            />
          )}
        </div>
      </div>
    </article>
  );
};

export default ArticlePassenger;
