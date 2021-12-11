import axios from "axios";
import { updateState } from "./homeReducer";
const config = require("../config.js");
const url = config.url;
export const getUsers = (props) => async (dispatch) => {
  // console.log(props.substring(1));
  try {
    var up_data = {};
    const data_trending = await axios.get(`${url}/home/trending`);
    const data_popular = await axios.get(`${url}/home/popular`);

    up_data.trending = JSON.parse(JSON.stringify(data_trending.data.trends));
    up_data.popular = JSON.parse(JSON.stringify(data_popular.data.pops));
    dispatch(updateState(up_data));
  } catch (error) {
    console.log(error);
  }
};
