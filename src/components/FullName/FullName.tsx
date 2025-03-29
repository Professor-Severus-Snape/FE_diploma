import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import {
  setFirstName,
  setLastName,
  setMiddleName,
} from '../../redux/passengersSlice';
import './fullName.css';

interface IFullNameProps {
  index: number;
  firstName: { value: string; isValid: boolean; hasError: boolean };
  lastName: { value: string; isValid: boolean; hasError: boolean };
  middleName: { value: string; isValid: boolean; hasError: boolean };
}

const FullName = (props: IFullNameProps) => {
  const { index, firstName, lastName, middleName } = props;
  const dispatch: AppDispatch = useDispatch();

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    const { value, name } = target;

    const cursorPosition = target.selectionStart || 0; // сохраняем текущую позицию курсора

    // разрешаем ввод только кириллических букв:
    const filteredValue = value.replace(/[^А-Я]/gi, '').toUpperCase();

    // определяем на каком из полей ввода сработало событие 'change':
    let currentInput = lastName;

    switch (name) {
      case 'last-name':
        currentInput = lastName;
        break;
      case 'first-name':
        currentInput = firstName;
        break;
      case 'middle-name':
        currentInput = middleName;
    }

    // если данные не поменялись, нет смысла обновлять store:
    if (currentInput.value === filteredValue) {
      return;
    }

    // проверяем полноту введенных данных:
    const isValid = /^[А-Я]{2,50}$/.test(filteredValue);

    const payload = {
      index,
      value: filteredValue,
      isValid,
      hasError: !isValid,
    };

    // сохраняем данные в store:
    switch (name) {
      case 'last-name':
        dispatch(setLastName(payload));
        break;
      case 'first-name':
        dispatch(setFirstName(payload));
        break;
      case 'middle-name':
        dispatch(setMiddleName(payload));
    }

    // восстанавливаем позицию курсора после обновления значения:
    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    }, 0); // отложенная установка, чтобы избежать проблемы с перерисовкой
  };

  return (
    <div className="full-name">
      <div className="full-name__column">
        <label htmlFor={`last-name-${index}`} className="full-name__label">
          Фамилия
        </label>
        <input
          id={`last-name-${index}`}
          className={`full-name__input${
            lastName.hasError ? ' full-name__input_invalid' : ''
          }`}
          type="text"
          name="last-name"
          minLength={2}
          maxLength={50}
          required
          value={lastName.value}
          onChange={handleNameChange}
        />
      </div>

      <div className="full-name__column">
        <label htmlFor={`first-name-${index}`} className="full-name__label">
          Имя
        </label>
        <input
          id={`first-name-${index}`}
          type="text"
          name="first-name"
          className={`full-name__input${
            firstName.hasError ? ' full-name__input_invalid' : ''
          }`}
          minLength={2}
          maxLength={50}
          required
          value={firstName.value}
          onChange={handleNameChange}
        />
      </div>

      <div className="full-name__column">
        <label htmlFor={`middle-name-${index}`} className="full-name__label">
          Отчество
        </label>
        <input
          id={`middle-name-${index}`}
          type="text"
          name="middle-name"
          className={`full-name__input${
            middleName.hasError ? ' full-name__input_invalid' : ''
          }`}
          minLength={2}
          maxLength={50}
          required
          value={middleName.value}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
};

export default FullName;
