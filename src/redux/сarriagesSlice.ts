import { buildCreateSlice, asyncThunkCreator } from '@reduxjs/toolkit';
import { IСarriage } from '../models/models';

// ответ по запросу 'https://students.netoservices.ru/fe-diplom/routes/67ceb8c28c75f00047cb0db0/seats':

// [
//   {
//     "coach": {
//       "_id": "67ceb6558c75f00047c8fb59",
//       "name": "МГ-22",
//       "class_type": "fourth", // сидячий вагон
//       "have_wifi": false,
//       "have_air_conditioning": true,
//       "price": 0,
//       "top_price": 908,
//       "bottom_price": 684,
//       "side_price": 0,
//       "linens_price": 0,
//       "wifi_price": 244,
//       "is_linens_included": false,
//       "available_seats": 50,
//       "train": "67ceb6598c75f00047c90194"
//     },
//     "seats": [ {"index": 1, "available": true}, ..., {"index": 50, "available": true}]
//   },
//   ...
// ]

interface IInitialState {
  forwardCarriages: IСarriage[];
  forwardCarriagesLoading: boolean;

  backwardCarriages: IСarriage[];
  backwardCarriagesLoading: boolean;
}

const initialState: IInitialState = {
  forwardCarriages: [], // найденные по запросу вагоны (туда)
  forwardCarriagesLoading: false, // процесс загрузки данных по вагонам (туда)

  backwardCarriages: [], // найденные по запросу вагоны (обратно)
  backwardCarriagesLoading: false, // процесс загрузки данных по вагонам (обратно)
};

const createSliceWithThunk = buildCreateSlice({
  creators: { asyncThunk: asyncThunkCreator },
});

const carriagesSlice = createSliceWithThunk({
  name: 'carriages',
  initialState,
  reducers: (creators) => ({
    // асинхронный экшен на вход принимает строку 'id' и возвращает action.payload вида IСarriage[]:
    fetchForwardCarriages: creators.asyncThunk<IСarriage[], string>(
      async (id, { rejectWithValue }) => {
        try {
          const baseUrl = import.meta.env.VITE_BASE_URL;
          const route = `/routes/${id}/seats`;

          const request = baseUrl + route;

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
          state.forwardCarriagesLoading = true;
        },
        fulfilled: (state, action) => {
          state.forwardCarriages = action.payload;
        },
        rejected: (state) => {
          state.forwardCarriages = [];
        },
        settled: (state) => {
          state.forwardCarriagesLoading = false;
        },
      }
    ),
    // асинхронный экшен на вход принимает строку 'id' и возвращает action.payload вида IСarriage[]:
    fetchBackwardCarriages: creators.asyncThunk<IСarriage[], string>(
      async (id, { rejectWithValue }) => {
        try {
          const baseUrl = import.meta.env.VITE_BASE_URL;
          const route = `/routes/${id}/seats`;

          const request = baseUrl + route;

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
          state.backwardCarriagesLoading = true;
        },
        fulfilled: (state, action) => {
          state.backwardCarriages = action.payload;
        },
        rejected: (state) => {
          state.backwardCarriages = [];
        },
        settled: (state) => {
          state.backwardCarriagesLoading = false;
        },
      }
    ),
  }),
});

export const { fetchForwardCarriages, fetchBackwardCarriages } =
  carriagesSlice.actions;

export default carriagesSlice.reducer;
