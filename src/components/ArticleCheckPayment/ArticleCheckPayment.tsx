import ChangeData from '../ChangeData/ChangeData';
import TitleCheck from '../TitleCheck/TitleCheck';
import './articleCheckPayment.css';

const ArticleCheckPayment = () => {
  return (
    <article className="check-payment">
      <TitleCheck text="Способ оплаты" />

      <div className="check-payment__container">
        <div className="check-payment__type">Наличными</div>
        <div className="check-payment__sidebar">
          <ChangeData route="/payment" />
        </div>
      </div>
    </article>
  );
};

export default ArticleCheckPayment;
