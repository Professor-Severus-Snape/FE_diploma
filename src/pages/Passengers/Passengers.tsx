import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionDetails from '../../components/SectionDetails/SectionDetails';
import SectionPassengers from '../../components/SectionPassengers/SectionPassengers';

const Passengers = () => {
  return (
    <>
      <Header />
      <LineCurrent num={2} />
      <div className="page">
        <aside className="sidebar">
          <SectionDetails />
        </aside>
        <main className="main">
          <SectionPassengers />
        </main>
      </div>
      <Footer />
    </>
  );
};

export default Passengers;
