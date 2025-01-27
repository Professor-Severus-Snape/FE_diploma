import SliderTimeRange from '../SliderTimeRange/SliderTimeRange';
import './departure.css';

const Departure = () => {
  return (
    <div className="departure">
      <h4 className="departure__title">Время отбытия</h4>
      <SliderTimeRange />
    </div>
  );
};

export default Departure;
