import './fullName.css';

const FullName = () => {
  return (
    <div className="full-name">
      {/* 1. Фамилия: */}
      <div className="full-name__column">
        <label htmlFor="last-name" className="full-name__label">
          Фамилия
        </label>
        <input id="last-name" type="text" className="full-name__input" />
      </div>

      {/* 2. Имя: */}
      <div className="full-name__column">
        <label htmlFor="first-name" className="full-name__label">
          Имя
        </label>
        <input id="first-name" type="text" className="full-name__input" />
      </div>

      {/* 3. Отчество: */}
      <div className="full-name__column">
        <label htmlFor="middle-name" className="full-name__label">
          Отчество
        </label>
        <input id="middle-name" type="text" className="full-name__input" />
      </div>
    </div>
  );
};

export default FullName;
