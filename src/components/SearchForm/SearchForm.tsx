import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { format, isSameDay } from 'date-fns';

import { AppDispatch, RootState } from '../../redux/store';
import { openModal } from '../../redux/modalSlice';
import {
  setParamStartTown,
  setParamEndTown,
  setParamStartDate,
  setParamEndDate,
} from '../../redux/paramsSlice';
import {
  setStartTown,
  setStartTownTooltip,
  setEndTown,
  setEndTownTooltip,
  setStartDateTooltip,
  setEndDateTooltip,
} from '../../redux/searchFormSlice';
import { fetchTrains } from '../../redux/trainsSlice';

import Destination from '../Destination/Destination';
import MyDatePicker from '../MyDatePicker/MyDatePicker';
import './searchForm.css';

const SearchForm = () => {
  const location = useLocation(); // например, '/trains'
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { startTown, endTown, startDate, endDate } = useSelector(
    (state: RootState) => state.searchForm
  );

  const { paramStartTown, paramEndTown, paramStartDate, paramEndDate } =
    useSelector((state: RootState) => state.params);

  // смена направлений местами:
  const changeDestinations = () => {
    const tmp = startTown ? { ...startTown } : null; // объекты копируем по ссылке
    dispatch(setStartTown(endTown ? { ...endTown } : null)); // объекты копируем по ссылке
    dispatch(setEndTown(tmp));
  };

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // если какое-то поле не заполнено, то показываем подсказки:
    if (!startTown || !endTown || !startDate || !endDate) {
      if (!startTown) {
        dispatch(setStartTownTooltip('Пожалуйста, выберите город'));
      }
      if (!endTown) {
        dispatch(setEndTownTooltip('Пожалуйста, выберите город'));
      }
      if (!startDate) {
        dispatch(setStartDateTooltip('Пожалуйста, выберите корректную дату'));
      }
      if (!endDate) {
        dispatch(setEndDateTooltip('Пожалуйста, выберите корректную дату'));
      }
      return;
    }

    // если город отправления совпадает с городом прибытия, то показываем предупреждение:
    if (startTown._id === endTown._id) {
      const modalOptions = {
        type: 'warning',
        title: 'Нельзя путешествовать в одном городе!',
        text: 'Город отправления и город прибытия должны отличаться. Пожалуйста, исправьте данные в форме!',
      };

      dispatch(openModal(modalOptions));
      return;
    }

    // если все данные в форме остались прежними, то показываем предупреждение:
    if (
      paramStartTown &&
      paramEndTown &&
      paramStartDate &&
      paramEndDate &&
      startTown._id === paramStartTown._id &&
      endTown._id === paramEndTown._id &&
      isSameDay(startDate, paramStartDate) &&
      isSameDay(endDate, paramEndDate)
    ) {
      const modalOptions = {
        type: 'warning',
        title: 'Данные в форме не были изменены!',
        text: 'Вы уже просматриваете билеты в соответствии с данным запросом.',
      };

      dispatch(openModal(modalOptions));
      return;
    }

    const requestOptions = {
      from_city_id: startTown._id,
      to_city_id: endTown._id,
      date_start: format(startDate, 'yyyy-MM-dd'),
      date_end: format(endDate, 'yyyy-MM-dd'),
    };

    // 1. если форма валидна и запрос успешно завершился, то сохраняем все данные в paramsSlice:
    dispatch(setParamStartTown(startTown)); // сохраняем в параметры город отправления
    dispatch(setParamEndTown(endTown)); // сохраняем в параметры город прибытия
    dispatch(setParamStartDate(startDate)); // сохраняем в параметры дату отправления
    dispatch(setParamEndDate(endDate)); // сохраняем в параметры дату прибытия

    // 2. посылаем запрос на сервер:
    await dispatch(fetchTrains(requestOptions));

    // 3. после чего переходим на роут выбора билетов (если только мы уже не на нём..):
    if (!location.pathname.endsWith('/trains')) {
      await navigate('/trains');
    }
  };

  return (
    <form className="search-form" onSubmit={handleOnSubmit}>
      <div className="search-form__container">
        <fieldset className="search-form__fieldset">
          <legend className="search-form__legend">Направление</legend>
          <div className="search-form__destination">
            <Destination isStart />
            <span
              className="search-form__swap"
              onClick={changeDestinations}
            ></span>
            <Destination isStart={false} />
          </div>
        </fieldset>

        <fieldset className="search-form__fieldset">
          <legend className="search-form__legend">Дата</legend>
          <div className="search-form__date">
            <MyDatePicker isStart isInForm />
            <MyDatePicker isStart={false} isInForm />
          </div>
        </fieldset>
      </div>

      <fieldset className="search-form__fieldset">
        <legend className="visually-hidden">Найти билеты</legend>
        <button type="submit" className="search-form__btn">
          найти билеты
        </button>
      </fieldset>
    </form>
  );
};

export default SearchForm;
