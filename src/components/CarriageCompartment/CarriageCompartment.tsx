import { IMyCarriageProps } from '../../models/models';
import CarriageNumber from '../CarriageNumber/CarriageNumber';
import CarriageTotalPrice from '../CarriageTotalPrice/CarriageTotalPrice';
import PotentialPassengers from '../PotentialPassengers/PotentialPassengers';

import carriageCompartment from '../../assets/carriage-compartment-lux.svg';
import './carriageCompartment.css';

const CarriageCompartment = ({ data }: { data: IMyCarriageProps }) => {
  // деструктурируем данные:
  const {
    // isForward,
    currentSeats,
    carriage_number,
    top_price,
    bottom_price,
    have_wifi,
    wiFiPrice,
    is_linens_included,
    linensPrice,
  } = data;

  const priceTooltip = (num: number) => {
    const price = num % 2 ? bottom_price : top_price;
    const wifi = have_wifi ? wiFiPrice : 0;
    const linens = !is_linens_included ? linensPrice : 0;

    const priceWithFeatures = price + wifi + linens;

    return priceWithFeatures.toLocaleString('ru-RU');
  };

  // TODO: по клику на место формировать объект с данными заказа!
  const handleClick = (seatIndex: number) => {
    console.log(`Compartment -> click on seat № ${seatIndex}`); // NOTE: отладка !!!
  };

  return (
    <div className="carriage-compartment">
      <PotentialPassengers />

      <img
        className="carriage-compartment__img"
        src={carriageCompartment}
        alt="compartment"
      />

      <CarriageNumber carriageNumber={carriage_number} />

      <ul className="carriage-compartment__scheme">
        {currentSeats.map((seat) => (
          <li
            key={seat.index}
            className={`carriage-compartment__seat carriage-compartment__seat_${
              seat.index
            }${seat.available ? ' carriage-compartment__seat_available' : ''}`}
            title={priceTooltip(seat.index)}
            onClick={seat.available ? () => handleClick(seat.index) : undefined}
          >
            {seat.index}
          </li>
        ))}
      </ul>

      <CarriageTotalPrice />
    </div>
  );
};

export default CarriageCompartment;
