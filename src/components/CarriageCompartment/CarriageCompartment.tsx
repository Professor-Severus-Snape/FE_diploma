import carriageCompartment from '../../assets/carriage-compartment-lux.svg';
import './carriageCompartment.css';

const CarriageCompartment = () => {
  return (
    <div className="carriage-compartment">
      <img
        className="carriage-compartment__img"
        src={carriageCompartment}
        alt="compartment"
      />
    </div>
  );
};

export default CarriageCompartment;
