import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  setGender,
  setIsOpen,
  setLimitedMobility,
  setType,
} from '../../redux/passengersSlice';
import Documents from '../Documents/Documents';
import FullName from '../FullName/FullName';
import PassengersCheckFail from '../PassengersCheckFail/PassengersCheckFail';
import PassengersCheckSuccess from '../PassengersCheckSuccess/PassengersCheckSuccess';
import PassengersNotChecked from '../PassengersNotChecked/PassengersNotChecked';
import './articlePassenger.css';

const ArticlePassenger = ({ index }: { index: number }) => {
  const types = ['Взрослый', 'Детский', 'Без места']; // возможные типы пассажиров

  const [isOpenTypesList, setIsOpenTypesList] = useState<boolean>(false);
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

  // обработчик изменения информации о типе пассажира:
  const handleTypeChange = (type: string) => {
    setIsOpenTypesList(false);

    const payload = {
      index,
      type,
    };

    dispatch(setType(payload));
  };

  // обработчик изменения пола пассажира:
  const handleSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const payload = {
      index,
      gender: event.target.value === 'male',
    };

    dispatch(setGender(payload)); // ориентируемся на значение радиокнопки
  };

  // обработчик изменения информации об инвалидности пассажира:
  const handleLimitedMobilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const payload = {
      index,
      mobility: event.target.checked,
    };

    dispatch(setLimitedMobility(payload)); // ориентируемся на значение чекбокса
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
          {/* Тип пассажира: */}
          <div className="passenger__type">
            <div className="passenger__type-wrapper">
              <p className="passenger__type-text">{type}</p>
              <div
                className="passenger__type-arrow"
                onClick={() => setIsOpenTypesList(true)}
              ></div>

              {isOpenTypesList && (
                <ul className="passenger__type-list">
                  {types.map((type, index) => (
                    <li
                      key={index}
                      className="passenger__type-item"
                      onClick={() => handleTypeChange(type)}
                    >
                      {type}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          <div className="passenger__names">
            {/* TODO: реализовать хранение и валидацию ФИО */}
            <FullName />
          </div>

          <div className="passenger__details">
            {/* Пол: */}
            <div className="passenger__info">
              <label htmlFor="male" className="passenger__label-info">
                Пол
              </label>

              <div className="passenger__sex">
                <input
                  className="passenger__sex-input visually-hidden"
                  id={`male-${index}`} // уникальные for-id для каждой группы радиокнопок
                  type="radio"
                  name={`passenger-sex-${index}`} // уникальное имя для каждой группы радиокнопок
                  value="male"
                  checked={gender} // true - для 'male', false - для 'female'
                  onChange={handleSexChange}
                />
                <label
                  className="passenger__sex-label passenger__sex-label_male"
                  htmlFor={`male-${index}`} // уникальные for-id для каждой группы радиокнопок
                >
                  М
                </label>

                <input
                  className="passenger__sex-input visually-hidden"
                  id={`female-${index}`} // уникальные for-id для каждой группы радиокнопок
                  type="radio"
                  name={`passenger-sex-${index}`} // Уникальное имя для каждой группы радиокнопок
                  value="female"
                  checked={!gender} // true - для 'male', false - для 'female'
                  onChange={handleSexChange}
                />
                <label
                  className="passenger__sex-label passenger__sex-label_female"
                  htmlFor={`female-${index}`} // уникальные for-id для каждой группы радиокнопок
                >
                  Ж
                </label>
              </div>
            </div>

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

          <div className="passenger__limited-mobility">
            {/* Инвалидность:  */}
            <input
              id={`limited-mobility-${index}`} // уникальные for-id для каждой группы радиокнопок
              type="checkbox"
              className="passenger__limited-mobility-checkbox visually-hidden"
              onChange={handleLimitedMobilityChange}
              checked={limitedMobility}
            />
            <label
              htmlFor={`limited-mobility-${index}`} // уникальные for-id для каждой радиокнопки
              className="passenger__limited-mobility-label"
            >
              ограниченная подвижность
            </label>
          </div>
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
