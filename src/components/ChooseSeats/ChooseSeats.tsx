import { Link } from 'react-router-dom';
import './chooseSeats.css';

const ChooseSeats = () => {
  return (
    <div className="choose-seats">
      <Link className="choose-seats__link" to="/seats">
        Выбрать места
      </Link>
    </div>
  );
};

export default ChooseSeats;
