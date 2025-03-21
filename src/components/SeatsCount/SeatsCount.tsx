import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  setArrivalActivePerson,
  setArrivalCopyCurrentTypeCarriagesList,
  setArrivalCurrentTypeCarriagesList,
} from '../../redux/arrivalSlice';
import {
  setDepartureActivePerson,
  setDepartureCopyCurrentTypeCarriagesList,
  setDepartureCurrentTypeCarriagesList,
} from '../../redux/departureSlice';
import './seatsCount.css';

const SeatsCount = ({ isForward }: { isForward: boolean }) => {
  const dispatch: AppDispatch = useDispatch();

  const { adults, baby, children, currentCarriageType, orderList } =
    useSelector((state: RootState) =>
      isForward ? state.departure : state.arrival
    );

  const { forwardCarriages, backwardCarriages } = useSelector(
    (state: RootState) => state.carriages
  );

  const maxCountSeats = 4; // максимально возможное количество билетов для заказа
  const totalSeatsCount = adults.count + children.count + baby.count; // количество выбранных мест
  const availableSeats = maxCountSeats - totalSeatsCount; // оставшиеся места для заказа
  // младенцы могут путешествовать только со взрослыми и при наличии свободных мест:
  const babyAvailableSeatsCount = Math.max(
    0,
    Math.min(adults.count - baby.count, availableSeats)
  );

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
    dispatch(
      isForward
        ? setDepartureActivePerson(index)
        : dispatch(setArrivalActivePerson(index))
    );

    // если класс вагона ещё не был выбран, то ничего не делаем:
    if (!currentCarriageType) {
      return;
    }

    // фильтруем список вагонов по типу вагона:
    const matchedCarriagesList = (
      isForward ? forwardCarriages : backwardCarriages
    ).filter((carriage) => carriage.coach.class_type === currentCarriageType);

    let newCopyList = []; // создаем обновленный список без учёта занятых мест
    let newList = []; // создаем обновленный список c учётом занятых мест

    // проверяем, выбраны ли уже 4 места:
    const isMaxSeatsSelected = orderList.length === maxCountSeats;

    // если это вкладка с младенцами (index = 2), то доступны только места взрослых пассажиров:
    if (index === 2) {
      newCopyList = matchedCarriagesList.map((carriage) => ({
        ...carriage,
        seats: carriage.seats.map((seat, idx) => {
          const isAdultSelected = orderList.some(
            (order) =>
              order.coach_id === carriage.coach._id &&
              order.seat_number === idx + 1 &&
              order.is_adult
          );

          const isBabySelected = orderList.some(
            (order) =>
              order.coach_id === carriage.coach._id &&
              order.seat_number === idx + 1 &&
              order.is_baby
          );

          return {
            ...seat,
            available: isAdultSelected && !isBabySelected, // заказан ли билет только на взрослого?
            isActive: isBabySelected, // выбранные места для младенцев
          };
        }),
      }));
    } else {
      newCopyList = matchedCarriagesList.map((carriage) => ({
        ...carriage,
        seats: carriage.seats.map((seat, idx) => {
          const isSelected = orderList.some(
            (order) =>
              order.coach_id === carriage.coach._id &&
              order.seat_number === idx + 1
          );

          return {
            ...seat,
            available: isSelected ? false : seat.available,
            isActive: isSelected, // выбранные места
          };
        }),
      }));
    }

    // если превышено максимальное кол-во пассажиров (4), то остальные места делаем недоступными:
    newList = newCopyList.map((carriage) => ({
      ...carriage,
      seats: carriage.seats.map((seat) => {
        return {
          ...seat,
          available: isMaxSeatsSelected ? false : seat.available,
        };
      }),
    }));

    if (isForward) {
      dispatch(setDepartureCopyCurrentTypeCarriagesList(newCopyList)); // без блокировки мест
      dispatch(setDepartureCurrentTypeCarriagesList(newList)); // c блокировкой мест
      return;
    }

    // билет обратно:
    dispatch(setArrivalCopyCurrentTypeCarriagesList(newCopyList)); // без блокировки мест
    dispatch(setArrivalCurrentTypeCarriagesList(newList)); // c блокировкой мест
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
