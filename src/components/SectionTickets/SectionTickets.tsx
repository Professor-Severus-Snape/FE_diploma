import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ArticleTicket from '../ArticleTicket/ArticleTicket';
import Pagination from '../Pagination/Pagination';
import TicketsView from '../TicketsView/TicketsView';
import './sectionTickets.css';

const SectionTickets = () => {
  const { trains } = useSelector((state: RootState) => state.trains); // массив найденных поездов

  return (
    <section className="tickets">
      <h2 className="visually-hidden">Билеты</h2>

      <TicketsView />

      <div className="tickets__list">
        {trains.map((_, index) => (
          <ArticleTicket key={index} index={index} text="Выбрать места" />
        ))}
      </div>

      <Pagination />
    </section>
  );
};

export default SectionTickets;
