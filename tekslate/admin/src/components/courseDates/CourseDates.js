import React from "react";
import MainTable from "./MainTable";
import SideNavbar from "./SideNavbar";
import "./CourseDates.css";
import Navbar from "./Navbar";
function CourseDates() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="table">
        <Navbar/>
        {/* <div className="main-table"> */}
          <MainTable />
        {/* </div> */}
      </div>
    </div>
  );
}

export default CourseDates;
