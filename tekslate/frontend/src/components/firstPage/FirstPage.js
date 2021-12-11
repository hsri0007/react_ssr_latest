import React from "react";
import "./FirstPage.css";
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
    width: "130px",
    height: "40px",
    fontWeight: "900",
    "&:hover": {
      backgroundColor: "#ec1818",
    },
  },
}));
function FirstPage() {
  const classesButton = useStylesButton();
  return (
    <div className="firstPage-outer">
      <div className="outer-container">
        <div className="left">
          <h2 className="course-name">Data Science course</h2>
          <h3 className="course-time">Full-time (9 weeks)</h3>
          <p className="paragraph">
            In 9 intensive weeks, learn Data Science from Python to advanced
            Machine Learning, code your own data applications and boost your
            career.
          </p>
          <div className="left-inner">
            <Button
              variant="contained"
              size="small"
              style={{ color: "red" }}
              className={classesButton.button}
            >
              Apply Now
            </Button>
            <div className="syllabus">
              <GetAppIcon style={{ color: "red" }} />
              <span>
                <a href="#" className="download-syllabus">
                  Download syllabus
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="right">
          <img
            src="https://res.cloudinary.com/wagon/image/upload/c_fill,h_700,q_auto,w_600/v1579285267/fxygnsczearwh27hxags.webp"
            width="500"
            height="600"
          />
        </div>
      </div>
    </div>
  );
}

export default FirstPage;
