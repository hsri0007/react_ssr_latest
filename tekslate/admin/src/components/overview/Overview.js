import React from "react";
import MainTable from "./MainTable";
import SideNavbar from "./SideNavbar";
import "./Overview.css";
import Navbar from "./Navbar";
function Overview() {
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

export default Overview;
