import ArticleCheckPassengers from '../ArticleCheckPassengers/ArticleCheckPassengers';
import ArticleCheckTrain from '../ArticleCheckTrain/ArticleCheckTrain';
import './sectionConfirmation.css';

const SectionConfirmation = () => {
  return (
    <section className="confirmation">
      <h2 className="visually-hidden">Подтверждение заказа</h2>
      <ArticleCheckTrain />
      <ArticleCheckPassengers />
    </section>
  );
};

export default SectionConfirmation;
