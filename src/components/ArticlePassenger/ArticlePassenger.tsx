import { useState } from 'react';
// import BirthCertificate from '../BirthCertificate/BirthCertificate';
import DocumentsCheckFail from '../DocumentsCheckFail/DocumentsCheckFail';
// import DocumentsCheckSuccess from '../DocumentsCheckSuccess/DocumentsCheckSuccess';
// import DocumentsNotChecked from '../DocumentsNotChecked/DocumentsNotChecked';
import FullName from '../FullName/FullName';
import Passport from '../Passport/Passport';

import './articlePassenger.css';

const ArticlePassenger = ({ num }: { num: number }) => {
  const [isChecked, setIsChecked] = useState(num === 1);
  const [isMaleSex, setIsMaleSex] = useState(true); // по дефолту - мужской пол
  const [isLimitedMobility, setIsLimitedMobility] = useState(false); // по дефолту - здоров

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  const handleSexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsMaleSex(event.target.value === 'male'); // ориентируемся на значение радиокнопки
  };

  const handleLimitedMobilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsLimitedMobility(event.target.checked);
  };

  return (
    <article className="passenger">
      <header className="passenger__header">
        <div className="passenger__left-wrapper">
          {/* Свернуть/развернуть информацию о пассажире: */}
          <input
            id={`passenger-${num}`}
            type="checkbox"
            className="passenger__checkbox"
            onChange={handleChange}
            checked={isChecked}
          />
          <label
            htmlFor={`passenger-${num}`}
            className="passenger__label"
          ></label>

          <h3 className="passenger__title">Пассажир {num}</h3>
        </div>
        <div className="passenger__remove"></div>
      </header>

      <form
        className={
          isChecked
            ? 'passenger__form passenger__form_active'
            : 'passenger__form'
        }
      >
        <div className="passenger__main-data">
          <fieldset className="passenger__fieldset-type">
            <div className="passenger__type">
              <p className="passenger__type-text">Взрослый</p>
              <div className="passenger__type-arrow"></div>
            </div>
          </fieldset>

          <fieldset className="passenger__fieldset-names">
            <FullName />
          </fieldset>

          <fieldset className="passenger__fieldset-details">
            {/* Пол: */}
            <div className="passenger__info">
              <label htmlFor="male" className="passenger__label-info">
                Пол
              </label>

              <div className="passenger__sex">
                <input
                  className="passenger__sex-input visually-hidden"
                  id="male"
                  type="radio"
                  name="passenger-sex"
                  value="male"
                  checked={isMaleSex} // "М" выбрана, если isMaleSex == true
                  onChange={handleSexChange}
                />
                <label
                  className="passenger__sex-label passenger__sex-label_male"
                  htmlFor="male"
                >
                  М
                </label>

                <input
                  className="passenger__sex-input visually-hidden"
                  id="female"
                  type="radio"
                  name="passenger-sex"
                  value="ауmale"
                  checked={!isMaleSex} // "Ж" выбрана, если isMaleSex == false
                  onChange={handleSexChange}
                />
                <label
                  className="passenger__sex-label passenger__sex-label_female"
                  htmlFor="female"
                >
                  Ж
                </label>
              </div>
            </div>

            {/* Дата рождения: */}
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
          </fieldset>

          <fieldset className="passenger__limited-mobility">
            {/* Инвалидность:  */}
            <input
              id="limited-mobility"
              type="checkbox"
              className="passenger__limited-mobility-checkbox visually-hidden"
              onChange={handleLimitedMobilityChange}
              checked={isLimitedMobility}
            />
            <label
              htmlFor="limited-mobility"
              className="passenger__limited-mobility-label"
            >
              ограниченная подвижность
            </label>
          </fieldset>
        </div>

        {/* Документы:  */}
        <div className="passenger__documents">
          {/* TODO: Выбирать нужный компонент в зависимости от потребностей! */}
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
      </form>
    </article>
  );
};

export default ArticlePassenger;
