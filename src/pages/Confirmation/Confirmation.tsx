import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionConfirmation from '../../components/SectionConfirmation/SectionConfirmation';
import SectionDetails from '../../components/SectionDetails/SectionDetails';

const Confirmation = () => {
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
      <LineCurrent num={4} />
      <div className="page">
        <aside className="sidebar">
          <SectionDetails />
        </aside>
        <main className="main">
          <SectionConfirmation />
        </main>
      </div>
    </>
  );
};

export default Confirmation;
