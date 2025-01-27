import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionLastTickets from '../../components/SectionLastTickets/SectionLastTickets';
import SectionSettings from '../../components/SectionSettings/SectionSettings';

import './trains.css';

const Trains = () => {
  return (
    <>
      <Header />
      <LineCurrent num={1} />
      <div className="page">
        <aside className="sidebar">
          <SectionSettings />
          <SectionLastTickets />
        </aside>
        <main>Здесь будут билеты...</main>
      </div>
      <Footer />
    </>
  );
};

export default Trains;
