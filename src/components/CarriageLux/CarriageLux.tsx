import carriageLux from '../../assets/carriage-compartment-lux.svg';
import './carriageLux.css';

const CarriageLux = () => {
  return (
    <div className="carriage-lux">
      <img className="carriage-lux__img" src={carriageLux} alt="lux" />
    </div>
  );
};

export default CarriageLux;
