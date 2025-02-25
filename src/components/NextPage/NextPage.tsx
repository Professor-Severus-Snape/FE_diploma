import { Link } from 'react-router-dom';
import './nextPage.css';

const NextPage = ({ route, text }: { route: string; text: string }) => {
  return (
    <div className="next-page">
      <Link className="next-page__navigation-link" to={route}>
        {text}
      </Link>
    </div>
  );
};

export default NextPage;
