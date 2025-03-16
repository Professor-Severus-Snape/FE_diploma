import Carriages from '../Carriages/Carriages';
import CarriageType from '../CarriageType/CarriageType';
import SeatsCount from '../SeatsCount/SeatsCount';
import SeatHeader from '../SeatHeader/SeatHeader';
import TrainInfo from '../TrainInfo/TrainInfo';

import './articleSeat.css';

const ArticleSeat = ({ isForward }: { isForward: boolean }) => {
  const titleText = `Выбор мест ${isForward ? 'туда' : 'обратно'}`;

  return (
    <article className="seat">
      <h3 className="visually-hidden">{titleText}</h3>
      <SeatHeader isForward={isForward} />
      <TrainInfo isForward={isForward} />
      <SeatsCount isForward={isForward} />
      <CarriageType isForward={isForward} />
      <Carriages />
    </article>
  );
};

export default ArticleSeat;
