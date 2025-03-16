import { configureStore } from '@reduxjs/toolkit';
import arrivalReducer from './arrivalSlice';
import carriagesReducer from './carriagesSlice';
import checkboxReducer from './checkboxSlice';
import departureReducer from './departureSlice';
import lastTicketsReducer from './lastTicketsSlice';
import modalReducer from './modalSlice';
import paramsReducer from './paramsSlice';
import searchFormReducer from './searchFormSlice';
import townsReducer from './townsSlice';
import trainsReducer from './trainsSlice';

const store = configureStore({
  reducer: {
    arrival: arrivalReducer,
    carriages: carriagesReducer,
    checkbox: checkboxReducer,
    departure: departureReducer,
    lastTickets: lastTicketsReducer,
    modal: modalReducer,
    params: paramsReducer,
    searchForm: searchFormReducer,
    towns: townsReducer,
    trains: trainsReducer,
  },
  // настройка проверки сериализуемости - исключаем объект Date:
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'searchForm/setStartDate',
          'searchForm/setEndDate',
          'params/setParamStartDate',
          'params/setParamEndDate',
        ],
        ignoredPaths: [
          'searchForm.startDate',
          'searchForm.endDate',
          'params.paramStartDate',
          'params.paramEndDate',
        ],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
