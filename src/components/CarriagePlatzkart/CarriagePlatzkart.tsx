import { IMyCarriageProps } from '../../models/models';
import CarriageNumber from '../CarriageNumber/CarriageNumber';
import CarriageTotalPrice from '../CarriageTotalPrice/CarriageTotalPrice';
import PotentialPassengers from '../PotentialPassengers/PotentialPassengers';

import carriagePlatzkart from '../../assets/carriage-platzkart.svg';
import './carriagePlatzkart.css';

const CarriagePlatzkart = ({ data }: { data: IMyCarriageProps }) => {
  // деструктурируем данные:
  const {
    // isForward,
    currentSeats,
    carriage_number,
    top_price,
    bottom_price,
    side_price,
    have_wifi,
    wiFiPrice,
    is_linens_included,
    linensPrice,
  } = data;

  const priceTooltip = (num: number) => {
    let price = 0;

    if (num > 32) {
      price = side_price;
    } else {
      price = num % 2 ? bottom_price : top_price;
    }

    const wifi = have_wifi ? wiFiPrice : 0;
    const linens = !is_linens_included ? linensPrice : 0;
    const priceWithFeatures = price + wifi + linens;

    return priceWithFeatures.toLocaleString('ru-RU');
  };

  // TODO: по клику на место формировать объект с данными заказа!
  const handleClick = (seatIndex: number) => {
    console.log(`Platzkart -> click on seat № ${seatIndex}`); // NOTE: отладка !!!
  };

  return (
    <div className="carriage-platzkart">
      <PotentialPassengers />

      <img
        className="carriage-platzkart__img"
        src={carriagePlatzkart}
        alt="platzkart"
      />

      <CarriageNumber carriageNumber={carriage_number} />

      <ul className="carriage-platzkart__scheme">
        {currentSeats.map((seat) => (
          <li
            key={seat.index}
            className={`carriage-platzkart__seat carriage-platzkart__seat_${
              seat.index
            }${seat.available ? ' carriage-platzkart__seat_available' : ''}`}
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

export default CarriagePlatzkart;
