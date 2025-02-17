import ArticleSeat from '../ArticleSeat/ArticleSeat';
import NextPage from '../NextPage/NextPage';
import './sectionSeats.css';

const SectionSeats = () => {
  return (
    <section className="seats">
      <h2 className="seats__title">Выбор мест</h2>
      <ArticleSeat direction={'forward'} />
      <ArticleSeat direction={'backward'} />
      <NextPage text={'далее'} />
    </section>
  );
};

export default SectionSeats;
