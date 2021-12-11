import React from "react";
import "./SecondPage.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import GetAppIcon from "@material-ui/icons/GetApp";
const useStylesButton = makeStyles((theme) => ({
  button: {
    backgroundColor: "#ec1818",
    color: "white",
    width: "140px",
    height: "50px",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#ec1818",
    },
  },
}));
function SecondPage() {
  const classesButton = useStylesButton();
  return (
    <div className="secondPage">
      <div className="sticky-list">
        <div className="secondPage-left">
          <h4 className="sticky-title">Course details</h4>
          <ul>
            <li>
              <a href="#">Curriculum</a>
            </li>
            <li>
              <a href="#">Data prep week</a>
            </li>
            <li>
              <a href="#">Typical day</a>
            </li>
            <li>
              <a href="#">Career week</a>
            </li>
            <li>
              <a href="#">Community and tools</a>
            </li>
            <li>
              <a href="#">Hire our Alumni</a>
            </li>
            <li>
              <a href="#">Hire partners</a>
            </li>
            <li>
              <a href="#">Alumni Reviews</a>
            </li>
            <li>
              <a href="#">Campuses</a>
            </li>
          </ul>
        </div>
        <div className="sticky-button">
          <Button
            variant="contained"
            size="medium"
            style={{ color: "red" }}
            className={classesButton.button}
          >
            Apply Now
          </Button>
        </div>
      </div>
      <div className="secondPage-content">
        <h4 className="secondPage-content-title">OVERVIEW</h4>
        <h2 className="secondPage-content-heading">
          Join a <h2 className="unique">unique</h2> Data Science course
        </h2>
        <p className="secondPage-content-paragraph">
          Our full-time Data Science course gives you the skills you need to
          launch your career in a Data Science team in only 9 weeks. From Pandas
          to Deep Learning, you will finish the course knowing how to explore,
          clean and transform data into actionable insights and how to implement
          Machine Learning models from start to finish in a production
          environment, working in teams with the best-in-class tool belt.
        </p>
      </div>
    </div>
  );
}

export default SecondPage;
