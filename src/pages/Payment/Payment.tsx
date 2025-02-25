import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionDetails from '../../components/SectionDetails/SectionDetails';
import SectionPayment from '../../components/SectionPayment/SectionPayment';

const Payment = () => {
  const location = useLocation();

  useEffect(() => {
    // переход по якорной ссылке:
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1)); // убираем "#" из хеша
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' }); // плавная прокрутка
      }
    } else {
      window.scrollTo(0, 0); // прокручиваем страницу вначало при смене роута
    }
  }, [location]); // Срабатывает при изменении маршрута

  return (
    <>
      <Header />
      <LineCurrent num={3} />
      <div className="page">
        <aside className="sidebar">
          <SectionDetails />
        </aside>
        <main className="main">
          <SectionPayment />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
