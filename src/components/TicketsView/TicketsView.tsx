import './ticketsView.css';

const TicketsView = () => {
  return (
    <div className="tickets-view">
      <div className="tickets-view__found">
        <span className="tickets-view__found-text">найдено</span>
        <span className="tickets-view__found-number">20</span>
      </div>

      {/* TODO: реализовать работу фильтров */}
      <div className="tickets-view__filters">
        <div className="tickets-view__sorting">
          <span className="tickets-view__sorting-text">сортировать по:</span>
          <div className="tickets-view__sorting-filters">
            {/* TODO: по клику на активный фильтр показывать <ul> */}
            <span className="tickets-view__sorting-active-filter">времени</span>
            <ul className="tickets-view__sorting-filter-list tickets-view__sorting-filter-list_hidden">
              {/* TODO: по клику на <li> менять значение активного фильтра и скрывать <ul> */}
              <li className="tickets-view__sorting-filter-item">времени</li>
              <li className="tickets-view__sorting-filter-item">стоимости</li>
              <li className="tickets-view__sorting-filter-item">длительности</li>
            </ul>
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
