import Footer from '../../components/Footer/Footer';
import HeaderHome from '../../components/HeaderHome/HeaderHome';
import Line from '../../components/Line/Line';
import SectionAbout from '../../components/SectionAbout/SectionAbout';
import SectionDescription from '../../components/SectionDescription/SectionDescription';
import SectionFeedback from '../../components/SectionFeedback/SectionFeedback';

const Home = () => {
  return (
    <>
      <HeaderHome />
      <Line />
      <main>
        <SectionAbout />
        <SectionDescription />
        <SectionFeedback />
      </main>
      <Footer />
    </>
  );
};

export default Home;
