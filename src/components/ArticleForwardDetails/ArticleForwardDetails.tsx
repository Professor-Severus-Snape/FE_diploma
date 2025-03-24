import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setArticleForwardCheckboxDetails } from '../../redux/checkboxDetailsSlice';
import arrowRight from '../../assets/arrow-right.svg';
import forward from '../../assets/forward.svg';
import './articleForwardDetails.css';

const ArticleForwardDetails = () => {
  const dispatch: AppDispatch = useDispatch();

  const { articleForwardCheckboxDetails } = useSelector(
    (state: RootState) => state.checkboxDetails
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setArticleForwardCheckboxDetails(event.target.checked));
  };

  return (
    <article className="forward-details">
      <header className="forward-details__header">
        <div className="forward-details__wrapper">
          <img src={forward} alt="Туда" className="forward-details__icon" />
          <h3 className="forward-details__title">туда</h3>
          {/* NOTE: не забыть динамически формировать атрибут dateTime!!! */}
          <time className="forward-details__date" dateTime="2018-08-30">
            30.08.2018
          </time>
        </div>

        <input
          id="forward-details"
          type="checkbox"
          className="forward-details__checkbox"
          onChange={handleChange}
          checked={articleForwardCheckboxDetails}
        />
        <label
          htmlFor="forward-details"
          className="forward-details__label"
        ></label>
      </header>

      <div
        className={
          articleForwardCheckboxDetails
            ? 'forward-details__content forward-details__content_active'
            : 'forward-details__content'
        }
      >
        <div className="forward-details__number-info">
          <div className="forward-details__number-info-text">№ Поезда</div>
          <div className="forward-details__number-info-number">116С</div>
        </div>

        <div className="forward-details__name-info">
          <div className="forward-details__name-info-text">Название</div>
          <div className="forward-details__name-info-name">
            <div className="forward-details__name-info-first-name">Адлер</div>
            <div className="forward-details__name-info-second-name">
              Санкт-Петербург
            </div>
          </div>
        </div>

        <div className="forward-details__time-info">
          <div className="forward-details__time-info-time-start">00:10</div>

          <div className="forward-details__time-info-wrapper">
            <span className="forward-details__time-info-duration">9:42</span>
            <img
              src={arrowRight}
              alt="Туда"
              className="forward-details__time-info-arrow"
            />
          </div>

          <div className="forward-details__time-info-time-stop">09:52</div>
        </div>

        <div className="forward-details__date-info">
          {/* NOTE: не забыть динамически формировать атрибут dateTime!!! */}
          <time
            className="forward-details__date-info-start"
            dateTime="2018-08-30"
          >
            30.08.2018
          </time>
          <time
            className="forward-details__date-info-stop"
            dateTime="2018-08-31"
          >
            31.08.2018
          </time>
        </div>

        <div className="forward-details__town-info">
          <div className="forward-details__town-info-from">Москва</div>
          <div className="forward-details__town-info-to">Санкт-Петербург</div>
        </div>

        <div className="forward-details__terminal-info">
          <div className="forward-details__terminal-info-from">
            <div className="forward-details__terminal-info-name">Курский</div>
            <div className="forward-details__terminal-info-terminal">
              вокзал
            </div>
          </div>
          <div className="forward-details__terminal-info-to">
            <div className="forward-details__terminal-info-name">Ладожский</div>
            <div className="forward-details__terminal-info-terminal">
              вокзал
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ArticleForwardDetails;
