import AddPassenger from '../AddPassenger/AddPassenger';
import ArticlePassenger from '../ArticlePassenger/ArticlePassenger';
import NextPage from '../NextPage/NextPage';
import './sectionPassengers.css';

const SectionPassengers = () => {
  const numberOfPassengers = 3; // TODO: получать количество пассажиров из вне!!!
  const passengersList = [];

  for (let i = 1; i <= numberOfPassengers; i++) {
    passengersList.push(i);
  }

  return (
    <section className="passengers">
      <h2 className="visually-hidden">Пассажиры</h2>

      {passengersList.map((num) => (
        <ArticlePassenger key={num} num={num} />
      ))}

      <AddPassenger />

      {/* NOTE: временно заглушка isActive в значении false */}
      <NextPage route="/payment" text="далее" isActive={false} />
    </section>
  );
};

export default SectionPassengers;
