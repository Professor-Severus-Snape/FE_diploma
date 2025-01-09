import user1 from '../../assets/user-1.png';
import user2 from '../../assets/user-2.png';
import './sectionFeedback.css';

const SectionFeedback = () => {
  return (
    <section id="feedback" className="feedback">
      <h2 className="feedback__title">отзывы</h2>
      <ul className="feedback__list">
        <li className="feedback__item">
          <img src={user1} alt="аватар" className="feedback__avatar" />
          <div className="feedback__content">
            <h3 className="feedback__user">Екатерина Вальнова</h3>
            <q className="feedback__text">
              Доброжелательные подсказки на всех этапах помогут правильно
              заполнить поля и без затруднений купить авиа или ж/д билет, даже
              если вы заказываете онлайн билет впервые.
            </q>
          </div>
        </li>

        <li className="feedback__item">
          <img src={user2} alt="аватар" className="feedback__avatar" />
          <div className="feedback__content">
            <h3 className="feedback__user">Евгений Стрыкало</h3>
            <q className="feedback__text">
              СМС-сопровождение до посадки Сразу после оплаты ж/д билетов и за 3
              часа до отправления мы пришлем вам СМС-напоминание о поездке.
            </q>
          </div>
        </li>
      </ul>
      <ul className="feedback__dots">
        <li className="feedback__dot feedback__dot_active"></li>
        <li className="feedback__dot"></li>
        <li className="feedback__dot"></li>
        <li className="feedback__dot"></li>
        <li className="feedback__dot"></li>
      </ul>
    </section>
  );
};

export default SectionFeedback;
