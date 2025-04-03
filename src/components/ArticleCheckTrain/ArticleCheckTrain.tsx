import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ArticleTicket from '../ArticleTicket/ArticleTicket';
import TitleCheck from '../TitleCheck/TitleCheck';
import './articleCheckTrain.css';

const ArticleCheckTrain = () => {
  const { currentTrainIndex } = useSelector((state: RootState) => state.trains);

  return (
    <article className="check-train">
      <TitleCheck text="Поезд" />
      <ArticleTicket index={currentTrainIndex} text="Изменить" />
    </article>
  );
};

export default ArticleCheckTrain;
