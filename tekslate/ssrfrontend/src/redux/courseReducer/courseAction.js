import axios from "axios";
import { updateState } from "./courseReducer";
const config = require("../config.js");
const url = config.url;

export const getData = (props) => async (dispatch) => {
  console.log(props);
  var send_obj = {};
  if (props === '/allcourses') {
    try {
      const data = await axios.get(`${url}/categories`);
      const courses = await axios.get(`${url}/all-courses`);
      // console.log('**********this is data.data.cat[0]************: ', data.data.cat[0]);
      send_obj.course_info = {};
      send_obj.type = "";
      send_obj.categories = data.data.cat;
      send_obj.courses = courses.data.final_obj;
      dispatch(updateState(send_obj));
    } catch (error) {
      console.log(error);
    }
  } else {
    try {
      const d = await axios.get(
        `${url}/misc/pagetype?url_title=${props.substring(1)}`
      );
      const type = d.data.final_obj.type_d.type;

      if (type === "course") {
        const data = await axios.get(
          `${url}/course-home?url_title=${props.substring(1)}`
        );
        send_obj.course_info = data.data.final_obj;
      } else if (type === "articles") {
        const data = await axios.get(
          `${url}/tutorials/url?url_title=${props.substring(1)}`
        );
        send_obj.course_info = data.data.final_obj.article;
      }

      send_obj.type = type;
      send_obj.categories = [];
      dispatch(updateState(send_obj));
    } catch (error) {
      console.log(error);
    }
  }
};
