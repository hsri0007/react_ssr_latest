import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddCourse.css";
import Navbar from "./Navbar";
import CourseDetails from "./CourseDetails";
function AddCourse() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <CourseDetails/>
      </div>
    </div>
  );
}

export default AddCourse;
