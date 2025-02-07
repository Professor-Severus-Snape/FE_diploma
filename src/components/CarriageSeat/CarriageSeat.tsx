import carriageSeat from '../../assets/carriage-seat.svg';
import './carriageSeat.css';

const CarriageSeat = () => {
  return (
    <div className="carriage-seat">
      <img className="carriage-seat__img" src={carriageSeat} alt="seat" />
    </div>
  );
};

export default CarriageSeat;
