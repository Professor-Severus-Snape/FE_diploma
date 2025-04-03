import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ContactNumber from '../ContactNumber/ContactNumber';
import Email from '../Email/Email';
import FullName from '../FullName/FullName';
import NextPage from '../NextPage/NextPage';
import PaymentMethod from '../PaymentMethod/PaymentMethod';
import './sectionPayment.css';

const SectionPayment = () => {
  const navigate = useNavigate();

  // получаем данные плательщика из store:
  const { lastName, firstName, middleName, phoneNumber, email, cash } =
    useSelector((state: RootState) => state.payment);

  // формируем пропсы для передачи их в компонент FullName:
  const nameData = {
    index: -1, // рандомное число, которое не будет пересекаться с индексами на роуте '/passengers'
    lastName,
    firstName,
    middleName,
  };

  const handleOnNextClick = () => {
    // если все условия выполнены, то навигируемся на нужный роут:
    navigate('/confirmation');
  };

  return (
    <section className="payment">
      <h2 className="visually-hidden">Оплата</h2>

      <div className="payment__info">
        <article className="payment__payer">
          <h3 className="payment__title">Персональные данные</h3>
          <div className="payment__payer-data">
            <FullName {...nameData} />
            <ContactNumber {...phoneNumber} />
            <Email {...email} />
          </div>
        </article>

        <PaymentMethod cash={cash} />
      </div>

      {/* NOTE: временно заглушка isActive в значении false */}
      <NextPage
        text="купить билеты"
        isActive={false}
        onNextClick={handleOnNextClick}
      />
    </section>
  );
};

export default SectionPayment;
