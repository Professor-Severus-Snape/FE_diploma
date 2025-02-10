import CarriageNumber from '../CarriageNumber/CarriageNumber';
import CarriageTotalPrice from '../CarriageTotalPrice/CarriageTotalPrice';
import PotentialPassengers from '../PotentialPassengers/PotentialPassengers';

import carriageCompartment from '../../assets/carriage-compartment-lux.svg';
import './carriageCompartment.css';

const CarriageCompartment = () => {
  const compartmentSeatsNumbers: number[] = []; // места 1-32

  for (let i = 1; i <= 32; i++) {
    compartmentSeatsNumbers.push(i);
  }

  const CarriageCompartmentSeat = ({ seatNumber }: { seatNumber: number }) => {
    // обработчик события 'click' на элементе с доступным классом:
    const handleClick = () => {
      // TODO: добавить логику!
      console.log('click');
    };

    let seatClassName = `carriage-compartment__seat carriage-compartment__seat_${seatNumber}`;
    let isAvailable = false;

    // TODO: изменить условие!
    if (seatNumber % 3 === 0) {
      seatClassName += ` carriage-compartment__seat_available`;
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
    <div className="carriage-compartment">
      <PotentialPassengers />
      <img
        className="carriage-compartment__img"
        src={carriageCompartment}
        alt="compartment"
      />
      <CarriageNumber />
      <ul className="carriage-compartment__scheme">
        {compartmentSeatsNumbers.map((num) => (
          <CarriageCompartmentSeat key={num} seatNumber={num} />
        ))}
      </ul>
      <CarriageTotalPrice />
    </div>
  );
};

export default CarriageCompartment;
