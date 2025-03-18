import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import CarriageView from '../CarriageView/CarriageView';
import './carriage.css';

const Carriage = ({ isForward }: { isForward: boolean }) => {
  const { activeCarriageIndex, currentCarriageType, currentTypeCarriagesList } =
    useSelector((state: RootState) =>
      isForward ? state.departure : state.arrival
    );

  const currentCarriage = currentTypeCarriagesList[activeCarriageIndex]; // выбранный вагон

  // деструктурируем данные:
  const {
    carriage_number,
    top,
    bottom,
    side,
    price,
    top_price,
    bottom_price,
    side_price,
    available_seats,
  } = currentCarriage.coach;

  const currentCarriageNumber = carriage_number.toString().padStart(2, '0');

  // создаём массив с данными для оптимизации кода:
  const seatTypes = [
    {
      classTypes: ['first'],
      label: 'Люкс',
      count: available_seats,
      price: price,
    },
    {
      classTypes: ['second', 'third'],
      label: 'Верхние',
      count: top,
      price: top_price,
    },
    {
      classTypes: ['second', 'third'],
      label: 'Нижние',
      count: bottom,
      price: bottom_price,
    },
    { classTypes: ['third'], label: 'Боковые', count: side, price: side_price },
    {
      classTypes: ['fourth'],
      label: 'Сидячие',
      count: available_seats,
      price: Math.min(top_price || Infinity, bottom_price || Infinity),
    },
  ];

  const renderSeatsInfo = (
    classTypes: string[],
    label: string,
    count: number,
    index: number
  ) => {
    if (
      count === 0 ||
      currentCarriageType === 'first' ||
      currentCarriageType === 'fourth' ||
      !classTypes.includes(currentCarriageType)
    ) {
      return null;
    }
    return (
      <div key={index} className="carriage__seats-full-info">
        <span className="carriage__seats-full-info-text">{label}</span>
        <span className="carriage__seats-full-info-count">{count}</span>
      </div>
    );
  };

  const renderPriceInfo = (
    classTypes: string[],
    price: number,
    index: number
  ) => {
    if (price === 0 || !classTypes.includes(currentCarriageType)) {
      return null;
    }

    return (
      <div key={index} className="carriage__price-info-price">
        <span className="carriage__price-info-count">
          {price.toLocaleString('ru-RU')}
        </span>
        <span className="carriage__price-info-currency">₽</span>
      </div>
    );
  };

  return (
    <div className="carriage">
      <div className="carriage__content">
        <div className="carriage__column carriage__column_carriage">
          <span className="carriage__carriage-number">
            {currentCarriageNumber}
          </span>
          <span className="carriage__carriage-text">вагон</span>
        </div>

        <div className="carriage__column carriage__column_seats">
          <div className="carriage__seats-short-info">
            <span className="carriage__seats-short-info-text">Места</span>
            <span className="carriage__seats-short-info-count">
              {available_seats}
            </span>
          </div>

          {/* отрисовываем типы мест - только для купе и платцкарта: */}
          {seatTypes.map(({ classTypes, label, count }, index) =>
            renderSeatsInfo(classTypes, label, count, index)
          )}
        </div>

        <div className="carriage__column carriage__column_price">
          <div className="carriage__price-info-text">Стоимость</div>

          {/* отрисовываем стоимость каждого типа мест: */}
          {seatTypes.map(({ classTypes, price }, index) =>
            renderPriceInfo(classTypes, price, index)
          )}
        </div>

        <div className="carriage__column carriage__column_service">
          <div className="carriage__service-info">
            <span className="carriage__service-info-text">Обслуживание</span>
            <span className="carriage__service-info-company">ФПК</span>
          </div>

          <ul className="carriage__service-features">
            {/* TODO: подбирать нужные иконки в зависимости от конкретного сервиса: */}
            <li className="carriage__service-feature air-condition"></li>
            {/* <li className="carriage__service-feature air-condition air-condition_active"></li> */}
            {/* <li className="carriage__service-feature air-condition air-condition_included"></li> */}

            {/* <li className="carriage__service-feature wifi"></li> */}
            <li className="carriage__service-feature wifi wifi_active"></li>
            {/* <li className="carriage__service-feature wifi wifi_included"></li> */}

            {/* <li className="carriage__service-feature tea"></li> */}
            {/* <li className="carriage__service-feature tea tea_active"></li> */}
            <li className="carriage__service-feature tea tea_included"></li>

            {/* <li className="carriage__service-feature bed-sheets"></li> */}
            {/* <li className="carriage__service-feature bed-sheets bed-sheets_active"></li> */}
            <li className="carriage__service-feature bed-sheets bed-sheets_included"></li>
          </ul>
        </div>
      </div>

      {/* TODO: реализовать выбор нужного типа вагона: */}
      {/* <CarriageView type={'seat'} /> */}
      {/* <CarriageView type={'platzkart'} /> */}
      <CarriageView type={'compartment'} />
      {/* <CarriageView type={'lux'} /> */}
    </div>
  );
};

export default Carriage;
