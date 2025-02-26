import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Line from '../../components/Line/Line';
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionFeedback from '../../components/SectionFeedback/SectionFeedback';

const Home = () => {
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
      <HeaderHome />
      <Line />
      <main>
        <SectionAbout />
        <SectionDescription />
        <SectionFeedback />
      </main>
    </>
  );
};

export default Home;
