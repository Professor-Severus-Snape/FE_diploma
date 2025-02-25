import { Link } from 'react-router-dom';
import './changeData.css';

const ChangeData = ({ route }: { route: string }) => {
  return (
    <div className="change-data">
      <Link className="change-data__link" to={route}>
        Изменить
      </Link>
    </div>
  );
};

export default ChangeData;
