import { isAfter, isBefore, isValid, parse, subYears } from 'date-fns';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../redux/store';
import { setBirthdate } from '../../redux/passengersSlice';
import './birthdate.css';

interface IBirthdateProps {
  index: number;
  birthdate: { value: string; isValid: boolean; hasError: boolean };
}

const Birthdate = ({ index, birthdate }: IBirthdateProps) => {
  const dispatch: AppDispatch = useDispatch();

  const handleBirthdateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { target } = event;
    const { value } = target;

    const cursorPosition = target.selectionStart || 0; // сохраняем текущую позицию курсора

    // пропускаем только цифры и точки:
    const filteredValue = value.replace(/\D\./g, '');

    // если данные не поменялись, нет смысла обновлять store:
    if (birthdate.value === filteredValue) {
      return;
    }

    // проверяем формат ДД.ММ.ГГГГ:
    const parsedDate = parse(filteredValue, 'dd.MM.yyyy', new Date());

    const today = new Date(); // дата - сегодня
    const minDate = subYears(today, 110); // дата - 110 лет назад

    // проверяем, является ли дата валидной и входит ли в диапазон:
    const isValidDate =
      isValid(parsedDate) &&
      isBefore(parsedDate, today) &&
      isAfter(parsedDate, minDate);

    const payload = {
      index,
      value: filteredValue,
      isValid: isValidDate,
      hasError: !isValidDate,
    };

    // сохраняем в store дату рождения:
    dispatch(setBirthdate(payload));

    // восстанавливаем позицию курсора после обновления значения:
    setTimeout(() => {
      target.setSelectionRange(cursorPosition, cursorPosition);
    }, 0); // отложенная установка, чтобы избежать проблемы с перерисовкой
  };

  return (
    <div className="birthdate">
      <label htmlFor={`birthdate-${index}`} className="birthdate__label">
        Дата рождения
      </label>
      <input
        id={`birthdate-${index}`}
        className="birthdate__input"
        type="text"
        placeholder="ДД.ММ.ГГГГ"
        minLength={10}
        maxLength={10}
        required
        value={birthdate.value}
        onChange={handleBirthdateChange}
      />
    </div>
  );
};

export default Birthdate;
