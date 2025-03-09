import ArticleTicket from '../ArticleTicket/ArticleTicket';
import TitleCheck from '../TitleCheck/TitleCheck';
import './articleCheckTrain.css';

const ArticleCheckTrain = () => {
  return (
    <article className="check-train">
      <TitleCheck text="Поезд" />
      {/* TODO: подставлять индекс выбранного билета!!! */}
      <ArticleTicket index={1} text="Изменить" />
    </article>
  );
};

export default ArticleCheckTrain;
