import Carriage from '../Carriage/Carriage';
import './carriages.css';

const Carriages = () => {
  return (
    <div className="carriages">
      <header className="carriages__header">
        <div className="carriages__available-carriages">
          <span className="carriages__available-carriages-text">Вагоны</span>
          <ul className="carriages__available-carriages-numbers">
            <li className="carriages__available-carriages-number carriages__available-carriages-number_active">
              07
            </li>
            <li className="carriages__available-carriages-number">09</li>
          </ul>
        </div>
        <div className="carriages__description">
          Нумерация вагонов начинается с головы поезда
        </div>
      </header>

      <Carriage />
      <Carriage />
    </div>
  );
};

export default Carriages;
