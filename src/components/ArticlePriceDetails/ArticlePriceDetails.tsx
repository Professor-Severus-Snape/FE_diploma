import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import './articlePriceDetails.css';

const ArticlePriceDetails = () => {
  const { orderList: departureOrderList } = useSelector(
    (state: RootState) => state.departure
  );

  const { orderList: arrivalOrderList } = useSelector(
    (state: RootState) => state.arrival
  );

  const departurePrice = departureOrderList.reduce(
    (acc, item) => acc + item.total_price,
    0
  );

  // если билета обратно нет, то стоимость билета - 0₽ (начальное значение аккумулятора):
  const arrivalPrice = arrivalOrderList.reduce(
    (acc, item) => acc + item.total_price,
    0
  );

  const price = departurePrice + arrivalPrice;

  return (
    <article className="price-details">
      <h3 className="price-details__title">итог</h3>
      <span className="price-details__price">
        <span className="price-details__cash">
          {price.toLocaleString('ru-RU')}
        </span>
        <span className="price-details__currency">₽</span>
      </span>
    </article>
  );
};

export default ArticlePriceDetails;
