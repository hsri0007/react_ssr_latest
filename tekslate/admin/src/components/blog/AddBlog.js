import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddBlog.css";
import Navbar from "./Navbar";
import BlogDetails from "./BlogDetails";
function AddBlog() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <BlogDetails/>
      </div>
    </div>
  );
}

export default AddBlog;
