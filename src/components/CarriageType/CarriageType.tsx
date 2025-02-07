import './carriageType.css';

const CarriageType = () => {
  return (
    <div className="carriage-type">
      <h4 className="carriage-type__title">Тип вагона</h4>

      <ul className="carriage-type__list">
        <li className="carriage-type__item">
          <span className="carriage-type__icon carriage-type__icon_seat"></span>
          <span>Сидячий</span>
        </li>

        <li className="carriage-type__item">
          <span className="carriage-type__icon carriage-type__icon_platzkart"></span>
          <span>Плацкарт</span>
        </li>

        <li className="carriage-type__item carriage-type__item_active">
          <span className="carriage-type__icon carriage-type__icon_compartment"></span>
          <span>Купе</span>
        </li>

        <li className="carriage-type__item">
          <span className="carriage-type__icon carriage-type__icon_lux"></span>
          <span>Люкс</span>
        </li>
      </ul>
    </div>
  );
};

export default CarriageType;
