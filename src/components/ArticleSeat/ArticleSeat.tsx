import CarriageType from '../CarriageType/CarriageType';
import SeatsCount from '../SeatsCount/SeatsCount';
import SeatHeader from '../SeatHeader/SeatHeader';
import TrainInfo from '../TrainInfo/TrainInfo';

import './articleSeat.css';

const ArticleSeat = ({ direction }: { direction: string }) => {
  return (
    <article className="seat">
      <h3 className="visually-hidden">Выбор мест туда</h3>
      <SeatHeader direction={direction} />
      <TrainInfo direction={direction} />
      <SeatsCount />
      <CarriageType />
      {/* TODO: добавить компонент выбора мест на картинке */}
    </article>
  );
};

export default ArticleSeat;
