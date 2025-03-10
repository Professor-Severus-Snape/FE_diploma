import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { setTrains } from '../../redux/trainsSlice';
import { ITrain } from '../../models/models';
import './ticketsView.css';

const TicketsView = () => {
  const timeFilter = 'времени';
  const priceFilter = 'стоимости';
  const durationFilter = 'длительности';

  const [currentfilter, setCurrentFilter] = useState<string>(timeFilter);
  const [isOpenFiltersList, setIsOpenFiltersList] = useState<boolean>(false);

  const dispatch: AppDispatch = useDispatch();
  const { trains } = useSelector((state: RootState) => state.trains); // массив найденных поездов

  // сортировка билетов по времени отправления:
  const handleSetTimeFilter = () => {
    setCurrentFilter(timeFilter); // устанавливаем выбранный фильтр в текущий фильтр
    setIsOpenFiltersList(false); // скрываем список возможных фильтров

    const sortedTrainsByTime = JSON.parse(JSON.stringify(trains)).sort(
      (a: ITrain, b: ITrain) =>
        a.departure.from.datetime - b.departure.from.datetime
    );

    dispatch(setTrains(sortedTrainsByTime)); // изменяем список поездов
  };

  // сортировка билетов по минимальной стоимости билета (в любой конец):
  const handleSetPriceFilter = () => {
    setCurrentFilter(priceFilter); // устанавливаем выбранный фильтр в текущий фильтр
    setIsOpenFiltersList(false); // скрываем список возможных фильтров

    const sortedTrainsByPrice = JSON.parse(JSON.stringify(trains)).sort(
      (a: ITrain, b: ITrain) => {
        // NOTE: цена в 'min_price' не всегда совпадает с ценой самого дешёвого места (баг на бэке!)
        const minPriceA = Math.min(
          a.departure.min_price,
          a.arrival?.min_price || +Infinity
        );

        const minPriceB = Math.min(
          b.departure.min_price,
          b.arrival?.min_price || +Infinity
        );

        return minPriceA - minPriceB;
      }
    );

    dispatch(setTrains(sortedTrainsByPrice)); // изменяем список поездов
  };

  // сортировка билетов по продолжительности в пути:
  const handleSetDurationFilter = () => {
    setCurrentFilter(durationFilter); // устанавливаем выбранный фильтр в текущий фильтр
    setIsOpenFiltersList(false); // скрываем список возможных фильтров

    // FIXME: сортировка по продолжительности почему-то не работает!!!
    const sortedTrainsByDuration = JSON.parse(JSON.stringify(trains)).sort(
      (a: ITrain, b: ITrain) => {
        // Получаем продолжительность в секундах:
        const durationA = a.departure.duration + (a.arrival?.duration || 0);
        const durationB = b.departure.duration + (a.arrival?.duration || 0);
        return durationA - durationB;
      }
    );

    dispatch(setTrains(sortedTrainsByDuration)); // изменяем список поездов
  };

  return (
    <div className="tickets-view">
      <div className="tickets-view__found">
        <span className="tickets-view__found-text">найдено</span>
        <span className="tickets-view__found-number">{trains.length}</span>
      </div>

      <div className="tickets-view__filters">
        <div className="tickets-view__sorting">
          <span className="tickets-view__sorting-text">сортировать по:</span>
          <div className="tickets-view__sorting-filters">
            <span
              className="tickets-view__sorting-active-filter"
              onClick={() => setIsOpenFiltersList(true)} // открываем список возможных фильтров
            >
              {currentfilter}
            </span>

            {isOpenFiltersList && (
              <ul className="tickets-view__sorting-filter-list">
                <li
                  className="tickets-view__sorting-filter-item"
                  onClick={handleSetTimeFilter} // сортируем по времени
                >
                  {timeFilter}
                </li>
                <li
                  className="tickets-view__sorting-filter-item"
                  onClick={handleSetPriceFilter} // сортируем по стоимости
                >
                  {priceFilter}
                </li>
                <li
                  className="tickets-view__sorting-filter-item"
                  onClick={handleSetDurationFilter} // сортируем по длительности
                >
                  {durationFilter}
                </li>
              </ul>
            )}
          </div>
        </div>

        <div className="tickets-view__displaying">
          <span className="tickets-view__displaying-text">показывать по:</span>
          {/* TODO: по клику на фильтр перемещать класс активности */}
          <span className="tickets-view__displaying-filter tickets-view__displaying-filter_active">
            5
          </span>
          <span className="tickets-view__displaying-filter">10</span>
          <span className="tickets-view__displaying-filter">20</span>
        </div>
      </div>
    </div>
  );
};

export default TicketsView;
