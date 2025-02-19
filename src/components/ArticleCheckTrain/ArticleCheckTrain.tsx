import ArticleTicket from '../ArticleTicket/ArticleTicket';
import TitleCheck from '../TitleCheck/TitleCheck';
import './articleCheckTrain.css';

const ArticleCheckTrain = () => {
  return (
    <article className="check-train">
      <TitleCheck text="Поезд" />
      <ArticleTicket text="Изменить" />
    </article>
  );
};

export default ArticleCheckTrain;
