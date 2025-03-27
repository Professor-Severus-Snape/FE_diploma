import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setDocument } from '../../redux/passengersSlice';
import BirthCertificate from '../BirthCertificate/BirthCertificate';
import Passport from '../Passport/Passport';
import './documents.css';

interface IDocumentsProps {
  index: number;
  document: string;
}

const Documents = ({ index, document }: IDocumentsProps) => {
  const [isOpenDocumentList, setIsOpenDocumentList] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const documents = ['Паспорт РФ', 'Свидетельство о рождении']; // возможные типы документов
  const isPassport = document === documents[0];

  // выбор типа документа:
  const handleDocumentChange = (document: string) => {
    setIsOpenDocumentList(false);

    const payload = {
      index,
      document,
    };

    dispatch(setDocument(payload));
  };

  return (
    <div className="documents">
      <div className="documents__column">
        <div className="documents__type">Тип документа</div>
        <div
          className={`documents__inner-wrapper documents__inner-wrapper_${
            isPassport ? 'passport' : 'birth-sertificate'
          }`}
        >
          <span className="documents__item">{document}</span>
          <span
            className="documents__arrow"
            onClick={() => setIsOpenDocumentList(true)}
          ></span>

          {isOpenDocumentList && (
            <ul className="documents__type-list">
              {documents.map((document, index) => (
                <li
                  key={index}
                  className="documents__type-item"
                  onClick={() => handleDocumentChange(document)}
                >
                  {document}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isPassport ? <Passport /> : <BirthCertificate />}
    </div>
  );
};

export default Documents;
