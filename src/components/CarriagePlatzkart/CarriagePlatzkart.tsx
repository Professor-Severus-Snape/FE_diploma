import carriagePlatzkart from '../../assets/carriage-platzkart.svg';
import './carriagePlatzkart.css';

const CarriagePlatzkart = () => {
  return (
    <div className="carriage-platzkart">
      <img
        className="carriage-platzkart__img"
        src={carriagePlatzkart}
        alt="platzkart"
      />
    </div>
  );
};

export default CarriagePlatzkart;
