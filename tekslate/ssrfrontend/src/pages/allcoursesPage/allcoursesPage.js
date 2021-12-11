import React from "react";
import Banner from "../../components/allcourses/Banner";
import Courses from "../../components/allcourses/Courses";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../../components/allcourses/sidebar";
import { makeStyles } from "@material-ui/core/styles";
import Doodle from "../../../asset/resource/doodle.svg";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "120px 0px 60px 0px",
  },
  main: {
    // "width": "60%",
    // "height": "150vh"
  },
  sidebar: {
    height: "600px",
    backgroundImage: `url(${Doodle})`,
    backgroundSize: "cover",
    boxShadow: "0 0 0 1px #e7e7e7, 0 2px 4px 0 rgb(0 0 0 / 10%)",
    backgroundRepeat: "no-repeat",
    // border: "1px solid #1358db",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    overflow: "auto",
    padding: "12px 24px !important",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  sidebar2: {
    top: "0",
    height: "600px",
    overflow: "auto",
    position: "fixed",
    width: "100%",
    zIndex: "1000",
    background: "white",
  },
}));

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const AllcoursesPage = () => {
  const classes = useStyles();

  const stat = useSelector((state) => state);
  const categories = stat.course.categories;
  const [state, setState] = React.useState({});
  const handleChange = (event) => {
    setState((prevState) => {
      if (!event.target.checked) {
        delete prevState[event.target.name];
        // console.log('*********this is state***********: ', prevState);
        return { ...prevState };
      } else {
        return { ...prevState, [event.target.name]: event.target.checked };
      }
      // return { ...prevState, [event.target.name]: event.target.checked };
    });
  };
  return (
    <div>
      <Banner />
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar categories={categories} state={state} handleChange={handleChange} />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            <Courses state={state} />
          </Grid>
        </Grid>
        <button></button>
      </Container>
    </div>
  );
};

export default AllcoursesPage;
