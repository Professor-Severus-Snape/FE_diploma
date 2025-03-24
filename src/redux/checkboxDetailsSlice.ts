import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  articleForwardCheckboxDetails: boolean;
  articleBackwardCheckboxDetails: boolean;
  articlePassengerCheckboxDetails: boolean;
}

const initialState: IInitialState = {
  articleForwardCheckboxDetails: false,
  articleBackwardCheckboxDetails: false,
  articlePassengerCheckboxDetails: false,
};

const checkboxDetailsSlice = createSlice({
  name: 'checkboxDetails',
  initialState,
  reducers: {
    setArticleForwardCheckboxDetails: (state, action) => {
      state.articleForwardCheckboxDetails = action.payload;
    },
    setArticleBackwardCheckboxDetails: (state, action) => {
      state.articleBackwardCheckboxDetails = action.payload;
    },
    setArticlePassengerCheckboxDetails: (state, action) => {
      state.articlePassengerCheckboxDetails = action.payload;
    },
  },
});

export const {
  setArticleForwardCheckboxDetails,
  setArticleBackwardCheckboxDetails,
  setArticlePassengerCheckboxDetails,
} = checkboxDetailsSlice.actions;

export default checkboxDetailsSlice.reducer;
