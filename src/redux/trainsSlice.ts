import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { ISearchParams, ITrain } from '../models/models';

// ответ по запросу 'https://students.netoservices.ru/fe-diplom/routes?from_city_id=66ac8b69cb563f0052174f45&to_city_id=66ac8b69cb563f0052174f47&date_start=2025-03-10&date_end=2030-03-13':

// {
//   "total_count": 8, // количество найденных поездов - ??? (не всегда совпадает почему-то...)
//   "items": [ITrain, ITrain, ITrain],
// }

interface IInitialState {
  trains: ITrain[];
  trainsLoading: boolean;
  currentCount: number;
  currentPage: number;
}

const initialState: IInitialState = {
  trains: [], // найденные по запросу города
  trainsLoading: false, // процесс загрузки данных по билетам
  currentCount: 5, // количество единовременно отображаемых на странице билетов
  currentPage: 1, // текущая страница
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const trainsSlice = createSliceWithThunk({
  name: 'trains',
  initialState,
  reducers: (creators) => ({
    clearTrains: creators.reducer((state) => {
      state.trains = [];
    }),
    // asyncThunk<{ total_count: number; items: ITrain[] }, ISearchParams> изначает, что асинхронный экшен будет принимать объект data вида ISearchParams и возвращать action.payload вида { total_count: number; items: ITrain[] }:
    fetchTrains: creators.asyncThunk<
      { total_count: number; items: ITrain[] },
      ISearchParams
    >(
      async (data, { rejectWithValue }) => {
        try {
          const fromCity = `from_city_id=${data.from_city_id}`;
          const toCity = `to_city_id=${data.to_city_id}`;
          const startDate = `date_start=${data.date_start}`;
          const endDate = `date_end=${data.date_end}`;

          const firstClass = data.firstClass ? '&have_first_class=true' : '';
          const secondClass = data.secondClass ? '&have_second_class=true' : '';
          const thirdClass = data.thirdClass ? '&have_third_class=true' : '';
          const fourthClass = data.fourthClass ? '&have_fourth_class=true' : '';

          const classes = `${firstClass}${secondClass}${thirdClass}${fourthClass}`;
          const wifi = data.wifi ? '&have_wifi=true' : '';
          const express = data.express ? '&have_express=true' : '';

          const baseUrl = import.meta.env.VITE_BASE_URL;
          const route = '/routes';
          const reqQueryParams = `?${fromCity}&${toCity}&${startDate}&${endDate}`;
          const optQueryParams = `${classes}${wifi}${express}`;

          const request = baseUrl + route + reqQueryParams + optQueryParams;

          // NOTE: данные получаемые с бэка не всегда верные - проблема со стороны сервера!!!

          console.log('optQueryParams: ', optQueryParams); // NOTE: отладка!!!

          const response = await fetch(request);

          if (!response.ok) {
            return rejectWithValue('Ошибка при получении данных от сервера...');
          }

          return await response.json();
        } catch (err) {
          return rejectWithValue(err);
        }
      },
      {
        pending: (state) => {
          state.trainsLoading = true;
        },
        fulfilled: (state, action) => {
          // сразу выполняем сортировку по времени:
          state.trains = JSON.parse(JSON.stringify(action.payload.items)).sort(
            (a: ITrain, b: ITrain) =>
              a.departure.from.datetime - b.departure.from.datetime
          );
        },
        rejected: (state) => {
          state.trains = [];
        },
        settled: (state) => {
          state.trainsLoading = false;
        },
      }
    ),
    setTrains: creators.reducer((state, action: { payload: ITrain[] }) => {
      state.trains = action.payload;
    }),
    setCurrentCount: creators.reducer((state, action: { payload: number }) => {
      state.currentCount = action.payload;
    }),
    setCurrentPage: creators.reducer((state, action: { payload: number }) => {
      state.currentPage = action.payload;
    }),
  }),
});

export const {
  clearTrains,
  fetchTrains,
  setTrains,
  setCurrentCount,
  setCurrentPage,
} = trainsSlice.actions;

export default trainsSlice.reducer;
