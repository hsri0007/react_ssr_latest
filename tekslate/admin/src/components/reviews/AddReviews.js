import React from "react";
import SideNavbar from "./SideNavbar";
import "./AddReviews.css";
import Navbar from "./Navbar";
import ReviewsDetails from "./ReviewsDetails";
function AddReviews() {
  return (
    <div className="admin">
        <SideNavbar />
      <div className="course-details">
        <Navbar/>
        <ReviewsDetails/>
      </div>
    </div>
  );
}

export default AddReviews;
