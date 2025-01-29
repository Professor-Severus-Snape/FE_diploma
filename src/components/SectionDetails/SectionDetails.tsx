import ArticleBackwardDetails from '../ArticleBackwardDetails/ArticleBackwardDetails';
import ArticleForwardDetails from '../ArticleForwardDetails/ArticleForwardDetails';
import ArticlePassengerDetails from '../ArticlePassengerDetails/ArticlePassengerDetails';

import './sectionDetails.css';

const SectionDetails = () => {
  return (
    <section className="details">
      <h2 className="details__title">Детали поездки</h2>
      <ArticleForwardDetails />
      <ArticleBackwardDetails />
      <ArticlePassengerDetails />
      <footer className="details__footer">
        <span className="details__text">итог</span>
        <span className="details__price">
          <span className="details__cash">7 760</span>
          <span className="details__currency">₽</span>
        </span>
      </footer>
    </section>
  );
};

export default SectionDetails;
