import fail from '../../assets/fail.svg';
import './documentsCheckFail.css';

const DocumentsCheckFail = ({ document }: { document: string }) => {
  const currentDocumentText =
    document === 'birth-certificate' ? 'свидетельства о рождении' : 'паспорта';

  const currentExampleText =
    document === 'birth-certificate' ? 'VIII-ЫП-123456' : '1234 123456';

  return (
    <div className="documents-check_fail">
      <img className="documents-check__icon_fail" src={fail} alt="fail" />

      <div className="documents-check__wrapper">
        <div className="documents-check__reason">
          Номер
          <span className="documents-check__current-reason">
            {' ' + currentDocumentText + ' '}
          </span>
          указан некорректно
        </div>

        <div className="documents-check__example">
          Пример:
          <span className="documents-check__current-example">
            {' ' + currentExampleText}
          </span>
        </div>
      </div>
    </div>
  );
};

export default DocumentsCheckFail;
