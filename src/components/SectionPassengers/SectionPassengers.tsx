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

      <NextPage route="/payment" text="далее" />
    </section>
  );
};

export default SectionPassengers;
