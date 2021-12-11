import React from 'react'
import Banner from '../../components/searchPage/banner'
import Courses from '../../components/searchPage/Courses'
import Grid from '@material-ui/core/Grid'
import { Container } from '@material-ui/core'
import Sidebar from '../../components/searchPage/sidebar'
import { makeStyles } from '@material-ui/core/styles';
import Doodle from '../../../asset/resource/doodle.svg'



const useStyles = makeStyles((theme) => ({
        wrapper: {
          "display": "flex",
          "justifyContent": "space-between",
          padding:"120px 0px 60px 0px"
        },
        main: {
          // "width": "60%",
          // "height": "150vh"
        },
        sidebar: {
          "height": "600px",
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
          [theme.breakpoints.down('sm')]: {
            display:"none",
          },
        },
        sidebar2:{
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

const searchPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Banner />
      <Container maxWidth="lg">
        <Grid className={classes.wrapper} container spacing={3}>
          <Grid className={classes.sidebar} item lg={3} md={3} sm={12} xs={12}>
            <Sidebar />
          </Grid>
          <Grid className={classes.main} item lg={9} md={9} sm={12} xs={12}>
            <Courses />
          </Grid>
        </Grid>
        <button></button>
      </Container>
    </div>
  );
};

export default searchPage;
