import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay } from 'date-fns';

import { AppDispatch, RootState } from '../../redux/store';
import { setParamStartDate, setParamEndDate } from '../../redux/paramsSlice';
import {
  setStartDateTooltip,
  setEndDateTooltip,
  setStartTown,
  setEndTown,
} from '../../redux/searchFormSlice';

import Destination from '../Destination/Destination';
import MyDatePicker from '../MyDatePicker/MyDatePicker';
import './searchForm.css';

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { startTown, endTown, startDate, endDate } = useSelector(
    (state: RootState) => state.searchForm
  );

  const { paramStartDate, paramEndDate } = useSelector(
    (state: RootState) => state.params
  );

  // смена направлений местами:
  const changeDestinations = () => {
    const tmp = startTown ? { ...startTown } : null; // объекты копируем по ссылке
    dispatch(setStartTown(endTown ? { ...endTown } : null)); // объекты копируем по ссылке
    dispatch(setEndTown(tmp));
  };

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // проверка, что все поля заполнены перед отправкой запроса на сервер:
    // TODO: добавить проверку городов!!!
    if (!startDate || !endDate) {
      if (!startDate) {
        dispatch(setStartDateTooltip('Пожалуйста, выберите корректную дату'));
      }
      if (!endDate) {
        dispatch(setEndDateTooltip('Пожалуйста, выберите корректную дату'));
      }
      return;
    }

    // если данные остались прежними, то нет смысла отправлять тот же самый запрос:
    // TODO: добавить проверку на города!!!
    if (
      paramStartDate &&
      paramEndDate &&
      isSameDay(startDate, paramStartDate) &&
      isSameDay(endDate, paramEndDate)
    ) {
      // NOTE: теоретически можно здесь показать модалочку...
      return;
    }

    // TODO:
    // 1. посылаем запрос на сервер
    // 2. пока идет запрос, отображаем линию загрузки
    // 3. после завершения запроса (await):
    //    - сохраняем данные в store (в paramsSlice)
    //    - переходим на роут выбора билетов (если только мы уже не на нём..)

    // Если форма валидна и запрос успешно завершился, то сохраняем все данные в paramsSlice:
    // TODO: скопировать не только даты, но и города!!!
    dispatch(setParamStartDate(startDate));
    dispatch(setParamEndDate(endDate));

    navigate('/trains');
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
