import ArticleTicket from '../ArticleTicket/ArticleTicket';
import Pagination from '../Pagination/Pagination';
import TicketsView from '../TicketsView/TicketsView';
import './sectionTickets.css';

const SectionTickets = () => {
  return (
    <section className="tickets">
      <h2 className="visually-hidden">Tickets</h2>

      <TicketsView />

      <div className="tickets__list">
        <ArticleTicket text="Выбрать места" />
        <ArticleTicket text="Выбрать места" />
        <ArticleTicket text="Выбрать места" />
        <ArticleTicket text="Выбрать места" />
        <ArticleTicket text="Выбрать места" />
      </div>

      <Pagination />
    </section>
  );
};

export default SectionTickets;
