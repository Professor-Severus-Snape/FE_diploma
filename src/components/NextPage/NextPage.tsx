import { useNavigate } from 'react-router-dom';
import './nextPage.css';

interface INextPageProps {
  route: string;
  text: string;
  isActive: boolean;
}

const NextPage = ({ route, text, isActive }: INextPageProps) => {
  const navigate = useNavigate();

  const basicClass = 'next-page__navigation-link';
  const inactiveClass = 'next-page__navigation-link_inactive';

  const handleClick = () => {
    navigate(route);
  };

  return (
    <div className="next-page">
      <a
        className={isActive ? basicClass : `${basicClass} ${inactiveClass}`}
        onClick={isActive ? handleClick : undefined}
      >
        {text}
      </a>
    </div>
  );
};

export default NextPage;
