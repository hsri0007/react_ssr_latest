import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddFaq.css";
import Navbar from "./Navbar";
import FaqDetails from "./FaqDetails";
function AddFaq() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <FaqDetails/>
      </div>
    </div>
  );
}

export default AddFaq;
