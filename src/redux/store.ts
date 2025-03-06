import { configureStore } from '@reduxjs/toolkit';
import modalReducer from './modalSlice';
import paramsReducer from './paramsSlice';
import searchFormReducer from './searchFormSlice';
import townsReducer from './townsSlice';

const store = configureStore({
  reducer: {
    modal: modalReducer,
    params: paramsReducer,
    searchForm: searchFormReducer,
    towns: townsReducer,
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
