import './articleDate.css';

const ArticleDate = () => {
  return (
    <article className="date">
      <h3 className="visually-hidden">Настройка даты</h3>
      
      <label htmlFor="date-from" className="date__label">Дата поездки</label>
      <div className="date__input-container">
        <input
          id="date-from"
          className="date__input date__input_from"
          placeholder="ДД/ММ/ГГ"
        />
        <span className="date__icon"></span>
      </div>

      <label htmlFor="date-to" className="date__label">Дата возвращения</label>
      <div className="date__input-container">
        <input
          id="date-to"
          className="date__input date__input_to"
          placeholder="ДД/ММ/ГГ"
        />
        <span className="date__icon"></span>
      </div>
    </article>
  );
};

export default ArticleDate;
