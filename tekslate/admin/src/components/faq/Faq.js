import React from "react";
import MainTable from "./MainTable";
import SideNavbar from "./SideNavbar";
import "./Faq.css";
import Navbar from "./Navbar";
function Faq() {
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

export default Faq;
