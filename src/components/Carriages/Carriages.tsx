import CarriageView from '../CarriageView/CarriageView';
import './carriages.css';

const Carriages = () => {
  return (
    <div className="carriages">
      <header className="carriages__header">
        <div className="carriages__available-carriages">
          <span className="carriages__available-carriages-text">Вагоны</span>
          <ul className="carriages__available-carriages-numbers">
            <li className="carriages__available-carriages-number carriages__available-carriages-number_active">
              07
            </li>
            <li className="carriages__available-carriages-number">09</li>
          </ul>
        </div>
        <div className="carriages__description">
          Нумерация вагонов начинается с головы поезда
        </div>
      </header>

      <div className="carriages__content">
        <div className="carriages__column carriages__column_carriages">
          <span className="carriages__carriage-number">07</span>
          <span className="carriages__carriage-text">вагон</span>
        </div>

        <div className="carriages__column carriages__column_seats">
          <div className="carriages__seats-short-info">
            <span className="carriages__seats-short-info-text">Места</span>
            <span className="carriages__seats-short-info-count">11</span>
          </div>
          <div className="carriages__seats-full-info">
            <span className="carriages__seats-full-info-text">Верхние</span>
            <span className="carriages__seats-full-info-count">3</span>
          </div>
          <div className="carriages__seats-full-info">
            <span className="carriages__seats-full-info-text">Нижние</span>
            <span className="carriages__seats-full-info-count">8</span>
          </div>
        </div>

        <div className="carriages__column carriages__column_price">
          <div className="carriages__price-info-text">Стоимость</div>
          <div className="carriages__price-info-price">
            <span className="carriages__price-info-count">2 920</span>
            <span className="carriages__price-info-currency">₽</span>
          </div>
          <div className="carriages__price-info-price">
            <span className="carriages__price-info-count">3 530</span>
            <span className="carriages__price-info-currency">₽</span>
          </div>
        </div>

        <div className="carriages__column carriages__column_service">
          <div className="carriages__service-info">
            <span className="carriages__service-info-text">Обслуживание</span>
            <span className="carriages__service-info-company">ФПК</span>
          </div>
          <ul className="carriages__service-features">
            {/* TODO: подбирать нужные иконки в зависимости от конкретного сервиса: */}
            <li className="carriages__service-feature carriages__service-feature_condition"></li>
            {/* <li className="carriages__service-feature carriages__service-feature_condition-active"></li> */}

            <li className="carriages__service-feature carriages__service-feature_wifi"></li>
            {/* <li className="carriages__service-feature carriages__service-feature_wifi-active"></li> */}

            {/* <li className="carriages__service-feature carriages__service-feature_tea"></li> */}
            <li className="carriages__service-feature carriages__service-feature_tea-active"></li>

            {/* <li className="carriages__service-feature carriages__service-feature_bed"></li> */}
            <li className="carriages__service-feature carriages__service-feature_bed-active"></li>
          </ul>
        </div>
      </div>

      <div className="carriages__potential-passengers">
        <div className="carriages__potential-passengers-info">
          11 человек выбирают места в этом поезде
        </div>
      </div>

      {/* TODO: реализовать выбор нужного типа вагона: */}
      {/* <CarriageView type={'seat'} /> */}
      {/* <CarriageView type={'platzkart'} /> */}
      <CarriageView type={'compartment'} />
      {/* <CarriageView type={'lux'} /> */}
    </div>
  );
};

export default Carriages;
