import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: "100px 10px",
  },
  title: {
    fontSize: 45,
    color: "blue",
  },
  pos: {
    marginBottom: 12,
  },
  header: {
    fontSize: "40px",
    borderBottom: "2px solid yellow",
    "@media (max-width: 800px)": {
      marginLeft: '10px',
      fontSize: "32px",
    }
  },
  cards: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-evenly",
    margin: "100px",
    "@media (max-width: 800px)": {
      flexDirection: "column",
    }
  },
  lastPage: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    backgroundColor: "#eff3f6",
    width: "100%",
    margin: "150px 0px",
    "@media (max-width: 800px)": {
      margin: "90px 0px",
    }

  },
  card: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderTop: "4px solid blue",
  },
  lastPageFooter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  lastPageHeader: {
    fontSize: "35px",
    color: "black",
    borderBottom: "2px solid yellow",
    "@media (max-width: 800px)": {
      fontSize: "29px",
      maginBottom: "60px",
      marginLeft: "10px"
     }
  },
  lastSectionRoot: {
    display: "flex",
    flexDirection: "row",
    width: "55%",
    marginBottom: "100px",
    backgroundColor: "#f5f5f0",
    "@media (max-width: 800px)": {
      width: "95%",
      marginTop: "30px",
      padding: "30px 0px",
      display: "flex",
      flexDirection: "column"
    }

  },
  lastSectioncard: {
    width: "80%",
    padding: "50px",
    "@media (max-width: 800px)": {
      width: "100%",
      padding: "0px",
    }
  },
   lastSectioncardSecond: {
    width: "30%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 800px)": {
      width: "100%"
    }
    
  },
  lastSectionTitle: {
    fontSize: '30px',
    color: 'blue',  
    "@media (max-width: 800px)": {
      fontSize: '27px',
      marginLeft: '10px'
    }
  },
  lastSectionfooter:{
    paddingLeft:"10px"
  }
});
function courseLastPage() {
  const classes = useStyles();

  return (
    <>
      <div class={classes.lastPage}>
        <h1 className={classes.header}>
          Web Development is In-Demand and Growing
        </h1>
        <div className={classes.cards}>
          <Card className={classes.root}>
            <CardContent className={classes.card}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                1.3m+
              </Typography>
              <Typography
                className={classes.footer}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardContent className={classes.card}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                47k+
              </Typography>
              <Typography
                className={classes.footer}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
          <Card className={classes.root}>
            <CardContent className={classes.card}>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                #1
              </Typography>
              <Typography
                className={classes.footer}
                color="textSecondary"
                gutterBottom
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className={classes.lastPageFooter}>
        <h1 className={classes.lastPageHeader}>
          Courses Related to Coding Bootcamps
        </h1>
        <Card className={classes.lastSectionRoot}>
          <CardContent className={classes.lastSectioncard}>
            <Typography
              className={classes.lastSectionTitle}
              color="textSecondary"
              gutterBottom
            >
              Web Development Course
            </Typography>
            <Typography
              className={classes.lastSectionfooter}
              color="textSecondary"
              gutterBottom
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </Typography>
          </CardContent>
          <CardContent className={classes.lastSectioncardSecond}>
            <Button variant="outlined" color="primary">
              View Course
            </Button>
          </CardContent>
        </Card>
      </div>
    </>
  );
}

export default courseLastPage;
