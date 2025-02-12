import './birthCertificate.css';

const BirthCertificate = () => {
  return (
    <div className="birth-certificate">
      <div className="birth-certificate__column birth-certificate__document">
        <div className="birth-certificate__document-type">Тип документа</div>
        <div className="birth-certificate__document-inner-wrapper">
          <span className="birth-certificate__document-item">
            Свидетельство о рождении
          </span>
          <span className="birth-certificate__document-arrow"></span>
        </div>
      </div>

      <div className="birth-certificate__column birth-certificate__number">
        <label
          htmlFor="birth-certificate-number"
          className="birth-certificate__label"
        >
          Номер
        </label>
        <input
          id="birth-certificate-number"
          className="birth-certificate__input"
          type="text"
          minLength={12}
          maxLength={12}
          placeholder="____________"
          required
        />
      </div>
    </div>
  );
};

export default BirthCertificate;
