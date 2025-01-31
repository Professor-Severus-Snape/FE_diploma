import './pagination.css';

const Pagination = () => {
  return (
    <div className="pagination">
      <ul className="pagination__list">
        <li className="pagination__previous pagination__previous-active"></li>
        <li className="pagination__item pagination__item_active">1</li>
        <li className="pagination__item">2</li>
        <li className="pagination__item">3</li>
        <li className="pagination__next pagination__next-active"></li>
      </ul>
    </div>
  );
};

export default Pagination;
