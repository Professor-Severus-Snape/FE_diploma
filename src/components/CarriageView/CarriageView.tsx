import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { ICarriage } from '../../models/models';
import CarriageCompartment from '../CarriageCompartment/CarriageCompartment';
import CarriageLux from '../CarriageLux/CarriageLux';
import CarriagePlatzkart from '../CarriagePlatzkart/CarriagePlatzkart';
import CarriageSeat from '../CarriageSeat/CarriageSeat';

import './carriageView.css';

const CarriageView = ({ isForward }: { isForward: boolean }) => {
  const {
    currentCarriageType,
    currentTypeCarriagesList,
    activeCarriageIndex,
    wiFiPrice,
    linensPrice,
  } = useSelector((state: RootState) =>
    isForward ? state.departure : state.arrival
  );

  // выбранный вагон:
  const currentCarriage: ICarriage =
    currentTypeCarriagesList[activeCarriageIndex];

  // деструктурируем данные:
  const {
    carriage_number,
    price,
    top_price,
    bottom_price,
    side_price,
    have_wifi,
    is_linens_included,
  } = currentCarriage.coach;

  // места в выбранном вагоне:
  const currentSeats: { index: number; available: boolean }[] =
    currentCarriage.seats;

  const data = {
    isForward,
    carriage_number,
    currentSeats,
    price,
    top_price,
    bottom_price,
    side_price,
    have_wifi,
    wiFiPrice,
    is_linens_included,
    linensPrice,
  };

  return (
    <>
      {currentCarriageType && (
        <div className="carriage-view">
          {currentCarriageType === 'fourth' && <CarriageSeat data={data} />}
          {currentCarriageType === 'third' && <CarriagePlatzkart data={data} />}
          {currentCarriageType === 'second' && <CarriageCompartment data={data} />}
          {currentCarriageType === 'first' && <CarriageLux data={data} />}
        </div>
      )}
    </>
  );
};

export default CarriageView;
