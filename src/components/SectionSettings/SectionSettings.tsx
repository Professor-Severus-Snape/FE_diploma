import ArticleDate from '../ArticleDate/ArticleDate';
import ArticleFeatures from '../ArticleFeatures/ArticleFeatures';
import './sectionSettings.css';

const SectionSettings = () => {
  return (
    <section className="settings">
      <h2 className="visually-hidden">Настройки</h2>
      <ArticleDate />
      <ArticleFeatures />
      <article className="price">стоимость</article>
      <article className="forward">туда</article>
      <article className="backward">обратно</article>
    </section>
  );
};

export default SectionSettings;
