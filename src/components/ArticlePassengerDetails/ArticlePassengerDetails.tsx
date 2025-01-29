import { useState } from 'react';
import passenger from '../../assets/passenger.svg';
import './articlePassengerDetails.css';

const ArticlePassengerDetails = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <article className="passenger-details">
      <header className="passenger-details__header">
        <div className="passenger-details__wrapper">
          <img
            src={passenger}
            alt="Пассажиры"
            className="passenger-details__icon"
          />
          <h3 className="passenger-details__title">пассажиры</h3>
        </div>

        <input
          id="passenger-details"
          type="checkbox"
          className="passenger-details__checkbox"
          onChange={handleChange}
        />
        <label
          htmlFor="passenger-details"
          className="passenger-details__label"
        ></label>
      </header>

      <div
        className={
          isChecked
            ? 'passenger-details__content passenger-details__content_active'
            : 'passenger-details__content'
        }
      >
        <div className="passenger-details__row">
          <div className="passenger-details__passenger">2 Взрослых</div>
          <div className="passenger-details__price">
            <div className="passenger-details__cash">5 840</div>
            <div className="passenger-details__currency">₽</div>
          </div>
        </div>

        <div className="passenger-details__row">
          <div className="passenger-details__passenger">1 Ребенок</div>
          <div className="passenger-details__price">
            <div className="passenger-details__cash">1 920</div>
            <div className="passenger-details__currency">₽</div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticlePassengerDetails;
