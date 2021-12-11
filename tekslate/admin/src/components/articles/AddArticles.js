import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddArticles.css";
import Navbar from "./Navbar";
import ArticlesDetails from "./ArticlesDetails";
function AddArticles() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <ArticlesDetails/>
      </div>
    </div>
  );
}

export default AddArticles;
