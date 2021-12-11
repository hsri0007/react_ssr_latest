import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "home",
  initialState: {
    trending: [],
    popular: []
  },
  reducers: {
    updateState: (state, action) => {
      state.trending = action.payload.trending;
      state.popular = action.payload.popular;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateState } = counterSlice.actions;

export default counterSlice.reducer;
