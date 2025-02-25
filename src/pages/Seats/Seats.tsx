import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionLastTickets from '../../components/SectionLastTickets/SectionLastTickets';
import SectionSeats from '../../components/SectionSeats/SectionSeats';
import SectionSettings from '../../components/SectionSettings/SectionSettings';

const Seats = () => {
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
      <LineCurrent num={1} />
      <div className="page">
        <aside className="sidebar">
          <SectionSettings />
          <SectionLastTickets />
        </aside>
        <main className="main">
          <SectionSeats />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Seats;
