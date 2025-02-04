import ArticleSeat from '../ArticleSeat/ArticleSeat';
import './sectionSeats.css';

const SectionSeats = () => {
  return (
    <section className="seats">
      <h2 className="seats__title">Выбор мест</h2>
      <ArticleSeat direction={'forward'} />
      <ArticleSeat direction={'backward'} />
      {/* TODO: добавить кнопку 'Далее' */}
    </section>
  );
};

export default SectionSeats;
