import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LineCurrent from '../../components/LineCurrent/LineCurrent';

const Trains = () => {
  return (
    <>
      <Header />
      <LineCurrent num={1} />
      {/* содержимое */}
      <Footer />
    </>
  );
};

export default Trains;
