import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITown } from '../models/models';

interface IParamsSliceState {
  paramStartTown: ITown | null;
  paramEndTown: ITown | null;
  paramStartDate: Date | null;
  paramEndDate: Date | null;
}

const initialState: IParamsSliceState = {
  paramStartTown: null,
  paramEndTown: null,
  paramStartDate: null,
  paramEndDate: null,
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
  },
});

export const {
  setParamStartTown,
  setParamEndTown,
  setParamStartDate,
  setParamEndDate,
} = paramsSlice.actions;
export default paramsSlice.reducer;
