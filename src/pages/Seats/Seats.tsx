import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionLastTickets from '../../components/SectionLastTickets/SectionLastTickets';
import SectionSeats from '../../components/SectionSeats/SectionSeats';
import SectionSettings from '../../components/SectionSettings/SectionSettings';

const Seats = () => {
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
