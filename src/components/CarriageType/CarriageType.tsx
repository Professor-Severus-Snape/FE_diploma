import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  setArrivalCurrentCarriageType,
  setArrivalCurrentTypeCarriagesList,
  setArrivalActiveCarriageIndex,
} from '../../redux/arrivalSlice';
import {
  setDepartureCurrentCarriageType,
  setDepartureCurrentTypeCarriagesList,
  setDepartureActiveCarriageIndex,
} from '../../redux/departureSlice';
import './carriageType.css';

const CarriageType = ({ isForward }: { isForward: boolean }) => {
  const dispatch: AppDispatch = useDispatch();

  const { currentCarriageType } = useSelector((state: RootState) =>
    isForward ? state.departure : state.arrival
  );

  const { forwardCarriages, backwardCarriages } = useSelector(
    (state: RootState) => state.carriages
  );

  const carriageTypes = [
    { name: 'seat', text: 'Сидячий', type: 'fourth' },
    { name: 'platzkart', text: 'Плацкарт', type: 'third' },
    { name: 'compartment', text: 'Купе', type: 'second' },
    { name: 'lux', text: 'Люкс', type: 'first' },
  ];

  // клик по НЕ активной вкладке:
  const handleChangeActiveItem = (index: number) => {
    const carriageType = carriageTypes[index].type;

    // билет туда:
    if (isForward) {
      const matchedCarriagesList = forwardCarriages.filter(
        (carriage) => carriage.coach.class_type === carriageType
      );

      dispatch(setDepartureCurrentCarriageType(carriageType)); // сохраняем в store класс вагона
      dispatch(setDepartureCurrentTypeCarriagesList(matchedCarriagesList)); // сохраняем вагоны
      dispatch(setDepartureActiveCarriageIndex(0)); // делаем активным первый элемент списка
      return;
    }

    // билет обратно:
    const matchedCarriagesList = backwardCarriages.filter(
      (carriage) => carriage.coach.class_type === carriageType
    );

    dispatch(setArrivalCurrentCarriageType(carriageType)); // сохраняем в store класс вагона
    dispatch(setArrivalCurrentTypeCarriagesList(matchedCarriagesList)); // сохраняем вагоны
    dispatch(setArrivalActiveCarriageIndex(0)); // делаем активным первый элемент списка
  };

  return (
    <div className="carriage-type">
      <h4 className="carriage-type__title">Тип вагона</h4>

      <ul className="carriage-type__list">
        {carriageTypes.map((carriage, index) => (
          <li
            key={index}
            className={`carriage-type__item${
              currentCarriageType === carriage.type
                ? ' carriage-type__item_active'
                : ''
            }`}
            onClick={
              currentCarriageType === carriage.type
                ? undefined
                : () => handleChangeActiveItem(index)
            }
          >
            <span
              className={`carriage-type__icon carriage-type__icon_${carriage.name}`}
            ></span>
            <span>{carriage.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarriageType;
