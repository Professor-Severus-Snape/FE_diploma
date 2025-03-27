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
    passportSeries: { value: '', error: false }, // серия паспорта
    passportNumber: { value: '', error: false }, // номер паспорта
    certificateNumber: { value: '', error: false }, // номер свидетельства о рождении
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
    setPassportSeriesValue: (
      state,
      action: PayloadAction<{ index: number; passportSeriesValue: string }>
    ) => {
      const { index, passportSeriesValue } = action.payload;
      state.passengersList[index].data.passportSeries.value =
        passportSeriesValue;
    },
    setPassportSeriesError: (
      state,
      action: PayloadAction<{ index: number; passportSeriesError: boolean }>
    ) => {
      const { index, passportSeriesError } = action.payload;
      state.passengersList[index].data.passportSeries.error =
        passportSeriesError;
    },
    setPassportNumberValue: (
      state,
      action: PayloadAction<{ index: number; passportNumberValue: string }>
    ) => {
      const { index, passportNumberValue } = action.payload;
      state.passengersList[index].data.passportNumber.value =
        passportNumberValue;
    },
    setPassportNumberError: (
      state,
      action: PayloadAction<{ index: number; passportNumberError: boolean }>
    ) => {
      const { index, passportNumberError } = action.payload;
      state.passengersList[index].data.passportNumber.error =
        passportNumberError;
    },
    setCertificateNumberValue: (
      state,
      action: PayloadAction<{ index: number; certificateNumberValue: string }>
    ) => {
      const { index, certificateNumberValue } = action.payload;
      state.passengersList[index].data.certificateNumber.value =
        certificateNumberValue;
    },
    setCertificateNumberError: (
      state,
      action: PayloadAction<{ index: number; certificateNumberError: boolean }>
    ) => {
      const { index, certificateNumberError } = action.payload;
      state.passengersList[index].data.certificateNumber.error =
        certificateNumberError;
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
  setPassportSeriesValue,
  setPassportSeriesError,
  setPassportNumberValue,
  setPassportNumberError,
  setCertificateNumberValue,
  setCertificateNumberError,
} = passengersSlice.actions;

export default passengersSlice.reducer;
