import { configureStore } from "@reduxjs/toolkit";
import courseReducer from "./courseReducer/courseReducer";
import homeReducer from "./homeReducer/homeReducer";
import counterReducer from "./reducers";

//server Side Redux store and configuration
export default () => {
  const Store = configureStore({
    reducer: {
      counter: counterReducer,
      home: homeReducer,
      course: courseReducer,
    },
  });

  return Store;
};
