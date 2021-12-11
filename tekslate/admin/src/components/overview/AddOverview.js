import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddOverview.css";
import Navbar from "./Navbar";
import OverviewDetails from "./OverviewDetails";
function AddOverview() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <OverviewDetails/>
      </div>
    </div>
  );
}

export default AddOverview;
