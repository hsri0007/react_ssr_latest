import React from "react";
import MainTable from "./MainTable";
import SideNavbar from "./SideNavbar";
import "./Reviews.css";
import Navbar from "./Navbar";
function Reviews() {
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

export default Reviews;
