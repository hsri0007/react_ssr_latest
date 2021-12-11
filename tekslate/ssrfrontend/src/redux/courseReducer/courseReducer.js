import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "home",
  initialState: {
    data: {},
    type: "",
    categories: [],
    courses: []
  },
  reducers: {
    updateState: (state, action) => {
      state.data = action.payload.course_info;
      state.type = action.payload.type;
      state.categories = action.payload.categories;
      state.courses = action.payload.courses;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateState } = counterSlice.actions;

export default counterSlice.reducer;
