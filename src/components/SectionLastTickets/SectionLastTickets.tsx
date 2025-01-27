import ArticleLastTicket from '../ArticleLastTicket/ArticleLastTicket';
import './sectionLastTickets.css';

const SectionLastTickets = () => {
  return (
    <section className="last-tickets">
      <h3 className="last-tickets__title">последние билеты</h3>
      <ArticleLastTicket />
      <ArticleLastTicket />
      <ArticleLastTicket />
    </section>
  );
};

export default SectionLastTickets;
