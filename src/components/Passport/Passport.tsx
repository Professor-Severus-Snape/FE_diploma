import './passport.css';

const Passport = () => {
  return (
    <div className="passport">
      <div className="passport__column passport__document">
        <div className="passport__document-type">Тип документа</div>
        <div className="passport__document-inner-wrapper">
          <span className="passport__document-item">Паспорт РФ</span>
          <span className="passport__document-arrow"></span>
        </div>
      </div>

      <div className="passport__column passport__series">
        <label htmlFor="passport-series" className="passport__label">
          Серия
        </label>
        <input
          id="passport-series"
          className="passport__input"
          type="text"
          minLength={4}
          maxLength={4}
          placeholder="____"
          required
        />
      </div>

      <div className="passport__column passport__number">
        <label htmlFor="passport-number" className="passport__label">
          Номер
        </label>
        <input
          id="passport-number"
          className="passport__input"
          type="text"
          minLength={6}
          maxLength={6}
          placeholder="______"
          required
        />
      </div>
    </div>
  );
};

export default Passport;
