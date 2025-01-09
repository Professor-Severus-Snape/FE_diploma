import './sectionAbout.css';

const SectionAbout = () => {
  return (
    <section id="about" className="about">
      <h2 className="about__title">о нас</h2>
      <div className="about__content">
        <p className="about__text">
          Мы рады видеть вас! Мы работаем для Вас с 2003 года. 14 лет мы
          наблюдаем, как с каждым днем все больше людей заказывают жд билеты
          через интернет.
        </p>
        <p className="about__text">
          Сегодня можно заказать железнодорожные билеты онлайн всего в 2 клика,
          но стоит ли это делать?
          <br />
          Мы расскажем о преимуществах заказа через интернет.
        </p>
        <p className="about__text about__text_bold">
          Покупать жд билеты дешево можно за 90 суток до отправления поезда.
          <br />
          Благодаря динамическому ценообразованию цена на билеты в это время
          самая низкая.
        </p>
      </div>
    </section>
  );
};

export default SectionAbout;
