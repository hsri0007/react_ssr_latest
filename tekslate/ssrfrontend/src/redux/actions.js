import axios from "axios";
import { updateState } from "./reducers";

export const getUsers = (props) => async (dispatch) => {
  // console.log(props.substring(1));
  try {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    dispatch(updateState(data));
  } catch (error) {
    console.log(error);
  }
};
