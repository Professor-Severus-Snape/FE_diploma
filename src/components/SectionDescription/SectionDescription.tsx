import computer from '../../assets/computer.svg';
import earth from '../../assets/earth.svg';
import office from '../../assets/office.svg';

import './sectionDescription.css';

const SectionDescription = () => {
  return (
    <section id="description" className="description">
      <div className="description__top-container">
        <h2 className="description__title">Как это работает</h2>
        <a href="#footer" className="desription__link">Узнать больше</a>
      </div>
      <div className="description__bottom-container">
        <div className="description__item">
          <img src={computer} alt="Удобно" className="description__img" />
          <p className="description__text">Удобный заказ на сайте</p>
        </div>

        <div className="description__item">
          <img src={office} alt="Удаленно" className="description__img" />
          <p className="description__text">Нет необходимости ехать в офис</p>
        </div>

        <div className="description__item">
          <img src={earth} alt="Много" className="description__img" />
          <p className="description__text">Огромный выбор направлений</p>
        </div>
      </div>
    </section>
  );
};

export default SectionDescription;
