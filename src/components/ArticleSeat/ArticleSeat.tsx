import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

import Carriages from '../Carriages/Carriages';
import CarriageType from '../CarriageType/CarriageType';
import SeatsCount from '../SeatsCount/SeatsCount';
import SeatHeader from '../SeatHeader/SeatHeader';
import TrainInfo from '../TrainInfo/TrainInfo';

import './articleSeat.css';

const ArticleSeat = ({ isForward }: { isForward: boolean }) => {
  const titleText = `Выбор мест ${isForward ? 'туда' : 'обратно'}`;

  const { currentCarriageType } = useSelector((state: RootState) =>
    isForward ? state.departure : state.arrival
  );

  return (
    <article className="seat">
      <h3 className="visually-hidden">{titleText}</h3>
      <SeatHeader isForward={isForward} />
      <TrainInfo isForward={isForward} />
      <SeatsCount isForward={isForward} />
      <CarriageType isForward={isForward} />
      {currentCarriageType && <Carriages isForward={isForward} />}
    </article>
  );
};

export default ArticleSeat;
