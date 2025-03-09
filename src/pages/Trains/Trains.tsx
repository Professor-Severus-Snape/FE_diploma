import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../redux/store';

import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import Loader from '../../components/Loader/Loader';
import SectionLastTickets from '../../components/SectionLastTickets/SectionLastTickets';
import SectionSettings from '../../components/SectionSettings/SectionSettings';
import SectionTickets from '../../components/SectionTickets/SectionTickets';

const Trains = () => {
  const location = useLocation();
  const { trainsLoading } = useSelector((state: RootState) => state.trains); // загрузка поездов

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

      {trainsLoading ? (
        <Loader />
      ) : (
        <>
          <LineCurrent num={1} />
          <div className="page">
            <aside className="sidebar">
              <SectionSettings />
              <SectionLastTickets />
            </aside>
            <main className="main">
              <SectionTickets />
            </main>
          </div>
        </>
      )}
    </>
  );
};

export default Trains;
