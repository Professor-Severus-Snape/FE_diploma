import { useDispatch, useSelector } from 'react-redux';
import { setDepartureCurrentCarriageType } from '../../redux/departureSlice';
import { setArrivalCurrentCarriageType } from '../../redux/arrivalSlice';
import { AppDispatch, RootState } from '../../redux/store';
import './carriageType.css';

const CarriageType = ({ isForward }: { isForward: boolean }) => {
  const dispatch: AppDispatch = useDispatch();

  const { currentCarriageType } = useSelector((state: RootState) =>
    isForward ? state.departure : state.arrival
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
      dispatch(setDepartureCurrentCarriageType(carriageType));
      // TODO: по клику на вкладку менять тип вагона, если вагон такого типа есть...
      return;
    }

    // билет обратно:
    dispatch(setArrivalCurrentCarriageType(carriageType));
    // TODO: по клику на вкладку менять тип вагона, если вагон такого типа есть...
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
