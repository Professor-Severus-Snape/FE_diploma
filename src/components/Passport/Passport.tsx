import './passport.css';

const Passport = () => {
  return (
    <>
      <div className="passport__column">
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

      <div className="passport__column">
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
    </>
  );
};

export default Passport;
