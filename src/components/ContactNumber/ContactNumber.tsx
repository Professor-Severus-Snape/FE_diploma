import './contactNumber.css';

const ContactNumber = () => {
  return (
    <div className="contact-number">
      <label htmlFor="contact-number" className="contact-number__label">
        Контактный телефон
      </label>
      <input
        id="contact-number"
        className="contact-number__input"
        // TODO: добавить маску!!!
        type="tel"
        placeholder="8 (999) 123 45 67"
        pattern="8 ([0-9]{3}) ([0-9]{2}) ([0-9]{2})" // NOTE: нужен ли здесь паттерн ???
        required
      />
    </div>
  );
};

export default ContactNumber;
