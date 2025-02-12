import NextPassenger from '../NextPassenger/NextPassenger';
import success from '../../assets/success.svg';
import './documentsCheckSuccess.css';

const DocumentsCheckSuccess = () => {
  return (
    <div className="documents-check_success">
      <div className="documents-check__wrapper">
        <img
          className="documents-check__icon_success"
          src={success}
          alt="success"
        />
        <span className="documents-check__text_success">Готово</span>
      </div>

      <NextPassenger />
    </div>
  );
};

export default DocumentsCheckSuccess;
