import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import {
  fetchForwardCarriages,
  fetchBackwardCarriages,
} from '../../redux/сarriagesSlice';
import { setCurrentTrainIndex } from '../../redux/trainsSlice';
import './chooseSeats.css';

const ChooseSeats = ({ index }: { index: number }) => {
  const dispatch: AppDispatch = useDispatch();

  const { trains } = useSelector((state: RootState) => state.trains);

  // по клику на кнопку 'Выбрать места':
  const handleClick = () => {
    const forwardDestinationId = trains[index].departure._id; // id направления (туда)
    const backwardDestinationId = trains[index].arrival?._id || ''; // id направления (обратно)

    dispatch(setCurrentTrainIndex(index)); // 1. сохраняем индекс выбранного билета в store
    dispatch(fetchForwardCarriages(forwardDestinationId)); // 2. запрос на вагоны (туда)

    if (backwardDestinationId) {
      dispatch(fetchBackwardCarriages(backwardDestinationId)); // 3. запрос на вагоны (обратно)
    }
  };

  return (
    <div className="choose-seats">
      <Link className="choose-seats__link" to="/seats" onClick={handleClick}>
        Выбрать места
      </Link>
    </div>
  );
};

export default ChooseSeats;
