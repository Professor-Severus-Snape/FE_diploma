import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ISearchFormState {
  startDate: Date | null;
  startDateTooltip: string;
  endDate: Date | null;
  endDateTooltip: string;
}

const initialState: ISearchFormState = {
  startDate: null,
  startDateTooltip: '',
  endDate: null,
  endDateTooltip: '',
};

const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setStartDate: (state, action: PayloadAction<Date | null>) => {
      state.startDate = action.payload;
    },
    setStartDateTooltip: (state, action: PayloadAction<string>) => {
      state.startDateTooltip = action.payload;
    },
    setEndDate: (state, action: PayloadAction<Date | null>) => {
      state.endDate = action.payload;
    },
    setEndDateTooltip: (state, action: PayloadAction<string>) => {
      state.endDateTooltip = action.payload;
    },
  },
});

export const {
  setStartDate,
  setStartDateTooltip,
  setEndDate,
  setEndDateTooltip,
} = searchFormSlice.actions;

export default searchFormSlice.reducer;
