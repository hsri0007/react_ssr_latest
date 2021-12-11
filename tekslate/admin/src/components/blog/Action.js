import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import "./AddBlog.css";
import Navbar from "./Navbar";

import EditAction from "./EditAction";
import authHeader from "../../services/auth-header";
const config = require("../config.js");
const url = config.url;
function Action(props) {
  const token = authHeader();

  

  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchMyAPI() {
      const result = await fetch(`${url}/admin/blog/${props.id}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": token["x-access-token"],
        },
      });
      const d = await result.json();
      setData(d.blog_data);
      console.log(data);
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
