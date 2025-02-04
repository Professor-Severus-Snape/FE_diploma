import './seatsCount.css';

const SeatsCount = () => {
  return (
    <div className="seats-count">
      <h4 className="seats-count__title">Количество билетов</h4>
      <div className="seats-count__content">
        <div className="seats-count__column seats-count__column_active">
          <div className="seats-count__details">
            <span className="seats-count__type">Взрослых</span>
            <span className="seats-count__separator">—</span>
            <span className="seats-count__number">2</span>
          </div>
          <p className="seats-count__text">Можно добавить еще 3 пассажиров</p>
        </div>

        <div className="seats-count__column">
          <div className="seats-count__details">
            <span className="seats-count__type">Детских</span>
            <span className="seats-count__separator">—</span>
            <span className="seats-count__number">1</span>
          </div>
          <p className="seats-count__text">
            Можно добавить еще 3 детей до 10 лет. Свое место в вагоне, как у
            взрослых, но дешевле в среднем на 50-65%
          </p>
        </div>

        <div className="seats-count__column">
          <div className="seats-count__details">
            <span className="seats-count__type">Детских «без места»</span>
            <span className="seats-count__separator">—</span>
            <span className="seats-count__number">0</span>
          </div>
          <p className="seats-count__text"></p>
        </div>
      </div>
    </div>
  );
};

export default SeatsCount;
