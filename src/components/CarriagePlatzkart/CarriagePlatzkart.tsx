import CarriageNumber from '../CarriageNumber/CarriageNumber';
import CarriageTotalPrice from '../CarriageTotalPrice/CarriageTotalPrice';
import PotentialPassengers from '../PotentialPassengers/PotentialPassengers';

import carriagePlatzkart from '../../assets/carriage-platzkart.svg';
import './carriagePlatzkart.css';

const CarriagePlatzkart = () => {
  const platzkartSeatsNumbers: number[] = []; // места 1-48

  for (let i = 1; i <= 48; i++) {
    platzkartSeatsNumbers.push(i);
  }

  const CarriagePlatzkartSeat = ({ seatNumber }: { seatNumber: number }) => {
    // обработчик события 'click' на элементе с доступным классом:
    const handleClick = () => {
      // TODO: добавить логику!
      console.log('click');
    };

    let seatClassName = `carriage-platzkart__seat carriage-platzkart__seat_${seatNumber}`;
    let isAvailable = false;

    // TODO: изменить условие!
    if (seatNumber % 3 === 0) {
      seatClassName += ` carriage-platzkart__seat_available`;
      isAvailable = true;
    }

    return (
      <li
        className={seatClassName}
        onClick={isAvailable ? handleClick : undefined}
      >
        {seatNumber}
      </li>
    );
  };

  return (
    <div className="carriage-platzkart">
      <PotentialPassengers />
      <img
        className="carriage-platzkart__img"
        src={carriagePlatzkart}
        alt="platzkart"
      />
      <CarriageNumber />
      <ul className="carriage-platzkart__scheme">
        {platzkartSeatsNumbers.map((num) => (
          <CarriagePlatzkartSeat key={num} seatNumber={num} />
        ))}
      </ul>
      <CarriageTotalPrice />
    </div>
  );
};

export default CarriagePlatzkart;
