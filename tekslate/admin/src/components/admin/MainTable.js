import React, { useState, useEffect } from "react";
import "./MainTable.css";
import ReactPaginate from "react-paginate";
import authHeader from "../../services/auth-header";
const config = require("../config/config.js");

const { htmlToText } = require("html-to-text");
function MainTable() {
  const [courses, setCourses] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [interval, setInterval] = useState(5);

  const contPerPage = interval;
  const pagesVisited = pageNumber * contPerPage;

  useEffect(async () => {
    const response = await fetch("http://localhost:8000/admin/courses", {
      headers: authHeader(),
    });
    const data = await response.json();
    setCourses(data);
  }, [interval]);

  const [search, setSearch] = useState("");

  const handleSearch = async (e) => {
    setSearch(e.target.value);

    try {
      const resp = authHeader();
      const result = await fetch("http://localhost:8000/admin/courses/search", {
        method: "POST",
        body: JSON.stringify({ query: search }),

        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "x-access-token": resp["x-access-token"],
        },
      });
      const data = await result.json();
      console.log(data);
      setCourses(data);
    } catch (error) {
      console.log(error);
    }
  };

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  // console.log(pagesVisited);
  var fullData =
    courses.data && search === ""
      ? Object.fromEntries(
          Object.entries(courses.data).slice(
            parseInt(pagesVisited),
            parseInt(pagesVisited) + parseInt(interval)
          )
        )
      : courses.data;
  var arr = [];

  var lowEnd = 0;
  var highEnd = 100;
  var arr = [];
  while (lowEnd <= highEnd) {
    arr.push((lowEnd += 5));
  }
  return (
    <div>
      <div className="main-table">
        <div className="header">
          <div className="entries">
            <label for="pet-select">Show</label>
            <select
              name="pets"
              id="pet-select"
              onClick={(e) => setInterval(e.target.value)}
            >
              {arr.map((i) => (
                <option value={i}>{i}</option>
              ))}
            </select>
            <span>entries</span>
          </div>
          <div className="search-field">
            <span>Search:</span>
            <input
              type="text"
              placeholder="Enter query"
              name="search"
              value={search}
              onChange={(e) => handleSearch(e)}
              className="search"
            />
          </div>
        </div>
        <div className="table">
          <table className="courseTable">
            <tr className="course-row">
              <th className="course-heading">S No.</th>
              <th className="course-heading">Course Name</th>
              <th className="course-heading">Rating</th>
              <th className="course-heading">Description</th>
              <th className="course-heading">Status</th>
              <th className="course-heading">Action</th>
            </tr>
            <tbody>
              {fullData &&
                Object.entries(fullData).map((item) => (
                  <tr className="course-row">
                    <td className="data">{item[1].id}</td>
                    <td className="data">{item[1].course}</td>
                    <td className="data">{item[1].rating}</td>
                    <td className="data">
                      {htmlToText(item[1].description, { wordwrap: 150 })}
                    </td>
                    <td className="data">{item[1].status}</td>
                    <td className="data">abc</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="pagination">
        <div>
          <h4>Showing entries</h4>
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={Math.ceil(Object.size(courses.data) / interval)}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"previousBttn"}
          nextLinkClassName={"nextBttn"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}

export default MainTable;
