import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  setDocument,
  setPassportSeriesValue,
  setPassportNumberValue,
  setPassportSeriesError,
  setPassportNumberError,
  setCertificateNumberValue,
  setCertificateNumberError,
} from '../../redux/passengersSlice';
import BirthCertificate from '../BirthCertificate/BirthCertificate';
import Passport from '../Passport/Passport';
import './documents.css';

interface IDocumentsProps {
  index: number;
  document: string;
  passportSeries: { value: string; error: boolean };
  passportNumber: { value: string; error: boolean };
  certificateNumber: { value: string; error: boolean };
}

const Documents = (props: IDocumentsProps) => {
  const { index, document, passportSeries, passportNumber, certificateNumber } =
    props;

  const [isOpenDocumentList, setIsOpenDocumentList] = useState<boolean>(false);
  const dispatch: AppDispatch = useDispatch();

  const documents = ['Паспорт РФ', 'Свидетельство о рождении']; // возможные типы документов
  const isPassport = document === documents[0];

  const passportData = {
    index,
    passportSeries,
    passportNumber,
  };

  const sertificateData = {
    index,
    certificateNumber,
  };

  // выбор типа документа:
  const handleDocumentChange = (documentType: string) => {
    setIsOpenDocumentList(false); // скрываем список

    // если ткнули по тому же типу документа, то нет смысла что-либо менять в store:
    if (document === documentType) {
      return;
    }

    // если выбран паспорт, то сбрасываем данные свидетельства о рождении и наоборот:
    if (documentType === documents[0]) {
      dispatch(
        setCertificateNumberValue({ index, certificateNumberValue: '' })
      );

      dispatch(
        setCertificateNumberError({ index, certificateNumberError: false })
      );
    } else {
      dispatch(setPassportSeriesValue({ index, passportSeriesValue: '' }));
      dispatch(setPassportSeriesError({ index, passportSeriesError: false }));
      dispatch(setPassportNumberValue({ index, passportNumberValue: '' }));
      dispatch(setPassportNumberError({ index, passportNumberError: false }));
    }

    dispatch(setDocument({ index, document: documentType }));
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
              {documents.map((documentType, index) => (
                <li
                  key={index}
                  className="documents__type-item"
                  onClick={() => handleDocumentChange(documentType)}
                >
                  {documentType}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {isPassport ? (
        <Passport {...passportData} />
      ) : (
        <BirthCertificate {...sertificateData} />
      )}
    </div>
  );
};

export default Documents;
