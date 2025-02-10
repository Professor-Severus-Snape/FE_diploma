import CarriageView from '../CarriageView/CarriageView';
import './carriage.css';

const Carriage = () => {
  return (
    <div className="carriage">
      <div className="carriage__content">
        <div className="carriage__column carriage__column_carriage">
          <span className="carriage__carriage-number">07</span>
          <span className="carriage__carriage-text">вагон</span>
        </div>

        <div className="carriage__column carriage__column_seats">
          <div className="carriage__seats-short-info">
            <span className="carriage__seats-short-info-text">Места</span>
            <span className="carriage__seats-short-info-count">11</span>
          </div>
          <div className="carriage__seats-full-info">
            <span className="carriage__seats-full-info-text">Верхние</span>
            <span className="carriage__seats-full-info-count">3</span>
          </div>
          <div className="carriage__seats-full-info">
            <span className="carriage__seats-full-info-text">Нижние</span>
            <span className="carriage__seats-full-info-count">8</span>
          </div>
        </div>

        <div className="carriage__column carriage__column_price">
          <div className="carriage__price-info-text">Стоимость</div>
          <div className="carriage__price-info-price">
            <span className="carriage__price-info-count">2 920</span>
            <span className="carriage__price-info-currency">₽</span>
          </div>
          <div className="carriage__price-info-price">
            <span className="carriage__price-info-count">3 530</span>
            <span className="carriage__price-info-currency">₽</span>
          </div>
        </div>

        <div className="carriage__column carriage__column_service">
          <div className="carriage__service-info">
            <span className="carriage__service-info-text">Обслуживание</span>
            <span className="carriage__service-info-company">ФПК</span>
          </div>
          <ul className="carriage__service-features">
            {/* TODO: подбирать нужные иконки в зависимости от конкретного сервиса: */}
            <li className="carriage__service-feature carriage__service-feature_condition"></li>
            {/* <li className="carriage__service-feature carriage__service-feature_condition-active"></li> */}

            <li className="carriage__service-feature carriage__service-feature_wifi"></li>
            {/* <li className="carriage__service-feature carriage__service-feature_wifi-active"></li> */}

            {/* <li className="carriage__service-feature carriage__service-feature_tea"></li> */}
            <li className="carriage__service-feature carriage__service-feature_tea-active"></li>

            {/* <li className="carriage__service-feature carriage__service-feature_bed"></li> */}
            <li className="carriage__service-feature carriage__service-feature_bed-active"></li>
          </ul>
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

export default Carriage;
