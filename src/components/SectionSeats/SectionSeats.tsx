import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ArticleSeat from '../ArticleSeat/ArticleSeat';
import NextPage from '../NextPage/NextPage';
import './sectionSeats.css';

const SectionSeats = () => {
  const { trains, currentTrainIndex } = useSelector(
    (state: RootState) => state.trains
  );

  const { orderList: departureOrderList } = useSelector(
    (state: RootState) => state.departure
  );

  const {
    route_direction_id: arrivalRouteDirectionId,
    orderList: arrivalOrderList,
  } = useSelector((state: RootState) => state.arrival);

  const ticket = trains[currentTrainIndex];
  const hasArrivalProperty: boolean = ticket.arrival !== undefined;

  // можно ввести пассажиров, только если есть заказы и их количество совпадает туда и обратно:
  const isNextAllowed = arrivalRouteDirectionId
    ? departureOrderList.length > 0 &&
      departureOrderList.length === arrivalOrderList.length
    : departureOrderList.length > 0;

  return (
    <section className="seats">
      <h2 className="seats__title">Выбор мест</h2>
      <ArticleSeat isForward />
      {hasArrivalProperty && <ArticleSeat isForward={false} />}
      <NextPage route="/passengers" text="далее" isActive={isNextAllowed} />
    </section>
  );
};

export default SectionSeats;
