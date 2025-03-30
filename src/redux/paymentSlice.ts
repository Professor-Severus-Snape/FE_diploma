import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPaymentState {
  lastName: { value: string; isValid: boolean; hasError: boolean };
  firstName: { value: string; isValid: boolean; hasError: boolean };
  middleName: { value: string; isValid: boolean; hasError: boolean };
}

const initialState: IPaymentState = {
  lastName: { value: '', isValid: false, hasError: false }, // фамилия
  firstName: { value: '', isValid: false, hasError: false }, // имя
  middleName: { value: '', isValid: false, hasError: false }, // отчество
};

const paymentSlice = createSlice({
  name: 'payment',
  initialState,
  reducers: {
    setPaymentLastName: (
      state,
      action: PayloadAction<{
        value: string;
        isValid: boolean;
        hasError: boolean;
      }>
    ) => {
      const { value, isValid, hasError } = action.payload;
      state.lastName = {
        value,
        isValid,
        hasError,
      };
    },
    setPaymentFirstName: (
      state,
      action: PayloadAction<{
        value: string;
        isValid: boolean;
        hasError: boolean;
      }>
    ) => {
      const { value, isValid, hasError } = action.payload;
      state.firstName = {
        value,
        isValid,
        hasError,
      };
    },
    setPaymentMiddleName: (
      state,
      action: PayloadAction<{
        value: string;
        isValid: boolean;
        hasError: boolean;
      }>
    ) => {
      const { value, isValid, hasError } = action.payload;
      state.middleName = {
        value,
        isValid,
        hasError,
      };
    },
  },
});

export const { setPaymentLastName, setPaymentFirstName, setPaymentMiddleName } =
  paymentSlice.actions;

export default paymentSlice.reducer;
