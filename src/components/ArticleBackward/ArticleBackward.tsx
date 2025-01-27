import { useState } from 'react';
import Arrival from '../Arrival/Arrival';
import Departure from '../Departure/Departure';

import backward from '../../assets/backward.svg';
import './articleBackward.css';

const ArticleBackward = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <article className="backward">
      <header className="backward__header">
        <div className="backward__wrapper">
          <img src={backward} alt="Обратно" className="backward__icon" />
          <h3 className="backward__title">обратно</h3>
        </div>

        <input
          id="backward"
          type="checkbox"
          className="backward__checkbox"
          onChange={handleChange}
        />
        <label htmlFor="backward" className="backward__label"></label>
      </header>

      <div
        className={
          isChecked
            ? 'backward__content backward__content_active'
            : 'backward__content'
        }
      >
        <Departure />
        <Arrival />
      </div>
    </article>
  );
};

export default ArticleBackward;
