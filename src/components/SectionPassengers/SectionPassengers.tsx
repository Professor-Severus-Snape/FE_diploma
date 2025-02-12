import ArticlePassenger from '../ArticlePassenger/ArticlePassenger';
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

      {passengersList.map((num) => <ArticlePassenger key={num} num={num} />)}

      <div className="passengers__navigation">
        {/* TODO: реализовать переход на другой роут */}
        <a href="#0" className="passengers__navigation-link">
          далее
        </a>
      </div>
    </section>
  );
};

export default SectionPassengers;
