import GoHome from '../GoHome/GoHome';
import Stars from '../Stars/Stars';
import './sectionOrder.css';

const SectionOrder = () => {
  return (
    <section className="order">
      <h2 className="visually-hidden">Успешный заказ</h2>

      <header className="order__header">
        <span className="order__number">№Заказа 285АА</span>
        <span className="order__price">
          <span className="order__text">сумма</span>
          <span className="order__cash">7 760</span>
          <span className="order__currency">₽</span>
        </span>
      </header>

      <ul className="order__todos">
        <li className="order__todo">
          <span className="order__todo-image order__todo-image_computer"></span>
          <p className="order__todo-text">
            билеты будут отправлены на ваш{' '}
            <span className="order__todo-text_semibold">e-mail</span>
          </p>
        </li>
        <li className="order__todo">
          <span className="order__todo-image order__todo-image_tickets"></span>
          <p className="order__todo-text">
            <span className="order__todo-text_semibold">распечатайте</span> и
            сохраняйте билеты до даты поездки
          </p>
        </li>
        <li className="order__todo">
          <span className="order__todo-image order__todo-image_conductor"></span>
          <p className="order__todo-text">
            <span className="order__todo-text_semibold">предьявите</span>{' '}
            распечатанные билеты при посадке
          </p>
        </li>
      </ul>

      <div className="order__text-content">
        <div className="order__text-wrapper">
          <div className="order__buyer">Ирина Эдуардовна!</div>

          <div className="order__info">
            Ваш заказ успешно оформлен.
            <br />В ближайшее время с вами свяжется наш оператор для
            подтверждения.
          </div>

          <div className="order__acknowledgment">
            Благодарим Вас за оказанное доверие и желаем приятного путешествия!
          </div>
        </div>
      </div>

      <footer className="order__footer">
        <div className="order__evaluation">
          <div className="order__evaluation-text">Оценить сервис</div>
          <Stars />
        </div>

        <GoHome />
      </footer>
    </section>
  );
};

export default SectionOrder;
