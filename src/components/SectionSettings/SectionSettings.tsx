import ArticleDate from '../ArticleDate/ArticleDate';
import './sectionSettings.css';

const SectionSettings = () => {
  return (
    <section className="settings">
      <h2 className="visually-hidden">Настройки</h2>
      <ArticleDate />
      <article className="features">фичи</article>
      <article className="price">стоимость</article>
      <article className="forward">туда</article>
      <article className="backward">обратно</article>
    </section>
  );
};

export default SectionSettings;
