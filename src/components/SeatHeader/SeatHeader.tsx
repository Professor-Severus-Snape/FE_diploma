import { Link } from 'react-router-dom';
import backwardWhite from '../../assets/backward-white.svg';
import forwardWhite from '../../assets/forward-white.svg';
import './seatHeader.css';

const SeatHeader = ({ direction }: { direction: string }) => {
  return (
    <header
      className={`seat-header${
        direction === 'forward' ? '' : ' seat-header_backward'
      }`}
    >
      <img
        src={direction === 'forward' ? forwardWhite : backwardWhite}
        alt={direction === 'forward' ? 'туда' : 'обратно'}
        className="seat-header__icon"
      />

      <Link className="seat-header__return-btn" to="/trains">
        Выбрать другой поезд
      </Link>
    </header>
  );
};

export default SeatHeader;
