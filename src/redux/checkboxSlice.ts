import { createSlice } from '@reduxjs/toolkit';

interface IInitialState {
  articleForwardCheckbox: boolean;
  articleBackwardCheckbox: boolean;
}

const initialState: IInitialState = {
  articleForwardCheckbox: false,
  articleBackwardCheckbox: false,
};

const checkboxSlice = createSlice({
  name: 'checkbox',
  initialState,
  reducers: {
    setArticleForwardCheckbox: (state, action) => {
      state.articleForwardCheckbox = action.payload;
    },
    setArticleBackwardCheckbox: (state, action) => {
      state.articleBackwardCheckbox = action.payload;
    },
  },
});

export const { setArticleForwardCheckbox, setArticleBackwardCheckbox } =
  checkboxSlice.actions;

export default checkboxSlice.reducer;
