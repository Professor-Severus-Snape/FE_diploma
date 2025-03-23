import { Link } from 'react-router-dom';
import './nextPage.css';

interface INextPageProps {
  route: string;
  text: string;
  isActive: boolean;
}

const NextPage = ({ route, text, isActive }: INextPageProps) => {
  const basicClass = 'next-page__navigation-link';
  const inactiveClass = 'next-page__navigation-link_inactive';

  const nextPageClassName = isActive
    ? basicClass
    : `${basicClass} ${inactiveClass}`;

  return (
    <div className="next-page">
      <Link className={nextPageClassName} to={route}>
        {text}
      </Link>
    </div>
  );
};

export default NextPage;
