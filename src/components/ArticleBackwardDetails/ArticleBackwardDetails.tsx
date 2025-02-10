import { useState } from 'react';
import arrowLeft from '../../assets/arrow-left.svg';
import backward from '../../assets/backward.svg';
import './articleBackwardDetails.css';

const ArticleBackwardDetails = () => {
  const [isChecked, setIsChecked] = useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <article className="backward-details">
      <header className="backward-details__header">
        <div className="backward-details__wrapper">
          <img src={backward} alt="Туда" className="backward-details__icon" />
          <h3 className="backward-details__title">обратно</h3>
          {/* NOTE: не забыть динамически формировать атрибут dateTime!!! */}
          <time className="backward-details__date" dateTime="2018-09-09">
            09.09.2018
          </time>
        </div>

        <input
          id="backward-details"
          type="checkbox"
          className="backward-details__checkbox"
          onChange={handleChange}
          checked={isChecked}
        />
        <label
          htmlFor="backward-details"
          className="backward-details__label"
        ></label>
      </header>

      <div
        className={
          isChecked
            ? 'backward-details__content backward-details__content_active'
            : 'backward-details__content'
        }
      >
        <div className="backward-details__number-info">
          <div className="backward-details__number-info-text">№ Поезда</div>
          <div className="backward-details__number-info-number">116С</div>
        </div>

        <div className="backward-details__name-info">
          <div className="backward-details__name-info-text">Название</div>
          <div className="backward-details__name-info-name">
            <div className="backward-details__name-info-first-name">Адлер</div>
            <div className="backward-details__name-info-second-name">
              Санкт-Петербург
            </div>
          </div>
        </div>

        <div className="backward-details__time-info">
          <div className="backward-details__time-info-time-start">00:10</div>

          <div className="backward-details__time-info-wrapper">
            <span className="backward-details__time-info-duration">9:42</span>
            <img
              src={arrowLeft}
              alt="Туда"
              className="backward-details__time-info-arrow"
            />
          </div>

          <div className="backward-details__time-info-time-stop">09:52</div>
        </div>

        <div className="backward-details__date-info">
          {/* NOTE: не забыть динамически формировать атрибут dateTime!!! */}
          <time
            className="backward-details__date-info-start"
            dateTime="2018-09-09"
          >
            09.09.2018
          </time>
          <time
            className="backward-details__date-info-stop"
            dateTime="2018-09-08"
          >
            08.09.2018
          </time>
        </div>

        <div className="backward-details__town-info">
          <div className="backward-details__town-info-from">Москва</div>
          <div className="backward-details__town-info-to">Санкт-Петербург</div>
        </div>

        <div className="backward-details__terminal-info">
          <div className="backward-details__terminal-info-from">
            <div className="backward-details__terminal-info-name">Курский</div>
            <div className="backward-details__terminal-info-terminal">
              вокзал
            </div>
          </div>
          <div className="backward-details__terminal-info-to">
            <div className="backward-details__terminal-info-name">
              Ладожский
            </div>
            <div className="backward-details__terminal-info-terminal">
              вокзал
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleBackwardDetails;
