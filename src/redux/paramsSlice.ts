import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITown } from '../models/models';

interface IParamsSliceState {
  paramStartTown: ITown | null;
  paramEndTown: ITown | null;

  paramStartDate: Date | null;
  paramEndDate: Date | null;

  minPrice: number;
  maxPrice: number;

  haveFirstClass: boolean;
  haveSecondClass: boolean;
  haveThirdClass: boolean;
  haveFourthClass: boolean;

  haveWifi: boolean;
  haveExpress: boolean;
}

const initialState: IParamsSliceState = {
  paramStartTown: null,
  paramEndTown: null,

  paramStartDate: null,
  paramEndDate: null,

  minPrice: 0,
  maxPrice: 7000,

  haveFirstClass: false,
  haveSecondClass: false,
  haveThirdClass: false,
  haveFourthClass: false,

  haveWifi: false,
  haveExpress: false,
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParamStartTown: (state, action: PayloadAction<ITown | null>) => {
      state.paramStartTown = action.payload;
    },
    setParamEndTown: (state, action: PayloadAction<ITown | null>) => {
      state.paramEndTown = action.payload;
    },

    setParamStartDate: (state, action: PayloadAction<Date | null>) => {
      state.paramStartDate = action.payload;
    },
    setParamEndDate: (state, action: PayloadAction<Date | null>) => {
      state.paramEndDate = action.payload;
    },

    setMinPrice: (state, action: PayloadAction<number>) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action: PayloadAction<number>) => {
      state.maxPrice = action.payload;
    },

    setFirstClass: (state, action: PayloadAction<boolean>) => {
      state.haveFirstClass = action.payload;
    },
    setSecondClass: (state, action: PayloadAction<boolean>) => {
      state.haveSecondClass = action.payload;
    },
    setThirdClass: (state, action: PayloadAction<boolean>) => {
      state.haveThirdClass = action.payload;
    },
    setFourthClass: (state, action: PayloadAction<boolean>) => {
      state.haveFourthClass = action.payload;
    },

    setWifi: (state, action: PayloadAction<boolean>) => {
      state.haveWifi = action.payload;
    },
    setExpress: (state, action: PayloadAction<boolean>) => {
      state.haveExpress = action.payload;
    },
  },
});

export const {
  setParamStartTown,
  setParamEndTown,
  setParamStartDate,
  setParamEndDate,
  setFirstClass,
  setSecondClass,
  setThirdClass,
  setFourthClass,
  setWifi,
  setExpress,
  setMinPrice,
  setMaxPrice,
} = paramsSlice.actions;
export default paramsSlice.reducer;
