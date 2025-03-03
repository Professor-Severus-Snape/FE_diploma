import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import DatePicker from 'react-datepicker'; // библиотека react-datepicker -> календарь
import { addDays, isSameDay } from 'date-fns'; // библиотека date-fns -> валидация даты
import { ru } from 'date-fns/locale';

import { AppDispatch, RootState } from '../../redux/store';
import { setParamEndDate, setParamStartDate } from '../../redux/paramsSlice';
import {
  setEndDate,
  setEndDateTooltip,
  setStartDate,
  setStartDateTooltip,
} from '../../redux/searchFormSlice';

import Tooltip from '../Tooltip/Tooltip';

import 'react-datepicker/dist/react-datepicker.css';
import './myDatePicker.css';

interface IMyDatePickerProps {
  isStart: boolean;
  isInForm: boolean;
}

const MyDatePicker = ({ isStart, isInForm }: IMyDatePickerProps) => {
  const [calendarOpen, setCalendarOpen] = useState<boolean>(false); // state для календаря
  const refIcon = useRef<HTMLSpanElement>(null); // рефка на иконку календаря

  const dispatch: AppDispatch = useDispatch();

  const { startDate, endDate, startDateTooltip, endDateTooltip } = useSelector(
    (state: RootState) => state.searchForm
  );

  const { paramStartDate, paramEndDate } = useSelector(
    (state: RootState) => state.params
  );

  // функция, определяющая какую именно дату подставлять в selected:
  const selectDate = () => {
    if (isStart) {
      return isInForm ? startDate : paramStartDate;
    }
    return isInForm ? endDate : paramEndDate;
  };

  // обработчик изменения даты отправления:
  // NB! дата либо валидна, либо её нет вовсе - валидность проверяет сам DatePicker!
  const handleStartDateChange = (date: Date | null) => {
    // если `MyDatePicker` находится ВНУТРИ формы, то sidebar НЕ обновляем БЕЗ submit-а:
    if (isInForm) {
      // если дата отправления позже даты возврата, то сбрасываем дату отправления:
      if (date && endDate && !isSameDay(date, endDate) && date > endDate) {
        date = null;
      }

      dispatch(setStartDateTooltip(date ? '' : 'Пожалуйста, выберите дату'));
      dispatch(setStartDate(date)); // изменяем дату отправления ТОЛЬКО в форме
      return;
    }

    // если `MyDatePicker` находится НЕ внутри формы, а в sidebar-е:
    // если всё ok (есть обе даты, возврат - после отправления или в один день и дата изменилась):
    if (
      date &&
      paramStartDate &&
      paramEndDate &&
      (date < paramEndDate || isSameDay(date, paramEndDate)) &&
      !isSameDay(date, paramStartDate)
    ) {
      // изменяем дату отправления И в форме И в sidebar-е:
      dispatch(setStartDate(date));
      dispatch(setParamStartDate(date));

      // TODO: отправляем поисковый запрос на сервер с новой датой (date), проверяем роут...
    }
  };

  // обработчик изменения даты возвращения:
  // NB! дата либо валидна, либо её нет вовсе - валидность проверяет сам DatePicker!
  const handleEndDateChange = (date: Date | null) => {
    // если `MyDatePicker` находится ВНУТРИ формы, то sidebar НЕ обновляем БЕЗ submit-а:
    if (isInForm) {
      // если дата возврата раньше даты отправления, то сбрасываем дату возврата:
      if (
        date &&
        startDate &&
        !isSameDay(date, startDate) &&
        date < startDate
      ) {
        date = null;
      }

      dispatch(setEndDateTooltip(date ? '' : 'Пожалуйста, выберите дату'));
      dispatch(setEndDate(date)); // изменяем дату отправления ТОЛЬКО в форме
      return;
    }

    // если `MyDatePicker` находится НЕ внутри формы, а в sidebar-е:
    // если всё ok (есть обе даты, а возврат - после отправления или в один день и дата изменилась):
    if (
      date &&
      paramStartDate &&
      paramEndDate &&
      (date > paramStartDate || isSameDay(date, paramStartDate)) &&
      !isSameDay(date, paramEndDate)
    ) {
      // изменяем дату отправления И в форме И в sidebar-е:
      dispatch(setEndDate(date));
      dispatch(setParamEndDate(date));

      // TODO: отправляем поисковый запрос на сервер с новой датой (date), проверяем роут...
    }
  };

  // проверка даты отправления на null при потере фокуса (если не возникло событие onChange):
  const checkStartDateOnBlur = () => {
    dispatch(setStartDateTooltip(startDate ? '' : 'Пожалуйста, выберите дату'));
  };

  // проверка даты возвращения на null при потере фокуса (если не возникло событие onChange):
  const checkEndDateOnBlur = () => {
    dispatch(setEndDateTooltip(endDate ? '' : 'Пожалуйста, выберите дату'));
  };

  // обработчик клика по иконке:
  const handleIconClick = () => {
    setCalendarOpen(!calendarOpen); // открываем/закрываем календарь
  };

  // обработчик клика за пределами DatePicker:
  // FIXME: как избавиться от any ???
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleOutsideClick = (event: any) => {
    // (event: React.MouseEvent<Element, MouseEvent>) <- не совместимы типы event !!!
    // если клик за пределами DatePicker && не по иконке, то закрываем календарь
    if (event.target !== refIcon.current) {
      setCalendarOpen(false);
    }
  };

  return (
    <div className="date-picker">
      <DatePicker
        className="date-picker__component"
        locale={ru} // русский язык в календаре
        dateFormat="dd.MM.yy" // формат даты
        placeholderText="ДД.ММ.ГГ" // placeholder
        minDate={new Date()} // не раньше сегодняшнего дня
        maxDate={addDays(new Date(), 365)} // не позже, чем через год
        selected={selectDate()} // выбранная валидная дата или null
        onBlur={isStart ? checkStartDateOnBlur : checkEndDateOnBlur} // валидация при потере фокуса
        onChange={isStart ? handleStartDateChange : handleEndDateChange} // обработчик изм-ния даты
        onClickOutside={handleOutsideClick} // закрытие календаря при клике вне
        onSelect={() => setCalendarOpen(false)} // when day is clicked
        open={calendarOpen} // управление открытием календаря
      />

      {/* по клику на иконку открываем/закрываем календарь */}
      <span
        className="date-picker__icon"
        onClick={handleIconClick}
        ref={refIcon}
      ></span>

      {/* показываем подсказку если поле пустое или некорректное */}
      <Tooltip text={isStart ? startDateTooltip : endDateTooltip} />
    </div>
  );
};

export default MyDatePicker;
