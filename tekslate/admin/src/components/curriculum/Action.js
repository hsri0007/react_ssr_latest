import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import "./AddCurriculum.css";
import Navbar from "./Navbar";
import EditAction from "./EditAction";
import authHeader from "../../services/auth-header";
const config = require("../config.js");
const url = config.url;
function Action(props) {
  const token = authHeader();

  console.log("Action");
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetch(`${url}/admin/curriculum/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const d = await result.json();
      setData(d.curri_data[0]);
      // console.log(d.curri_data[0]);
    }
    fetchMyAPI();
    //   console.log(details)
    //   history.push({ pathname: "/courses/editAction",state: {data: d.data}})
  }, []);
  console.log("Action: " + data);
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
