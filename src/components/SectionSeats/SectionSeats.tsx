import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ArticleSeat from '../ArticleSeat/ArticleSeat';
import NextPage from '../NextPage/NextPage';
import './sectionSeats.css';

const SectionSeats = () => {
  const { trains, currentTrainIndex } = useSelector(
    (state: RootState) => state.trains
  );

  const ticket = trains[currentTrainIndex];
  const hasArrivalProperty: boolean = ticket.arrival !== undefined;

  return (
    <section className="seats">
      <h2 className="seats__title">Выбор мест</h2>
      <ArticleSeat isForward />
      {hasArrivalProperty && <ArticleSeat isForward={false} />}
      <NextPage route="/passengers" text="далее" />
    </section>
  );
};

export default SectionSeats;
