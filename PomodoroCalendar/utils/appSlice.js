import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dayCount: 1, 
  timer:{
    secondsAlloc : 25 * 60,
    secondsLeft: 25 * 60,
    isRunning: false,
  },
  focusId: null,
  isDaySummary : true,
};

const appSlice = createSlice({

  name: 'app',
  initialState,

  reducers: {

    toggleCalValue: (state) => {
      state.dayCount = state.dayCount === 1 ? 7 : 1;
    },
    
    startTimer(state) {
      state.timer.isRunning = true;
    },
    
    stopTimer(state) {
      state.timer.isRunning = false;
    },

    decrementTimer(state) {
      if (state.timer.secondsLeft > 0) {
        state.timer.secondsLeft -= 1;
      } else {
        state.timer.isRunning = false;
      }
    },

    resetTimer(state) {
      state.timer.secondsLeft = state.timer.secondsAlloc;
      state.timer.isRunning = false;
    },

    editTimer(state,action) {
      state.timer.secondsAlloc = action.payload * 60;
      state.timer.secondsLeft = action.payload * 60;;
    },

    setFocusId(state,action) {
      state.focusId = action.payload 
    },

    resetFocusId(state) {
      state.focusId = null
    },

    toggleDaySummary(state) {
      state.isDaySummary = ! state.isDaySummary
    },

  },
});

export const { 
  toggleCalValue,
  startTimer,
  stopTimer, 
  decrementTimer, 
  resetTimer,
  editTimer,
  setFocusId,
  resetFocusId,
  toggleDaySummary,
} = appSlice.actions;
export default appSlice.reducer;
