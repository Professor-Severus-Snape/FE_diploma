import ArticleDate from '../ArticleDate/ArticleDate';
import ArticleFeatures from '../ArticleFeatures/ArticleFeatures';
import ArticlePrice from '../ArticlePrice/ArticlePrice';

import './sectionSettings.css';

const SectionSettings = () => {
  return (
    <section className="settings">
      <h2 className="visually-hidden">Настройки</h2>
      <ArticleDate />
      <ArticleFeatures />
      <ArticlePrice />
      <article className="forward">туда</article>
      <article className="backward">обратно</article>
    </section>
  );
};

export default SectionSettings;
