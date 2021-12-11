import React from "react";
import { Button, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import "./Overview.css";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "#21c070",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));
function Overview() {
  const history = useHistory();
  const classes = useStyles();
  return (
    <div>
      <div className="header">
        <h1 className="title">Course Overview</h1>
        <Button
          variant="contained"
          color="secondary"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() => history.push("/courses/addOverview")}
        >
          Add Overview
        </Button>
      </div>
      <div className="main-content">
        <div className="show-search">
          <div className="entries">
            <label for="pet-select">Show</label>
            <select name="pets" id="pet-select">
              {Array.from(new Array(10), (x, i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
            <span>entries</span>
          </div>
          <div className="search-field">
            <span>Search:</span>
            <input type="search" className="search" />
          </div>
        </div>
        <div className="overview-table">
          <table>
            <tr>
              <th>S No.</th>
              <th>Course Name</th>
              <th>Title</th>
              <th>Description</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            <tbody>
              <tr>
                <td>1</td>
                <td>React</td>
                <td>Lifecycle method</td>
                <td>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.{" "}
                </td>
                <td>Active</td>
                <td>abc</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Overview;
