import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dayCount: 1, 
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    toggleCalValue: (state) => {
      state.dayCount = state.dayCount === 1 ? 7 : 1;
      console.log(state.dayCount)
    },
  },
});

export const { toggleCalValue } = appSlice.actions;
export default appSlice.reducer;
