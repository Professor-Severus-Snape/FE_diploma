import { Link } from 'react-router-dom';
import backwardWhite from '../../assets/backward-white.svg';
import forwardWhite from '../../assets/forward-white.svg';
import './seatHeader.css';

const SeatHeader = ({ isForward }: { isForward: boolean }) => {
  return (
    <header
      className={`seat-header${isForward ? '' : ' seat-header_backward'}`}
    >
      <img
        src={isForward ? forwardWhite : backwardWhite}
        alt={isForward ? 'туда' : 'обратно'}
        className="seat-header__icon"
      />

      <Link className="seat-header__return-btn" to="/trains">
        Выбрать другой поезд
      </Link>
    </header>
  );
};

export default SeatHeader;
