import SliderTimeRange from '../SliderTimeRange/SliderTimeRange';
import './arrival.css';

const Arrival = () => {
  return (
    <div className="arrival">
      <h4 className="arrival__title">Время прибытия</h4>
      <SliderTimeRange />
    </div>
  );
};

export default Arrival;
