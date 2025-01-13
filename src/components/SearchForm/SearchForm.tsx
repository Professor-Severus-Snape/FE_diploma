import './searchForm.css';

const SearchForm = () => {
  return (
    <form className="search-form">
      <div className="search-form__container">
        <fieldset className="search-form__fieldset">
          <label htmlFor="destination" className="search-form__label">
            Направление
          </label>

          <div className="search-form__destination">
            <div className="search-form__input-destination-container">
              <input
                id="destination"
                className="search-form__input-destination search-form__input-destination_from"
                placeholder="Откуда"
              />
              <span className="search-form__destination-icon"></span>
            </div>

            <span className="search-form__swap"></span>

            <div className="search-form__input-destination-container">
              <input
                className="search-form__input-destination search-form__input-destination_to"
                placeholder="Куда"
              />
              <span className="search-form__destination-icon"></span>
            </div>
          </div>
        </fieldset>

        <fieldset className="search-form__fieldset">
          <label htmlFor="date" className="search-form__label">
            Дата
          </label>

          <div className="search-form__date">
            <div className="search-form__input-date-container">
              <input
                id="date"
                className="search-form__input-date search-form__input-date_from"
                placeholder="ДД/ММ/ГГ"
              />
              <span className="search-form__date-icon"></span>
            </div>

            <div className="search-form__input-date-container">
              <input
                className="search-form__input-date search-form__input-date_to"
                placeholder="ДД/ММ/ГГ"
              />
              <span className="search-form__date-icon"></span>
            </div>
          </div>
        </fieldset>
      </div>

      <fieldset className="search-form__fieldset">
        <button type="submit" className="search-form__btn">
          найти билеты
        </button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
