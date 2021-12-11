import React from "react";
import Banner from "../../components/blogPage/Banner";
import BlogContent from "../../components/blogPage/blogContent";
import SocialIcons from "../../components/blogPage/socialIcons";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";
import Sidebar from "../../components/blogPage/sidebar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    justifyContent: "space-between",
    padding: "60px 0px",
  },
  main: {
    // "width": "60%",
    // "height": "150vh"
  },
  sidebar: {
    height: "600px",
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    overflow: "auto",
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
  body: {
    backgroundColor: "#ccc",
    fontFamily: "sans-serif",
    padding: "10px",
  },
}));

// const Banner = loadable(() => import("../../components/contactPage/Banner"), {
//     ssr: true,
// });

const ContactPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Banner />
      <SocialIcons />
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            <BlogContent />
          </Grid>
        </Grid>
        <button></button>
      </Container>
    </div>
  );
};

export default ContactPage;
