import { useSelector } from 'react-redux';
import { fromUnixTime } from 'date-fns';

import { RootState } from '../../redux/store';

import ChangeData from '../ChangeData/ChangeData';
import ChooseSeats from '../ChooseSeats/ChooseSeats';

import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import express from '../../assets/express.svg';
import tea from '../../assets/tea.svg';
import train from '../../assets/train.svg';
import wiFi from '../../assets/wi-fi.svg';

import './articleTicket.css';

const ArticleTicket = ({ text, index }: { text: string; index: number }) => {
  const { trains } = useSelector((state: RootState) => state.trains); // массив найденных поездов
  const ticket = trains[index]; // конкретный билет
  const [trainName, trainNumber] = ticket.departure.train.name.split(' - '); // номер и имя поезда

  const fourthClass = {
    count:
      (ticket.departure.available_seats_info.fourth || 0) +
      (ticket.arrival?.available_seats_info.fourth || 0),
    minPrice: Math.min(
      ticket.departure.price_info.fourth?.top_price || +Infinity,
      ticket.departure.price_info.fourth?.bottom_price || +Infinity,
      ticket.arrival?.price_info.fourth?.top_price || +Infinity,
      ticket.arrival?.price_info.fourth?.bottom_price || +Infinity
    ),
  };

  const thirdClass = {
    count:
      (ticket.departure.available_seats_info.third || 0) +
      (ticket.arrival?.available_seats_info.third || 0),
    minPrice: Math.min(
      ticket.departure.price_info.third?.top_price || +Infinity,
      ticket.departure.price_info.third?.bottom_price || +Infinity,
      ticket.departure.price_info.third?.side_price || +Infinity,
      ticket.arrival?.price_info.third?.top_price || +Infinity,
      ticket.arrival?.price_info.third?.bottom_price || +Infinity,
      ticket.arrival?.price_info.third?.side_price || +Infinity
    ),
  };

  const secondClass = {
    count:
      (ticket.departure.available_seats_info.second || 0) +
      (ticket.arrival?.available_seats_info.second || 0),
    minPrice: Math.min(
      ticket.departure.price_info.second?.top_price || +Infinity,
      ticket.departure.price_info.second?.bottom_price || +Infinity,
      ticket.arrival?.price_info.second?.top_price || +Infinity,
      ticket.arrival?.price_info.second?.bottom_price || +Infinity
    ),
  };

  const firstClass = {
    count:
      (ticket.departure.available_seats_info.first || 0) +
      (ticket.arrival?.available_seats_info.first || 0),
    minPrice: Math.min(
      ticket.departure.price_info.first?.top_price || +Infinity,
      ticket.departure.price_info.first?.bottom_price || +Infinity,
      ticket.arrival?.price_info.first?.top_price || +Infinity,
      ticket.arrival?.price_info.first?.bottom_price || +Infinity
    ),
  };

  return (
    <article className="ticket">
      <h3 className="visually-hidden">Билет</h3>

      <div className="ticket__wrapper-left">
        <img className="ticket__train-img" src={train} alt="поезд" />
        <div className="ticket__train-number">{trainNumber}C</div>

        <div className="ticket__train-short-info">
          {/* NOTE: откуда получать эти данные - ??? */}
          {/*
            <div className="ticket__train-town-departure">
              <span>Адлер</span>
              <span>→</span>
            </div>
          */}
          <div className="ticket__train-town-from">
            <span>{ticket.departure.from.city.name}</span>
            <span>→</span>
          </div>
          <div className="ticket__train-town-to">
            {ticket.departure.to.city.name}
          </div>
          {trainName !== 'undefined' && (
            <div className="ticket__train-name">«{trainName}»</div>
          )}
        </div>
      </div>

      <div className="ticket__wrapper-middle">
        {/* билет туда (есть всегда!!!): */}
        <div className="ticket__forward">
          <div className="ticket__forward-info">
            <div className="ticket__time">
              {fromUnixTime(ticket.departure.from.datetime)
                .toISOString()
                .slice(11, 16)}
            </div>
            <div className="ticket__town">
              {ticket.departure.from.city.name}
            </div>
            <div className="ticket__terminal">
              {ticket.departure.from.railway_station_name} вокзал
            </div>
          </div>
          <div className="ticket__duration-info">
            <div className="ticket__duration-time">
              {fromUnixTime(ticket.departure.duration)
                .toISOString()
                .slice(11, 16)}
            </div>
            <img
              className="ticket__duration-icon"
              src={arrowRight}
              alt="Туда"
            />
          </div>
          <div className="ticket__backward-info">
            <div className="ticket__time">
              {fromUnixTime(ticket.departure.to.datetime)
                .toISOString()
                .slice(11, 16)}
            </div>
            <div className="ticket__town">{ticket.departure.to.city.name}</div>
            <div className="ticket__terminal">
              {ticket.departure.to.railway_station_name} вокзал
            </div>
          </div>
        </div>

        {/* билет обратно (может не быть!!!): */}
        {ticket.arrival && (
          <div className="ticket__backward">
            <div className="ticket__forward-info">
              <div className="ticket__time">
                {fromUnixTime(ticket.arrival.to.datetime)
                  .toISOString()
                  .slice(11, 16)}
              </div>
              <div className="ticket__town">{ticket.arrival.to.city.name}</div>
              <div className="ticket__terminal">
                {ticket.arrival.to.railway_station_name} вокзал
              </div>
            </div>
            <div className="ticket__duration-info">
              <div className="ticket__duration-time">
                {fromUnixTime(ticket.arrival.duration)
                  .toISOString()
                  .slice(11, 16)}
              </div>
              <img
                className="ticket__duration-icon"
                src={arrowLeft}
                alt="Туда"
              />
            </div>
            <div className="ticket__backward-info">
              <div className="ticket__time">
                {fromUnixTime(ticket.arrival.from.datetime)
                  .toISOString()
                  .slice(11, 16)}
              </div>
              <div className="ticket__town">
                {ticket.arrival.from.city.name}
              </div>
              <div className="ticket__terminal">
                {ticket.arrival.from.railway_station_name} вокзал
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="ticket__wrapper-right">
        <ul className="ticket__seats">
          {/* сидячие места (4-ый класс): */}
          {(ticket.departure.have_fourth_class ||
            ticket.arrival?.have_fourth_class) && (
            <li className="ticket__seat">
              <div className="ticket__seat-type">Сидячий</div>
              <div className="ticket__seat-wrapper">
                <div className="ticket__seat-count">{fourthClass.count}</div>
                <div className="ticket__seat-price-info">
                  <span className="ticket__seat-price-text">от</span>
                  <span className="ticket__seat-price">
                    {fourthClass.minPrice.toLocaleString('ru-RU')}
                  </span>
                  <span className="ticket__seat-price-currency">₽</span>
                </div>
              </div>
            </li>
          )}

          {/* платцкарт (3-ий класс): */}
          {(ticket.departure.have_third_class ||
            ticket.arrival?.have_third_class) && (
            <li className="ticket__seat">
              <div className="ticket__seat-type">Плацкарт</div>
              <div className="ticket__seat-wrapper">
                <div className="ticket__seat-count">{thirdClass.count}</div>
                <div className="ticket__seat-price-info">
                  <span className="ticket__seat-price-text">от</span>
                  <span className="ticket__seat-price">
                    {thirdClass.minPrice.toLocaleString('ru-RU')}
                  </span>
                  <span className="ticket__seat-price-currency">₽</span>
                </div>
              </div>
            </li>
          )}

          {/* купе (2-ой класс): */}
          {(ticket.departure.have_second_class ||
            ticket.arrival?.have_second_class) && (
            <li className="ticket__seat">
              <div className="ticket__seat-type">Купе</div>
              <div className="ticket__seat-wrapper">
                <div className="ticket__seat-count">{secondClass.count}</div>
                <div className="ticket__seat-price-info">
                  <span className="ticket__seat-price-text">от</span>
                  <span className="ticket__seat-price">
                    {secondClass.minPrice.toLocaleString('ru-RU')}
                  </span>
                  <span className="ticket__seat-price-currency">₽</span>
                </div>
              </div>
            </li>
          )}

          {/* люкс (1-ый класс): */}
          {(ticket.departure.have_first_class ||
            ticket.arrival?.have_first_class) && (
            <li className="ticket__seat">
              <div className="ticket__seat-type">Люкс</div>
              <div className="ticket__seat-wrapper">
                <div className="ticket__seat-count">{firstClass.count}</div>
                <div className="ticket__seat-price-info">
                  <span className="ticket__seat-price-text">от </span>
                  <span className="ticket__seat-price">
                    {firstClass.minPrice.toLocaleString('ru-RU')}
                  </span>
                  <span className="ticket__seat-price-currency"> ₽</span>
                </div>
              </div>
            </li>
          )}
        </ul>

        <div className="ticket__footer">
          <div className="ticket__features">
            {/* наличие wi-fi: */}
            {(ticket.departure.have_wifi || ticket.arrival?.have_wifi) && (
              <img className="ticket__feature-icon" src={wiFi} alt="wiFi" />
            )}

            {/* поезд-экспресс: */}
            {(ticket.departure.is_express || ticket.arrival?.is_express) && (
              <img
                className="ticket__feature-icon"
                src={express}
                alt="express"
              />
            )}

            {/* кипяток: */}
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
