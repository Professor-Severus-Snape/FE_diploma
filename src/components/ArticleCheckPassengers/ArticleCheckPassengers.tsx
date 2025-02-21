import ChangeData from '../ChangeData/ChangeData';
import TitleCheck from '../TitleCheck/TitleCheck';
import avatar from '../../assets/avatar.svg';
import './articleCheckPassengers.css';

const ArticleCheckPassengers = () => {
  return (
    <article className="check-passengers">
      <TitleCheck text="Пассажиры" />

      <div className="check-passengers__container">
        <ul className="check-passengers__list">
          <li className="check-passengers__item">
            <div className="check-passengers__avatar">
              <img
                className="check-passengers__img"
                src={avatar}
                alt="avatar"
              />
              <span className="check-passengers__type">Взрослый</span>
            </div>

            <div className="check-passengers__info">
              <div className="check-passengers__full-name">
                Мартынюк Ирина Эдуардовна
              </div>
              <div className="check-passengers__sex">Пол женский</div>
              <div className="check-passengers__date-of-birth">
                Дата рождения 17.02.1985
              </div>
              <div className="check-passengers__document">
                Паспорт РФ 4204 380694
              </div>
            </div>
          </li>

          <li className="check-passengers__item">
            <div className="check-passengers__avatar">
              <img
                className="check-passengers__img"
                src={avatar}
                alt="avatar"
              />
              <span className="check-passengers__type">Детский</span>
            </div>

            <div className="check-passengers__info">
              <div className="check-passengers__full-name">
                Мартынюк Кирилл Сергеевич
              </div>
              <div className="check-passengers__sex">Пол мужской</div>
              <div className="check-passengers__date-of-birth">
                Дата рождения 25.01.2006
              </div>
              <div className="check-passengers__document">
                Свидетельство о рождении VIII УН 256319
              </div>
            </div>
          </li>

          <li className="check-passengers__item">
            <div className="check-passengers__avatar">
              <img
                className="check-passengers__img"
                src={avatar}
                alt="avatar"
              />
              <span className="check-passengers__type">Взрослый</span>
            </div>

            <div className="check-passengers__info">
              <div className="check-passengers__full-name">
                Мартынюк Сергей Петрович
              </div>
              <div className="check-passengers__sex">Пол мужской</div>
              <div className="check-passengers__date-of-birth">
                Дата рождения 19.06.1982
              </div>
              <div className="check-passengers__document">
                Паспорт РФ 4204 380694
              </div>
            </div>
          </li>
        </ul>

        <div className="check-passengers__sidebar">
          <div className="check-passengers__total-price">
            <div className="check-passengers__text">Всего</div>
            <div className="check-passengers__price">
              <span className="check-passengers__amount">7 760</span>
              <span className="check-passengers__currency">₽</span>
            </div>
          </div>

          <ChangeData />
        </div>
      </div>
    </article>
  );
};

export default ArticleCheckPassengers;
