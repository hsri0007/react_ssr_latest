import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddCertification.css";
import Navbar from "./Navbar";
import CertificationDetails from "./CertificationDetails";
function AddCertification() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <CertificationDetails/>
      </div>
    </div>
  );
}

export default AddCertification;
