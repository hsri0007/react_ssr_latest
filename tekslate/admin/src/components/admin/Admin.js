import React from "react";
import MainTable from "./MainTable";
import SideNavbar from "./SideNavbar";
import "./Admin.css";
function Admin() {
  return (
    <div className="admin">
      {/* <div className="table"> */}
        <SideNavbar />
        <MainTable />
      {/* </div> */}
    </div>
  );
}

export default Admin;
