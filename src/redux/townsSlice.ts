import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { ITown } from '../models/models';

// ответ по запросу 'https://students.netoservices.ru/fe-diplom/routes/cities?name=мо':
// [
//   { _id: '66ac8b69cb563f0052174f45', name: 'москва' },
//   { _id: '66ac8b6acb563f0052174f95', name: 'могоча' },
//   { _id: '66ac8b6acb563f0052174fba', name: 'смоленск' },
// ];

interface IInitialState {
  towns: ITown[];
  isClicked: boolean;
  isOpenedStartList: boolean;
  isOpenedEndList: boolean;
}

const initialState: IInitialState = {
  towns: [], // найденные по запросу города
  isClicked: false, // произошел ли клик по городу из списка
  isOpenedStartList: false, // видимость списка городов отправления
  isOpenedEndList: false, // видимость списка городов прибытия
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const townsSlice = createSliceWithThunk({
  name: 'towns',
  initialState,
  reducers: (creators) => ({
    clearTowns: creators.reducer((state) => {
      state.towns = [];
    }),
    // asyncThunk<ITown[], string> изначает, что асинхронный экшен будет принимать строку queryParamValue и возвращать action.payload вида ITown[]:
    fetchTowns: creators.asyncThunk<ITown[], string>(
      async (queryParamValue, { rejectWithValue }) => {
        try {
          const baseUrl = import.meta.env.VITE_BASE_URL;
          const route = '/routes/cities';
          const queryParam = `name=${queryParamValue}`;

          const response = await fetch(baseUrl + route + '?' + queryParam);

          if (!response.ok) {
            return rejectWithValue('Ошибка при получении данных от сервера...');
          }

          return await response.json();
        } catch (err) {
          return rejectWithValue(err);
        }
      },
      {
        fulfilled: (state, action) => {
          state.towns = action.payload;
        },
        rejected: (state) => {
          state.towns = [];
        },
      }
    ),
    setIsClicked: creators.reducer((state, action: { payload: boolean }) => {
      state.isClicked = action.payload;
    }),
    setIsOpenedStartList: creators.reducer(
      (state, action: { payload: boolean }) => {
        state.isOpenedStartList = action.payload;
      }
    ),
    setIsOpenedEndList: creators.reducer(
      (state, action: { payload: boolean }) => {
        state.isOpenedEndList = action.payload;
      }
    ),
  }),
});

export const {
  clearTowns,
  fetchTowns,
  setIsClicked,
  setIsOpenedStartList,
  setIsOpenedEndList,
} = townsSlice.actions;
export default townsSlice.reducer;
