import carriageSeat from '../../assets/carriage-seat.svg';
import './carriageSeat.css';

const CarriageSeat = () => {
  const seatsNumbers: number[] = []; // места 1-62

  for (let i = 1; i <= 62; i++) {
    seatsNumbers.push(i);
  }

  const CarriageSeatItem = ({ seatNumber }: { seatNumber: number }) => {
    // обработчик события 'click' на элементе с доступным классом:
    const handleClick = () => {
      // TODO: добавить логику!
      console.log('click');
    };

    let seatClassName = `carriage-seat__seat carriage-seat__seat_${seatNumber}`;
    let isAvailable = false;

    // TODO: изменить условие!
    if (seatNumber % 6 === 0 || seatNumber % 7 === 0) {
      seatClassName += ` carriage-seat__seat_available`;
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
    <div className="carriage-seat">
      <img
        className="carriage-seat__img"
        src={carriageSeat}
        alt="seat"
      />
      <ul className="carriage-seat__scheme">
        {seatsNumbers.map((num) => (
          <CarriageSeatItem key={num} seatNumber={num} />
        ))}
      </ul>
    </div>
  );
};

export default CarriageSeat;
