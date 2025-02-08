import carriageLux from '../../assets/carriage-compartment-lux.svg';
import './carriageLux.css';

const CarriageLux = () => {
  const luxSeatsNumbers: number[] = []; // места 1-16

  for (let i = 1; i <= 16; i++) {
    luxSeatsNumbers.push(i);
  }

  const CarriageLuxSeat = ({ seatNumber }: { seatNumber: number }) => {
    // обработчик события 'click' на элементе с доступным классом:
    const handleClick = () => {
      // TODO: добавить логику!
      console.log('click');
    };

    let seatClassName = `carriage-lux__seat carriage-lux__seat_${seatNumber}`;
    let isAvailable = false;

    // TODO: изменить условие!
    if (seatNumber % 3 === 0) {
      seatClassName += ` carriage-lux__seat_available`;
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
    <div className="carriage-lux">
      <img className="carriage-lux__img" src={carriageLux} alt="lux" />
      <ul className="carriage-lux__scheme">
        {luxSeatsNumbers.map((num) => (
          <CarriageLuxSeat key={num} seatNumber={num} />
        ))}
      </ul>
    </div>
  );
};

export default CarriageLux;
