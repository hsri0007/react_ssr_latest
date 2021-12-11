import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddCurriculum.css";
import Navbar from "./Navbar";
import CurriculumDetails from "./CurriculumDetails";
function AddCurriculum() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <CurriculumDetails/>
      </div>
    </div>
  );
}

export default AddCurriculum;
