import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddCourseDates.css";
import Navbar from "./Navbar";
import CourseDatesDetails from "./CourseDatesDetails";
function AddCourseDates() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <CourseDatesDetails/>
      </div>
    </div>
  );
}

export default AddCourseDates;
