import React from "react";
import MainTable from "./MainTable";
import SideNavbar from "./SideNavbar";
import "./Author.css";
import Navbar from "./Navbar";
function Author() {
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

export default Author;
