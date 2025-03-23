import { useState } from 'react';
import ContactNumber from '../ContactNumber/ContactNumber';
import Email from '../Email/Email';
import FullName from '../FullName/FullName';
import './sectionPayment.css';
import NextPage from '../NextPage/NextPage';

const SectionPayment = () => {
  const [isCashPayment, setIsCashPayment] = useState(true); // по дефолту - оплата наличными

  const handlePaymentMethodChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setIsCashPayment(event.target.value === 'cash'); // ориентируемся на значение радиокнопки
  };

  return (
    <div className="payment">
      <form className="payment__form">
        {/* Данные плательщика: */}
        <div className="payment__payer">
          <h3 className="payment__title">Персональные данные</h3>
          <div className="payment__payer-data">
            <FullName />
            <ContactNumber />
            <Email />
          </div>
        </div>

        {/* Способ оплаты */}
        <div className="payment__method">
          <h3 className="payment__title">Способ оплаты</h3>

          <div className="payment__online">
            <input
              id="online"
              className="payment__input visually-hidden"
              type="radio"
              name="payment-method"
              value="online"
              checked={!isCashPayment} // если isCashPayment == false, то "online"
              onChange={handlePaymentMethodChange}
            />
            <label className="payment__label" htmlFor="online">
              Онлайн
            </label>
            {/* TODO: подумать над возможностью выбора конкретного метода онлайн-оплаты */}
            <ul className="payment__online-list">
              <li className="payment__online-item">Банковской картой</li>
              <li className="payment__online-item">PayPal</li>
              <li className="payment__online-item">Visa QIWI Wallet</li>
            </ul>
          </div>

          <div className="payment__cash">
            <input
              className="payment__input visually-hidden"
              id="cash"
              type="radio"
              name="payment-method"
              value="cash"
              checked={isCashPayment} // если isCashPayment == true, то "cash"
              onChange={handlePaymentMethodChange}
            />
            <label className="payment__label" htmlFor="cash">
              Наличными
            </label>
          </div>
        </div>
      </form>

      {/* NOTE: временно заглушка isActive в значении false */}
      <NextPage route="/confirmation" text="купить билеты" isActive={false} />
    </div>
  );
};

export default SectionPayment;
