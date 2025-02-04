import arrowLeft from '../../assets/arrow-left.svg';
import arrowRight from '../../assets/arrow-right.svg';
import time from '../../assets/time.svg';
import trainActive from '../../assets/train-active.svg';

import './trainInfo.css';

const TrainInfo = ({ direction }: { direction: string }) => {
  return (
    <div className="train-info">
      <div className="train-info__wrapper-left">
        <img className="train-info__train-img" src={trainActive} alt="поезд" />
        <div className="train-info__content">
          <div className="train-info__train-number">116С</div>

          <div className="train-info__train-town-departure">
            <span>Адлер</span>
            <span>→</span>
          </div>
          <div className="train-info__train-town-from">
            <span>Москва</span>
            <span>→</span>
          </div>
          <div className="train-info__train-town-to">Санкт-Петербург</div>
        </div>
      </div>

      <div className="train-info__wrapper-middle">
        <div className="train-info__forward-info">
          <div className="train-info__time">00:10</div>
          <div className="train-info__town">Москва</div>
          <div className="train-info__terminal">Курский вокзал</div>
        </div>

        <img
          className="train-info__duration-icon"
          src={direction === 'forward' ? arrowRight : arrowLeft}
          alt={direction === 'forward' ? 'туда' : 'обратно'}
        />

        <div className="train-info__backward-info">
          <div className="train-info__time">09:52</div>
          <div className="train-info__town">Санкт-Петербург</div>
          <div className="train-info__terminal">Ладожский вокзал</div>
        </div>
      </div>

      <div className="train-info__wrapper-right">
        <img src={time} alt="время в пути" className="train-info__time-icon" />
        <div className="train-info__time-content">
          <div className="train-info__hours">
            <span className="train-info__number">9</span>
            <span className="train-info__text">часов</span>
          </div>
          <div className="train-info__minutes">
            <span className="train-info__number">42</span>
            <span className="train-info__text">минуты</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainInfo;
