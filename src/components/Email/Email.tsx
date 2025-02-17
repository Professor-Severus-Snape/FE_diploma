import './email.css';

const Email = () => {
  return (
    <div className="email">
      <label htmlFor="email" className="email__label">
        E-mail
      </label>
      <input
        id="email"
        className="email__input"
        type="email"
        placeholder="inbox@gmail.ru"
      />
    </div>
  );
};

export default Email;
