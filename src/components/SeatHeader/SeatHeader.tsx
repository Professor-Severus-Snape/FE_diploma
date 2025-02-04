import backwardWhite from '../../assets/backward-white.svg';
import forwardWhite from '../../assets/forward-white.svg';
import './seatHeader.css';

const SeatHeader = ({ direction }: { direction: string }) => {
  return (
    <header className={`seat-header${direction === 'forward' ? '' : ' seat-header_backward'}`}>
      <img
        src={direction === 'forward' ? forwardWhite : backwardWhite}
        alt={direction === 'forward' ? 'туда' : 'обратно'}
        className="seat-header__icon"
      />
      {/* TODO: реализовать навигацию на 1 шаг назад!!! */}
      <a href="#0" className="seat-header__return-btn">
        Выбрать другой поезд
      </a>
    </header>
  );
};

export default SeatHeader;
