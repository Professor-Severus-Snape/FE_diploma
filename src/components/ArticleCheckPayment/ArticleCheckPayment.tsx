import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ChangeData from '../ChangeData/ChangeData';
import TitleCheck from '../TitleCheck/TitleCheck';
import './articleCheckPayment.css';

const ArticleCheckPayment = () => {
  const { cash } = useSelector((state: RootState) => state.payment);

  return (
    <article className="check-payment">
      <TitleCheck text="Способ оплаты" />

      <div className="check-payment__container">
        <div className="check-payment__type">
          {cash ? 'Наличными' : 'Онлайн'}
        </div>
        <div className="check-payment__sidebar">
          <ChangeData route="/payment" />
        </div>
      </div>
    </article>
  );
};

export default ArticleCheckPayment;
