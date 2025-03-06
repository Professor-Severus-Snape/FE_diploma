import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ITown } from '../models/models';

interface ISearchFormState {
  startTown: ITown | null;
  // startTownTooltip: string;
  endTown: ITown | null;
  // endTownTooltip: string;
  startDate: Date | null;
  startDateTooltip: string;
  endDate: Date | null;
  endDateTooltip: string;
}

const initialState: ISearchFormState = {
  startTown: null,
  // startTownTooltip: '';
  endTown: null,
  // endTownTooltip: '';
  startDate: null,
  startDateTooltip: '',
  endDate: null,
  endDateTooltip: '',
};

const searchFormSlice = createSlice({
  name: 'searchForm',
  initialState,
  reducers: {
    setStartTown: (state, action: PayloadAction<ITown | null>) => {
      state.startTown = action.payload;
    },
    setEndTown: (state, action: PayloadAction<ITown | null>) => {
      state.endTown = action.payload;
    },
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
  setStartTown,
  setEndTown,
  setStartDate,
  setStartDateTooltip,
  setEndDate,
  setEndDateTooltip,
} = searchFormSlice.actions;

export default searchFormSlice.reducer;
