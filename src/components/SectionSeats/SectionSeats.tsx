import ArticleSeat from '../ArticleSeat/ArticleSeat';
import './sectionSeats.css';

const SectionSeats = () => {
  return (
    <section className="seats">
      <h2 className="seats__title">Выбор мест</h2>
      <ArticleSeat direction={'forward'} />
      <ArticleSeat direction={'backward'} />
      <div className="seats__navigation">
        {/* TODO: реализовать переход на другой роут */}
        <a href="#0" className="seats__navigation-link">далее</a>
      </div>
    </section>
  );
};

export default SectionSeats;
