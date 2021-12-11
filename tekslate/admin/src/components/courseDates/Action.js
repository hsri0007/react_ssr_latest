import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import "./AddCourseDates.css";
import Navbar from "./Navbar";
import EditAction from "./EditAction";
import authHeader from "../../services/auth-header";
const config = require("../config.js");
const url = config.url;
function Action(props) {
  const token = authHeader();

  console.log("props in Action:" + props.id);
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetch(`${url}/admin/coursedate/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const d = await result.json();
      console.log("asdasd: " + d.cu_data);
      setData(d.cu_data);
      console.log("cu_data: " + data.cu_data);
    }
    fetchMyAPI();
    //   console.log(details)
    // history.push({ pathname: "/courseDates/editAction",state: {data: d.data}})
  }, []);
  return (
    <div className="admin">
      <SideNavbar />
      <div className="course-details">
        <Navbar />
        {Object.keys(data).length !== 0 && <EditAction data={data} />}
      </div>
    </div>
  );
}
export default Action;
