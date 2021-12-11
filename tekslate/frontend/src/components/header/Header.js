import React, { useState } from "react";
import "./Header.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import AirportShuttleIcon from "@material-ui/icons/AirportShuttle";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";

import clsx from "clsx";
import { useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const drawerWidth = 240;



const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  header:{
    display: "flex",
    flexDirection: "column"
  },
  navbar:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: "20px 100px"
  },
  bannerInfo:{
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    backgroundColor: "rgb(112, 123, 230)",
    width: "100%",
    height: "50px"
  },
  titleLink:{
    textDecoration: "none",
    color: "white",
  },
  navLeft:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "300px",
  },
  logo:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  navHeading:{
    listStyle: "none",
    textDecoration: "none",
    width: "60px",
    color: "gray",
    fontSize: "16px",
    fontWeight: "700",
  },
  dropdown:{
    listStyle: "none",
    textDecoration: "none",
    width: "100px",
    color: "black",
    fontSize: "16px",
    fontWeight: "400",
    textDecoration: "none",
    listStyle: "none",
    '&:hover':{
      backgroundColor: "rgb(247, 244, 241)",
      boxShadow: "rgba(206, 201, 201, 0.85) 0px 5px 10px",
      width: "100px"
    },
    '& ul li:hover $submenuCampuses':{
      display: "block",
      position: "absolute",
      textDecoration: "none",
      backgroundColor: "rgb(255, 255, 255)",
      padding: "30px",
      boxShadow: "rgba(206, 201, 201, 0.85) 0px 5px 10px"
    },
    '& ul li':{
      textDecoration: "none",
      listStyle: "none"
    },
    '& ul li a':{
      listStyle: "none",
      textDecoration: "none",
      width: "60px",
      color: "black",
      fontSize: "16px",
      fontWeight: "400"
    }
  },
  lists:{
    textDecoration: "none",
    listStyle: "none"
  },
  listsNavLeft:{
    display: "flex",
    flexDirection: "column",
    alignItems:"center",
    listStyle: "none",
    textDecoration: "none",
    width: "100px",
    color: "black",
    fontSize: "16px",
    fontWeight: "400"
  },
  submenuCampuses:{
    display: "none",
  },
  submenuCampusesLists:{
    '&hover':{
      submenuCampuses:{
        display: "block",
        position: "absolute",
        textDecoration: "none",
        backgroundColor: "rgb(255, 255, 255)",
        padding: "30px",
        boxShadow: "rgba(206, 201, 201, 0.85) 0px 5px 10px"
      }
    }
  },
  submenuTitle: {
    // display: "block"
    fontSize: "20px",
    color:"gray",
    fontWeight: "bold",
  },
  elements:{
    display: "flex",
    alignItems: "center",
    paddingLeft: "12px",
    height: "60px",
    width: "100px"
  },
  item:{
    padding:"10px",
    '&:hover':{
      backgroundColor: "rgb(247, 233, 231)"
    }
  },
  submenuName:{
    listStyle: "none",
    padding: "6px",
  },
  submenuTime:{
    listStyle: "none",
    padding: "6px",
  },
  navRight:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  headerMobile:{
    display: "none"
  },
  navbarLeftMobile:{
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    width: "300px"
  },
  logoMobile:{
    display: "flex",
        flexDirection: "row",
        alignItems: "center"
  },





  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-start",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

