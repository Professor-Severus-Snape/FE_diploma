import ArticleTicket from '../ArticleTicket/ArticleTicket';
import Pagination from '../Pagination/Pagination';
import TicketsView from '../TicketsView/TicketsView';

const SectionTickets = () => {
  return (
    <section className="tickets">
      <h2 className="visually-hidden">Tickets</h2>

      <TicketsView />

      <ArticleTicket text="Выбрать места" />
      <ArticleTicket text="Выбрать места" />
      <ArticleTicket text="Выбрать места" />
      <ArticleTicket text="Выбрать места" />
      <ArticleTicket text="Выбрать места" />

      <Pagination />
    </section>
  );
};

export default SectionTickets;
