import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionConfirmation from '../../components/SectionConfirmation/SectionConfirmation';
import SectionDetails from '../../components/SectionDetails/SectionDetails';

const Confirmation = () => {
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
      <Footer />
    </>
  );
};

export default Confirmation;
