import ArticleCheckPassengers from '../ArticleCheckPassengers/ArticleCheckPassengers';
import ArticleCheckPayment from '../ArticleCheckPayment/ArticleCheckPayment';
import ArticleCheckTrain from '../ArticleCheckTrain/ArticleCheckTrain';
import NextPage from '../NextPage/NextPage';
import './sectionConfirmation.css';

const SectionConfirmation = () => {
  return (
    <section className="confirmation">
      <h2 className="visually-hidden">Подтверждение заказа</h2>
      <ArticleCheckTrain />
      <ArticleCheckPassengers />
      <ArticleCheckPayment />
      {/* NOTE: временно заглушка isActive в значении false */}
      <NextPage route="/order" text="подтвердить" isActive={false} />
    </section>
  );
};

export default SectionConfirmation;
