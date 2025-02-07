import CarriageCompartment from '../CarriageCompartment/CarriageCompartment';
import CarriageLux from '../CarriageLux/CarriageLux';
import CarriagePlatzkart from '../CarriagePlatzkart/CarriagePlatzkart';
import CarriageSeat from '../CarriageSeat/CarriageSeat';

import './carriageView.css';

const CarriageView = ({ type }: { type: string }) => {
  return (
    <div className="carriage-view">
      {type === 'seat' && <CarriageSeat />}
      {type === 'platzkart' && <CarriagePlatzkart />}
      {type === 'compartment' && <CarriageCompartment />}
      {type === 'lux' && <CarriageLux />}
    </div>
  );
};

export default CarriageView;
