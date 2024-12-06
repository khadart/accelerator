

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedCardData: {
    title: "Number of Machines",
    value: 36,
    pieData: [
      { name: "HTTP Event Source", value: 6, color: "#0052CC" },
      { name: "Timer Event Source", value: 6, color: "#FDC500" },
      { name: "RV Event Source", value: 6, color: "#512DA8" },
      { name: "File Event Source 1", value: 6, color: "#FF6F00" },
      { name: "File Event Source 2", value: 6, color: "#43A047" },
      { name: "File Event Source 3", value: 6, color: "#F48FB1" },
    ],
  },
  timeForAccelerator: {
    title: "Time Takes For Accelerator",
    time: "36hr",
  },
};

const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    setSelectedCard(state, action) {
      state.selectedCardData = action.payload;
    },
    setAcceleratorTime(state, action){
    state.timeForAccelerator = action.payload;
    }
  },
});

export const { setSelectedCard ,setAcceleratorTime} = cardSlice.actions;
export default cardSlice.reducer;
