import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Container, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Banner from '../../../asset/resource/banner.jpg'

const useStyles = makeStyles((theme) => ({
  maintext: {
    color: "#ffcf00",
    fontSize: "64px",
    fontWeight: "500",
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
      padding: "30px 0px",
    },
  },

  bannerbg: {
    backgroundImage: `url(${Banner})`,
    minHeight: "540px",
    display: "flex",
    alignItems: "center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    [theme.breakpoints.down("sm")]: {
      minHeight: "400px",
      fontSize: "24px",
      padding: "30px 0px",
    },
  },

  caption: {
    fontSize: '18px',
    fontWeight: '600',
    color: 'white',
},


btn: {
  textTransform: 'inherit',
  border: '1px solid #1358db',
  borderRadius: '3px',
  backgroundColor: "#1358db",
  padding: "8px 30px",
  display: "inline-flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: 'center',
  fontSize: '16px',
  fontWeight: "600",
  fontStyle: "normal",
  textAlign: "center",
  color: "#fff",
  marginTop: "50px",
  '&:hover': {
    borderColor: '#003fc2',
    backgroundColor: '#003fc2',
 },
},

btnArrow: {
  fontSize: "16px",
  marginLeft: "10px"
}

}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <section className={classes.bannerbg}>
        <Container maxWidth="md">
          <Grid container spacing={3}>
            <Grid style={{ margin: "auto" }} item lg={12} md={12} sm={12} xs={12}>
              <h1 className={classes.maintext}>
                Be Future Proof
              </h1>
              <p className={classes.caption}>Premium Digital Skills Training for the Future of Work</p>
              <Button className={classes.btn}>Browse courses <ArrowForwardIosIcon className={classes.btnArrow} /></Button>
            </Grid>
          </Grid>
        </Container>
      </section>
    </React.Fragment>
  );
}
