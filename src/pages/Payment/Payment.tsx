import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';
import SectionDetails from '../../components/SectionDetails/SectionDetails';
import SectionPayment from '../../components/SectionPayment/SectionPayment';

const Payment = () => {
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
