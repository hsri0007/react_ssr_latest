import React, { useState, useEffect } from "react";
import SideNavbar from "./SideNavbar";
import "./AddArticles.css";
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
      const result = await fetch(`${url}/admin/article/${props.id}`, {
        method: "GET",
        headers: {
          "x-access-token": token["x-access-token"],
        },
      });
      const d = await result.json();
      setData(d.blog_data);
    }
    fetchMyAPI();
  }, []);

  return (
    <div className="admin">
      <SideNavbar />
      <div className="course-details">
        <Navbar />
        {console.log("Data: " + data)}
        {Object.keys(data).length !== 0 && <EditAction data={data} />}
      </div>
    </div>
  );
}
export default Action;
