import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IParamsSliceState {
  paramStartDate: Date | null;
  paramEndDate: Date | null;
}

const initialState: IParamsSliceState = {
  paramStartDate: null,
  paramEndDate: null,
};

const paramsSlice = createSlice({
  name: 'params',
  initialState,
  reducers: {
    setParamStartDate: (state, action: PayloadAction<Date | null>) => {
      state.paramStartDate = action.payload;
    },
    setParamEndDate: (state, action: PayloadAction<Date | null>) => {
      state.paramEndDate = action.payload;
    },
  },
});

export const { setParamStartDate, setParamEndDate } = paramsSlice.actions;
export default paramsSlice.reducer;
