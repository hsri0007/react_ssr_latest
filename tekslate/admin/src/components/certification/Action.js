import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import "./AddCertification.css";
import Navbar from "./Navbar";
import EditAction from "./EditAction";

import authHeader from "../../services/auth-header";
const config = require("../config.js");
const url = config.url;
function Action(props) {
  const token = authHeader();

  console.log("Action: "+props.id);

  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetch(`${url}/admin/certification/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const d = await result.json();
      setData(d.curri_data[0]);
    }
    fetchMyAPI();

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
