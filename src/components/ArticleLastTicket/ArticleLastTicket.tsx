import wiFi from '../../assets/wi-fi.svg';
import express from '../../assets/express.svg';
import tea from '../../assets/tea.svg';

import './articleLastTicket.css';

const ArticleLastTicket = () => {
  return (
    <article className="last-ticket">
      <h4 className="last-ticket__towns">
        <div className="last-ticket__town-from">Санкт-Петербург</div>
        <div className="last-ticket__town-to">Самара</div>
      </h4>

      <div className="last-ticket__terminals">
        <div className="last-ticket__terminal-from">
          <p className="last-ticket__terminal-name">Курский</p>
          <p className="last-ticket__terminal">вокзал</p>
        </div>
        <div className="last-ticket__terminal-to">
          <p className="last-ticket__terminal-name">Московский</p>
          <p className="last-ticket__terminal">вокзал</p>
        </div>
      </div>

      <div className="last-ticket__info">
        <div className="last-ticket__icons">
          <img
            src={wiFi}
            alt="wi-fi"
            className="last-ticket__icon last-ticket__icon_wifi"
          />
          <img
            src={express}
            alt="express"
            className="last-ticket__icon last-ticket__icon_express"
          />
          <img
            src={tea}
            alt="tea"
            className="last-ticket__icon last-ticket__icon_tea"
          />
        </div>
        <div className="last-ticket__price">
          <span className="last-ticket__text">от</span>
          <span className="last-ticket__cash">2 500</span>
          <span className="last-ticket__currency">₽</span>
        </div>
      </div>
    </article>
  );
};

export default ArticleLastTicket;
