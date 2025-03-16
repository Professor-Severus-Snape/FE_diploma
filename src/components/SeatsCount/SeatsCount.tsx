import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setArrivalActivePerson } from '../../redux/arrivalSlice';
import { setDepartureActivePerson } from '../../redux/departureSlice';
import './seatsCount.css';

const SeatsCount = ({ isForward }: { isForward: boolean }) => {
  const dispatch: AppDispatch = useDispatch();

  const { adults, baby, children } = useSelector((state: RootState) =>
    isForward ? state.departure : state.arrival
  );

  const maxCountSeats = 4; // максимально возможное количество билетов для заказа
  const totalSeatsCount = adults.count + children.count + baby.count; // количество выбранных мест
  const availableSeats = maxCountSeats - totalSeatsCount; // оставшиеся места для заказа
  const babyAvailableSeatsCount = Math.min(adults.count, availableSeats); // младенцы только со взр!

  const seatsData = [
    {
      type: 'Взрослых',
      number: adults.count,
      text: availableSeats
        ? `Можно добавить еще ${availableSeats} ${
            availableSeats === 1 ? 'пассажира' : 'пассажиров'
          }`
        : 'Больше добавить пассажиров не получится',
      isActive: adults.isActive,
    },
    {
      type: 'Детских',
      number: children.count,
      text: availableSeats
        ? `Можно добавить еще ${availableSeats} ${
            availableSeats === 1 ? 'пассажира' : 'пассажиров'
          }`
        : 'Больше добавить пассажиров не получится',
      isActive: children.isActive,
    },
    {
      type: 'Детских «без места»',
      number: baby.count,
      text: availableSeats
        ? babyAvailableSeatsCount
          ? `Можно добавить еще ${babyAvailableSeatsCount} ${
              babyAvailableSeatsCount === 1 ? 'пассажира' : 'пассажиров'
            }`
          : 'Младенцы не могут путешествовать без взрослых'
        : 'Больше добавить пассажиров не получится',
      isActive: baby.isActive,
    },
  ];

  // клик по НЕ активной вкладке:
  const handleChangeActiveItem = (index: number) => {
    // билет туда:
    if (isForward) {
      dispatch(setDepartureActivePerson(index));
      // TODO: по клику на вкладку менять отображение мест в вагоне, если вагон отображается...
      return;
    }

    // билет обратно:
    dispatch(setArrivalActivePerson(index));
    // TODO: по клику на вкладку менять отображение мест в вагоне, если вагон отображается...
  };

  return (
    <div className="seats-count">
      <h4 className="seats-count__title">Количество билетов</h4>
      <ul className="seats-count__list">
        {seatsData.map((seat, index) => (
          <li
            key={index}
            className={`seats-count__item${
              seat.isActive ? ' seats-count__item_active' : ''
            }`}
            onClick={
              seat.isActive ? undefined : () => handleChangeActiveItem(index)
            }
          >
            <div className="seats-count__details">
              <span className="seats-count__type">{seat.type}</span>
              <span className="seats-count__separator">—</span>
              <span className="seats-count__number">{seat.number}</span>
            </div>
            {seat.text && <p className="seats-count__text">{seat.text}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SeatsCount;
