import Footer from '../../components/Footer/Footer';
import HeaderOrder from '../../components/HeaderOrder/HeaderOrder';
import SectionOrder from '../../components/SectionOrder/SectionOrder';

import './order.css';

const Order = () => {
  return (
    <>
      <HeaderOrder />

      <main className="order-page">
        <div className="order-page__container">
          <SectionOrder />
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Order;
