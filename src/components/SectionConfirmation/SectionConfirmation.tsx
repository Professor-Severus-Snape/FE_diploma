import { useNavigate } from 'react-router-dom';
import ArticleCheckPassengers from '../ArticleCheckPassengers/ArticleCheckPassengers';
import ArticleCheckPayment from '../ArticleCheckPayment/ArticleCheckPayment';
import ArticleCheckTrain from '../ArticleCheckTrain/ArticleCheckTrain';
import NextPage from '../NextPage/NextPage';
import './sectionConfirmation.css';

const SectionConfirmation = () => {
  const navigate = useNavigate();

  const handleOnNextClick = () => {
    // TODO: отправлять запрос с данными заказа на сервер!
    navigate('/order');
  };

  return (
    <section className="confirmation">
      <h2 className="visually-hidden">Подтверждение заказа</h2>
      <ArticleCheckTrain />
      <ArticleCheckPassengers />
      <ArticleCheckPayment />
      <NextPage
        text="подтвердить"
        isActive={true}
        onNextClick={handleOnNextClick}
      />
    </section>
  );
};

export default SectionConfirmation;
