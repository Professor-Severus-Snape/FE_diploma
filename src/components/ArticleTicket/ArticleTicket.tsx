import ChangeData from '../ChangeData/ChangeData';
import ChooseSeats from '../ChooseSeats/ChooseSeats';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import express from '../../assets/express.svg';
import tea from '../../assets/tea.svg';
import train from '../../assets/train.svg';
import wiFi from '../../assets/wi-fi.svg';

import './articleTicket.css';

const ArticleTicket = ({ text }: { text: string }) => {
  return (
    <article className="ticket">
      <h3 className="visually-hidden">Билет </h3>
      <div className="ticket__wrapper-left">
        <div className="ticket__inner-wrapper">
          <img className="ticket__train-img" src={train} alt="поезд" />
          <div className="ticket__train-number">116С</div>
          <div className="ticket__train-short-info">
            <div className="ticket__train-town-departure">
              <span>Адлер</span>
              <span>→</span>
            </div>
            <div className="ticket__train-town-from">
              <span>Москва</span>
              <span>→</span>
            </div>
            <div className="ticket__train-town-to">Санкт-Петербург</div>
            <div className="ticket__train-name">«Мегаполис»</div>
          </div>
        </div>
      </div>
      <div className="ticket__wrapper-middle">
        {/* билет туда */}
        <div className="ticket__forward">
          <div className="ticket__forward-info">
            <div className="ticket__time">00:10</div>
            <div className="ticket__town">Москва</div>
            <div className="ticket__terminal">Курский вокзал</div>
          </div>
          <div className="ticket__duration-info">
            <div className="ticket__duration-time">9:42</div>
            <img
              className="ticket__duration-icon"
              src={arrowRight}
              alt="Туда"
            />
          </div>
          <div className="ticket__backward-info">
            <div className="ticket__time">10:52</div>
            <div className="ticket__town">Санкт-Петербург</div>
            <div className="ticket__terminal">Ладожский вокзал</div>
          </div>
        </div>

        {/* билет обратно */}
        <div className="ticket__backward">
          <div className="ticket__forward-info">
            <div className="ticket__time">00:10</div>
            <div className="ticket__town">Москва</div>
            <div className="ticket__terminal">Курский вокзал</div>
          </div>
          <div className="ticket__duration-info">
            <div className="ticket__duration-time">9:42</div>
            <img className="ticket__duration-icon" src={arrowLeft} alt="Туда" />
          </div>
          <div className="ticket__backward-info">
            <div className="ticket__time">10:52</div>
            <div className="ticket__town">Санкт-Петербург</div>
            <div className="ticket__terminal">Ладожский вокзал</div>
          </div>
        </div>
      </div>

      <div className="ticket__wrapper-right">
        {/* информация о местах */}
        <ul className="ticket__seats">
          <li className="ticket__seat">
            <div className="ticket__seat-type">Сидячий</div>
            <div className="ticket__seat-wrapper">
              <div className="ticket__seat-count">88</div>
              <div className="ticket__seat-price-info">
                <span className="ticket__seat-price-text">от</span>
                <span className="ticket__seat-price">1 920</span>
                <span className="ticket__seat-price-currency">₽</span>
              </div>
            </div>
          </li>

          <li className="ticket__seat">
            <div className="ticket__seat-type">Плацкарт</div>
            <div className="ticket__seat-wrapper">
              <div className="ticket__seat-count">52</div>
              <div className="ticket__seat-price-info">
                <span className="ticket__seat-price-text">от</span>
                <span className="ticket__seat-price">2 530</span>
                <span className="ticket__seat-price-currency">₽</span>
              </div>
            </div>
          </li>

          <li className="ticket__seat">
            <div className="ticket__seat-type">Купе</div>
            <div className="ticket__seat-wrapper">
              <div className="ticket__seat-count">24</div>
              <div className="ticket__seat-price-info">
                <span className="ticket__seat-price-text">от</span>
                <span className="ticket__seat-price">3 820</span>
                <span className="ticket__seat-price-currency">₽</span>
              </div>
            </div>
          </li>

          <li className="ticket__seat">
            <div className="ticket__seat-type">Люкс</div>
            <div className="ticket__seat-wrapper">
              <div className="ticket__seat-count">15</div>
              <div className="ticket__seat-price-info">
                <span className="ticket__seat-price-text">от</span>
                <span className="ticket__seat-price">4 950</span>
                <span className="ticket__seat-price-currency">₽</span>
              </div>
            </div>
          </li>
        </ul>

        <div className="ticket__footer">
          <div className="ticket__features">
            <img className="ticket__feature-icon" src={wiFi} alt="wiFi" />
            <img className="ticket__feature-icon" src={express} alt="express" />
            <img className="ticket__feature-icon" src={tea} alt="tea" />
          </div>

          {text === 'Выбрать места' ? <ChooseSeats /> : null}
          {text === 'Изменить' ? <ChangeData route="/trains" /> : null}
        </div>
      </div>
    </article>
  );
};

export default ArticleTicket;
