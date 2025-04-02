import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../redux/store';
import AddPassenger from '../AddPassenger/AddPassenger';
import ArticlePassenger from '../ArticlePassenger/ArticlePassenger';
import NextPage from '../NextPage/NextPage';
import './sectionPassengers.css';

const SectionPassengers = () => {
  const navigate = useNavigate();

  const { passengersList } = useSelector(
    (state: RootState) => state.passengers
  );

  const { orderList } = useSelector((state: RootState) => state.departure);

  const handleOnNextClick = () => {
    // если все условия выполнены, то навигируемся на нужный роут:
    navigate('/payment');
  };

  return (
    <section className="passengers">
      <h2 className="visually-hidden">Пассажиры</h2>

      {passengersList.map((_, index) => (
        <ArticlePassenger key={index} index={index} />
      ))}

      {orderList.length > passengersList.length && <AddPassenger />}

      {/* NOTE: временно заглушка isActive в значении false */}
      <NextPage text="далее" isActive={false} onNextClick={handleOnNextClick} />
    </section>
  );
};

export default SectionPassengers;
