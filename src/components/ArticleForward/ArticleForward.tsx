import { useState } from 'react';
import Arrival from '../Arrival/Arrival';
import Departure from '../Departure/Departure';

import forward from '../../assets/forward.svg';
import './articleForward.css';

const ArticleForward = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };

  return (
    <article className="forward">
      <header className="forward__header">
        <div className="forward__wrapper">
          <img src={forward} alt="Туда" className="forward__icon" />
          <h3 className="forward__title">туда</h3>
        </div>

        <input
          id="forward"
          type="checkbox"
          className="forward__checkbox"
          onChange={handleChange}
        />
        <label htmlFor="forward" className="forward__label"></label>
      </header>

      <div
        className={
          isChecked
            ? 'forward__content forward__content_active'
            : 'forward__content'
        }
      >
        <Departure destination="forward" />
        <Arrival destination="forward" />
      </div>
    </article>
  );
};

export default ArticleForward;
