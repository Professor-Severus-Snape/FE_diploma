import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IPassenger } from '../models/models';

interface IPassengersState {
  passengersList: { isOpen: boolean; data: IPassenger }[]; // данные конкретного пассажира
  passenger: IPassenger;
}

const initialState: IPassengersState = {
  passengersList: [],
  passenger: {
    type: 'Взрослый', // 'Взрослый', 'Детский' или 'Без места'
    lastName: '', // фамилия
    firstName: '', // имя
    middleName: '', // отчество
    gender: true, // true - для 'male', false - для 'female'
    birthdate: '', // дата рождения
    limitedMobility: false, // наличие инвалидности
    document: 'Паспорт РФ', // 'Паспорт РФ' или 'Свидетельство о рождении'
    passportSeries: { value: '', isValid: false, hasError: false }, // серия паспорта
    passportNumber: { value: '', isValid: false, hasError: false }, // номер паспорта
    certificateNumber: { value: '', isValid: false, hasError: false }, // номер свидетельства
  },
};

const passengersSlice = createSlice({
  name: 'passengers',
  initialState,
  reducers: {
    setPassengersList: (state, action: PayloadAction<number>) => {
      state.passengersList = Array.from(
        { length: action.payload },
        (_, index) => ({
          isOpen: index === 0, // первый пассажир всегда открытый
          data: initialState.passenger,
        })
      );
    },
    setIsOpen: (
      state,
      action: PayloadAction<{ index: number; isOpen: boolean }>
    ) => {
      const { index, isOpen } = action.payload;
      state.passengersList[index].isOpen = isOpen;
    },
    setType: (
      state,
      action: PayloadAction<{ index: number; type: string }>
    ) => {
      const { index, type } = action.payload;
      state.passengersList[index].data.type = type;
    },
    setGender: (
      state,
      action: PayloadAction<{ index: number; gender: boolean }>
    ) => {
      const { index, gender } = action.payload;
      state.passengersList[index].data.gender = gender;
    },
    setLimitedMobility: (
      state,
      action: PayloadAction<{ index: number; mobility: boolean }>
    ) => {
      const { index, mobility } = action.payload;
      state.passengersList[index].data.limitedMobility = mobility;
    },
    setDocument: (
      state,
      action: PayloadAction<{ index: number; document: string }>
    ) => {
      const { index, document } = action.payload;
      state.passengersList[index].data.document = document;
    },
    setPassportSeries: (
      state,
      action: PayloadAction<{
        index: number;
        value: string;
        isValid: boolean;
        hasError: boolean;
      }>
    ) => {
      const { index, value, isValid, hasError } = action.payload;

      state.passengersList[index].data.passportSeries = {
        value,
        isValid,
        hasError,
      };
    },
    setPassportNumber: (
      state,
      action: PayloadAction<{
        index: number;
        value: string;
        isValid: boolean;
        hasError: boolean;
      }>
    ) => {
      const { index, value, isValid, hasError } = action.payload;

      state.passengersList[index].data.passportNumber = {
        value,
        isValid,
        hasError,
      };
    },

    setCertificateNumber: (
      state,
      action: PayloadAction<{
        index: number;
        value: string;
        isValid: boolean;
        hasError: boolean;
      }>
    ) => {
      const { index, value, isValid, hasError } = action.payload;

      state.passengersList[index].data.certificateNumber = {
        value,
        isValid,
        hasError,
      };
    },
  },
});

export const {
  setPassengersList,
  setIsOpen,
  setType,
  setGender,
  setLimitedMobility,
  setDocument,
  setPassportSeries,
  setPassportNumber,
  setCertificateNumber,
} = passengersSlice.actions;

export default passengersSlice.reducer;
