import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  setCertificateNumberValue,
  setCertificateNumberError,
} from '../../redux/passengersSlice';

import './birthCertificate.css';

interface IBirthCertificate {
  index: number;
  certificateNumber: { value: string; error: boolean };
}

const BirthCertificate = (props: IBirthCertificate) => {
  const { index, certificateNumber } = props;

  const dispatch: AppDispatch = useDispatch();

  // изменение номера свидетельства о рождении:
  const handleCertificateNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event;
    const { value } = target;

    const cursorPosition = target.selectionStart || 0; // сохраняем текущую позицию курсора

    // разрешаем ввод только римских цифр, кириллических букв и арабских цифр
    const filteredValue = value.replace(/[^IVXLCDM\dА-Я]/gi, '').toUpperCase();

    // если данные не поменялись, нет смысла обновлять store:
    if (certificateNumber.value === filteredValue) {
      return;
    }

    const payload = {
      index,
      certificateNumberValue: filteredValue,
    };

    dispatch(setCertificateNumberValue(payload));

    // если введено правильное значение, сбрасываем ошибку:
    if (
      certificateNumber.error &&
      /^[IVXLCDM]{1,3}[А-Я]{2}\d{6}$/.test(filteredValue)
    ) {
      dispatch(
        setCertificateNumberError({ index, certificateNumberError: false })
      );
    }

    // восстанавливаем позицию курсора после обновления значения:
    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    }, 0); // отложенная установка, чтобы избежать проблемы с перерисовкой
  };

  // обработка события blur для проверки правильности номера паспорта:
  const handleCertificateNumberBlur = () => {
    // проверяем, что номер состоит из 1-3 римских цифр, двух букв кириллицы и 6 цифр:
    const isValid = /^[IVXLCDM]{1,3}[А-Я]{2}\d{6}$/.test(
      certificateNumber.value
    );

    const payload = {
      index,
      certificateNumberError: !isValid,
    };

    dispatch(setCertificateNumberError(payload));
  };

  return (
    <div className="birth-certificate">
      <label
        htmlFor="birth-certificate-number"
        className="birth-certificate__label"
      >
        Номер
      </label>

      <input
        id="birth-certificate-number"
        className={`birth-certificate__input${
          certificateNumber.error ? ' birth-certificate__input_invalid' : ''
        }`}
        type="text"
        minLength={9}
        maxLength={12}
        placeholder="____________"
        required
        value={certificateNumber.value}
        onChange={handleCertificateNumberChange}
        onBlur={handleCertificateNumberBlur}
      />
    </div>
  );
};

export default BirthCertificate;