const useStylesButton = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
    size: 60,
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
    color: "red",
  },
}));
function Header() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [arrow, setArrow] = useState(false);
  const [arrowRight, setArrowRight] = useState(false);

  const classesButton = useStylesButton();
  return (
    <>
      <div className={classes.header}>
        <div className={classes.bannerInfo}>
          <p>
            <a href="#" className={classes.titleLink}>
              All our courses can be followed on-campus or from home.{" "}
              <strong>Learn more ></strong>
            </a>
          </p>
        </div>
        <nav className={classes.navbar}>
          <div className={classes.navLeft}>
            <div className={classes.logo}>
              <AirportShuttleIcon style={{ fill: "red", fontSize: 40 }} />
              <h2>Le wagon</h2>
            </div>

            <div className={classes.dropdown}>
              <ul className={classes.listsNavLeft}>
                <li className={classes.lists}>
                  <div
                    onMouseOver={() => setArrow(true)}
                    onMouseOut={() => setArrow(false)}
                  >
                    <div className={classes.elements}>
                      <a href="#" className={classes.navHeading}>
                        Courses
                      </a>
                      {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                    <div className={classes.submenuCampuses}>
                      <ul classname={classes.submenuCampusesLists}>
                        <li className={classes.submenuTitle}>Web development</li>
                        <div className={classes.item}>
                          <a href="#" className={classes.items}>
                            <li className={classes.submenuName}>
                              Web development Full-Time
                              <br />
                              <span className={classes.submenuTime}>9 Weeks</span>
                            </li>
                          </a>
                        </div>
                        <div className={classes.item}>
                          <a href="#">
                            <li className={classes.submenuName}>
                              Web development Part-Time
                              <br />
                              <span className={classes.submenuTime}>24 Weeks</span>
                            </li>
                          </a>
                        </div>
                        <li className={classes.submenuTitle}>Data Science</li>
                        <div className={classes.item}>
                          <a href="#">
                            <li className={classes.submenuName}>
                              Data Science Full-Time
                              <br />
                              <span className={classes.submenuTime}>9 Weeks</span>
                            </li>
                          </a>
                        </div>
                        <div className={classes.item}>
                          <a href="#">
                            <li className={classes.submenuName}>
                              Data Science Part-Time
                              <br />
                              <span className={classes.submenuTime}>24 Weeks</span>
                            </li>
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.navRight}>
            <Button
              variant="outlined"
              size="medium"
              color="primary"
              className={classesButton.margin}
            >
              Job reports
            </Button>
            <div className={classes.dropdown}>
              <ul className={classes.listsNavLeft}>
                <li className={classes.lists}>
                  <div
                    onMouseOver={() => setArrow(true)}
                    onMouseOut={() => setArrow(false)}
                  >
                    <div className={classes.elements}>
                      <a href="#" className={classes.navHeading}>
                        Events
                      </a>
                      {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                    <div className={classes.submenuCampuses}>
                      <ul classname={classes.submenuCampusesLists}>
                        <li className={classes.submenuTitle}>
                          Start your tech journey
                        </li>
                        <div className={classes.item}>
                          <a href="#" className={classes.items}>
                            <li className={classes.submenuName}>
                              Workshops and Masterclasses
                            </li>
                          </a>
                        </div>
                        <div className={classes.item}>
                          <a href="#">
                            <li className={classes.submenuName}>All events</li>
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div className={classes.dropdown}>
              <ul className={classes.listsNavLeft}>
                <li>
                  <div
                    onMouseOver={() => setArrow(true)}
                    onMouseOut={() => setArrow(false)}
                  >
                    <div className={classes.elements}>
                      <a href="#" className={classes.navHeading}>
                        Alumni
                      </a>
                      {arrow ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
                    </div>
                    <div className={classes.submenuCampuses}>
                      <ul classname={classes.submenuCampusesLists}>
                        <li className={classes.submenuTitle}>Discover our Alumni</li>
                        <div className={classes.item}>
                          <a href="#" className={classes.items}>
                            <li className={classes.submenuName}>Alumni Stories</li>
                          </a>
                        </div>
                        <div className={classes.item}>
                          <a href="#">
                            <li className={classes.submenuName}>Alumni Startups</li>
                          </a>
                        </div>
                        <div className={classes.item}>
                          <a href="#">
                            <li className={classes.submenuName}>Alumni Reviews</li>
                          </a>
                        </div>
                        <br />
                        <li className={classes.submenuTitle}>
                          Want to reach our Alumni
                        </li>
                        <div className={classes.item}>
                          <a href="#">
                            <li
                              className={classes.submenuName}
                              style={{ color: "red" }}
                            >
                              Hire our Alumni ->
                            </li>
                          </a>
                        </div>
                      </ul>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <Button
                variant="outlined"
                size="large"
                color="primary"
                className={classesButton.margin}
              >
                Apply now
              </Button>
            </div>
          </div>
        </nav>
      </div>
      <div className={classes.headerMobile}>
        <nav className={classes.navbarMobile}>
          <div className={classes.root}>
            <CssBaseline />
            <AppBar
              position="fixed"
              className={clsx(classes.appBar, {
                [classes.appBarShift]: open,
              })}
            >
              <Toolbar>
                <Typography variant="h6" noWrap className={classes.title}>
                  <div className={classes.navbarLeftMobile}>
                <div className={classes.logoMobile}>
                  <AirportShuttleIcon style={{ fill: "red", fontSize: 20 }} />
                  <h4>Le wagon</h4>
                </div>
              </div>
                </Typography>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  edge="end"
                  onClick={handleDrawerOpen}
                  className={clsx(open && classes.hide)}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <main
              className={clsx(classes.content, {
                [classes.contentShift]: open,
              })}
            >
              <div className={classes.drawerHeader} />
            </main>
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                  {theme.direction === "rtl" ? (
                    <ChevronLeftIcon />
                  ) : (
                    <ChevronRightIcon />
                  )}
                </IconButton>
              </div>
              <Divider />
              <List>
                {["Courses", "Events", "Alumni"].map(
                  (text, index) => (
                    <ListItem button key={text}>
                      <ListItemIcon>
                        {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
                )}
              </List>
              <Divider />
            </Drawer>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header;
