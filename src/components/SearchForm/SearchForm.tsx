import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { isSameDay } from 'date-fns';

import { AppDispatch, RootState } from '../../redux/store';
import { setParamStartDate, setParamEndDate } from '../../redux/paramsSlice';
import {
  setStartDateTooltip,
  setEndDateTooltip,
} from '../../redux/searchFormSlice';

import MyDatePicker from '../MyDatePicker/MyDatePicker';
import './searchForm.css';

const SearchForm = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const { startDate, endDate } = useSelector(
    (state: RootState) => state.searchForm
  );

  const { paramStartDate, paramEndDate } = useSelector(
    (state: RootState) => state.params
  );

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
            <div className="search-form__input-destination-container">
              <input
                className="search-form__input-destination search-form__input-destination_from"
                placeholder="Откуда"
              />
              <span className="search-form__destination-icon"></span>
            </div>

            <span className="search-form__swap"></span>

            <div className="search-form__input-destination-container">
              <input
                className="search-form__input-destination search-form__input-destination_to"
                placeholder="Куда"
              />
              <span className="search-form__destination-icon"></span>
            </div>
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
