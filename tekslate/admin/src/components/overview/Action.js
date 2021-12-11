import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import "./AddOverview.css";
import Navbar from "./Navbar";
import EditAction from "./EditAction";
import authHeader from "../../services/auth-header";
const config = require("../config.js");
const url = config.url;
function Action(props) {
  const token = authHeader();
  console.log("Props " + props.id);
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetch(`${url}/admin/overview/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const d = await result.json();
      setData(d.ov_data);
    }
    fetchMyAPI();
    // console.log("Overview Data: "+d);
    //   console.log(details)
    //   history.push({ pathname: "/courses/editAction",state: {data: d.data}})
  }, []);
  // console.log("Action: "+data)
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
