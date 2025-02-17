import './nextPage.css';

const NextPage = ({ text }: { text: string }) => {
  return (
    <div className="next-page">
      {/* TODO: реализовать переход на другой роут */}
      <a href="#0" className="next-page__navigation-link">
        {text}
      </a>
    </div>
  );
};

export default NextPage;
