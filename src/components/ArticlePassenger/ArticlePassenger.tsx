import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  setGender,
  setIsOpen,
  setLimitedMobility,
} from '../../redux/passengersSlice';
// import BirthCertificate from '../BirthCertificate/BirthCertificate';
import DocumentsCheckFail from '../DocumentsCheckFail/DocumentsCheckFail';
// import DocumentsCheckSuccess from '../DocumentsCheckSuccess/DocumentsCheckSuccess';
// import DocumentsNotChecked from '../DocumentsNotChecked/DocumentsNotChecked';
import FullName from '../FullName/FullName';
import Passport from '../Passport/Passport';

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
    // type,
    // lastName,
    // firstName,
    // middleName,
    gender,
    // birthdate,
    limitedMobility,
    // documentType,
    // passportSeries,
    // passportNumber,
    // certificateNumber,
  } = data;

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
          {/* TODO: реализовать выбор типа пассажира */}
          <div className="passenger__type">
            <div className="passenger__type-wrapper">
              <p className="passenger__type-text">Взрослый</p>
              <div className="passenger__type-arrow"></div>
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

        {/* Документы:  */}
        <div className="passenger__documents">
          {/* TODO: Выбирать нужный компонент в зависимости от потребностей + валидация! */}
          <Passport />
          {/* <BirthCertificate /> */}
        </div>

        <div className="passenger__footer">
          {/* TODO: выбирать нужный компонент в зависимости от данных формы */}
          {/* <DocumentsNotChecked /> */}
          {/* <DocumentsCheckSuccess /> */}
          <DocumentsCheckFail document={'passport'} />
          {/* <DocumentsCheckFail document={'birth-certificate'} /> */}
        </div>
      </div>
    </article>
  );
};

export default ArticlePassenger;
