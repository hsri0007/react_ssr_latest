import React, { useState, useEffect } from "react";
import "./MainTable.css";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import ReactPaginate from "react-paginate";

import EditIcon from "@material-ui/icons/Edit";
import authHeader from "../../services/auth-header";

import {
  FormControl,
  InputLabel,
  Select,
  TextField,
} from "@material-ui/core";
import { Button } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useHistory } from "react-router-dom";


const config = require("../config.js");
const url = config.url;
const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#ffffff",
    color: theme.palette.light,
    fontSize: 18,
    fontWeight: 600,
  },
  body: {
    fontSize: 17,
  },
}))(TableCell);

const useStyles2 = makeStyles((theme) => ({
  button: {
    color: "white",
    backgroundColor: "#21c070",
    "&:hover": {
      backgroundColor: "green",
    },
  },
}));
const StyledTableRow = withStyles((theme) => ({
  root: {
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

const useStyles = makeStyles((theme) => ({
  table: {
    Width: 100,
  },
  tableHead: {
    backgroundColor: theme.palette.action.hovers,
  },
}));

const { htmlToText } = require("html-to-text");
function MainTable() {
  const classes = useStyles();
  const classes2 = useStyles2();

  const [courses, setCourses] = useState({});
  const [pageNumber, setPageNumber] = useState(0);
  const [interval, setInterval] = useState(10);
  const [starting, setStarting] = useState(0);
  const contPerPage = interval;
  const pagesVisited = pageNumber * contPerPage;

  const [totalCount,setTotalCount] = useState(0);
  const [search, setSearch] = useState("");

  const history = useHistory();
  var isLogged = false;
  useEffect(() => {
    async function searchData() {
      const res = await fetch(`${url}/admin/author/search?limit=${interval}&offset=${(starting*interval)}`,{
        method: 'POST',
        body: JSON.stringify({ query: search }),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const data = await res.json();
      console.log(data);
      setCourses(data);
      setTotalCount(data.data.count);
      console.log(data.data.count);
    }

    async function fetchMyAPI(){
        const response = await fetch(`${url}/admin/author?limit=${interval}&offset=${(starting*interval)}`, {
        headers: authHeader(),
      });
      const data = await response.json();
      setCourses(data);
      console.log(data);
      console.log(data);
      isLogged = true;
    }
    async function fetchDataCount() {
      const res = await fetch(`${url}/admin/authorCount`)
      const countData = await res.json();
      setTotalCount(countData.count);
      // console.log("Count of data"+countData.count);
    }

    if(search==='')
    {
      fetchMyAPI()
      fetchDataCount()
    }
    else{
      searchData()
    }
   
  },[pageNumber,interval,search,totalCount]);

  // const handleSearch = async (e) => {
  //   setSearch(e.target.value);
  //   try {
  //     const token = authHeader();
  //     const result = await fetch(`${url}/admin/courses/search`, {
  //       method: "POST",
  //       body: JSON.stringify({ query: search }),
  //       headers: {
  //         "Content-Type": "application/json",
  //         "Access-Control-Allow-Origin": "*",
  //         "x-access-token": token["x-access-token"],
  //       },
  //     });
  //     const data = await result.json();
  //     console.log(data);
  //     setCourses(data);
  //     isLogged = true;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const changePage = async ({ selected }) => {
    console.log("Selected: "+selected);
    // setPageNumber(selected);
    setPageNumber(selected);
    setStarting(selected);
    // console.log("page Number: "+pageNumber)

    // const response = await fetch(`${url}/admin/courses?limit=${interval}&offset=${(selected*interval)+1}`, {
    //   headers: authHeader(),
    // });
    // const data = await response.json();
    // // setAllcourses(data);

    // setCourses(data);
  
    isLogged = true;
  };

  Object.size = function (obj) {
    var size = 0,
      key;
    for (key in obj) {
      if (obj.hasOwnProperty(key)) size++;
    }
    return size;
  };
  console.log(pagesVisited);
  var fullData;
  if(search==='')
  {
    fullData = courses.data;
  }
  else{
    fullData = courses.data.rows;
    // console.log(fullData);
  }
  // var fullData =
    // courses.data && !search
    //   ? Object.fromEntries(
    //       Object.entries(courses.data).slice(
    //         parseInt(pagesVisited),
    //         parseInt(pagesVisited) + parseInt(interval)
    //       )
    //     )
    //   : courses.data;

  // var 
  var arr = [];

  var lowEnd = 0;
  var highEnd = 20;
 
  while (lowEnd <= highEnd) {
    arr.push((lowEnd += 5));
  }
  

  return (
    <div className="main-table">
      <div className="upper">
        <h2 className="heading">View Author</h2>
        <div>
          <Button
            variant="contained"
            color="secondary"
            className={classes2.button}
            startIcon={<AddIcon />}
            onClick={() => history.push("/author/addAuthor")}
          >
            Add Author
          </Button>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <div className="entries">
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel htmlFor="outlined-age-native-simple">
                Entries
              </InputLabel>
              <Select
                style={{
                  width: "170%",
                  height: "90%",
                  backgroundColor: "#fcfcfc",
                }}
                native
                value={interval}
                onChange={(e) => setInterval(e.target.value)}
                label="Entries"
                inputProps={{
                  name: "Entries",
                  id: "outlined-age-native-simple",
                }}
              >
                {/* <option value={30}>Thirty</option> */}
                {/* {arr.map((i) => <MenuItem value={i}>{i}</MenuItem>)} */}
                {arr.map((i) => (
                  <option value={i}>{i}</option>
                ))}
              </Select>
            </FormControl>
          </div>
          <div className="search-field">
            <TextField
              id="outlined-search"
              label="Search field"
              type="search"
              variant="outlined"
              placeholder="Enter query"
              name="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search"
              size="small"
              style={{ backgroundColor: "#fcfcfc" }}
            />
          </div>
        </div>
        <div className="tables">
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead style={{ backgroundColor: "red!important" }}>
                <TableRow className={classes.tableHead}>
                  <StyledTableCell align="center">S No.</StyledTableCell>
                  <StyledTableCell align="center">Designation</StyledTableCell>
                  <StyledTableCell align="center">Name</StyledTableCell>
                  <StyledTableCell align="center">Bio</StyledTableCell>
                  <StyledTableCell align="center">URL Title</StyledTableCell>
                  <StyledTableCell align="center">Status</StyledTableCell>
                  <StyledTableCell align="center">Action</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fullData &&
                  Object.entries(fullData).map((item) => (
                    <StyledTableRow key={item[1].id}>
                      <StyledTableCell align="center">
                        {item[1].id}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item[1].author_designation}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item[1].author_name}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {/* {htmlToText(item[1].description, { wordwrap: 150 })} */}
                        {item[1].author_bio}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item[1].author_url}
                      </StyledTableCell>
                      <StyledTableCell align="center">
                        {item[1].status===1?"Active":"In Active"}
                      </StyledTableCell>
                      <StyledTableCell align="center" className={item[1].id}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={() =>
                            history.push({
                              pathname: "/author/editAuthor",
                              state: { id: item[1].id },
                            })
                          }
                        >
                          <EditIcon />
                        </Button>
                      </StyledTableCell>
                    </StyledTableRow>
                  ))}
                {!fullData && (
                  <StyledTableRow>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center">...loading</StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                    <StyledTableCell align="center"></StyledTableCell>
                  </StyledTableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <div className="pagination">
            <div>
              <h4 className="entries-footer">
                Showing {pageNumber + 1} to {interval} of{" "}
                {Math.ceil(totalCount / interval)} entries
              </h4>
            </div>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={Math.ceil(totalCount / interval)}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainTable;
