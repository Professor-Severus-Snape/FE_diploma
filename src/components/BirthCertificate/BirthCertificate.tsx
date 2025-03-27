import './birthCertificate.css';

const BirthCertificate = () => {
  return (
    <div className="birth-certificate">
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
  );
};

export default BirthCertificate;
