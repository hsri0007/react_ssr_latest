import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddAuthor.css";
import Navbar from "./Navbar";
import AuthorDetails from "./AuthorDetails";
function AddAuthor() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <AuthorDetails/>
      </div>
    </div>
  );
}

export default AddAuthor;
