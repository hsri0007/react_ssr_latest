import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Img1 from '../../../../asset/resource/google-2015-logo.svg'
import Img2 from '../../../../asset/resource/webflow-logo-black.svg'
import Img3 from '../../../../asset/resource/ibm-logo-blue-60-cmyk.svg'
import Img4 from '../../../../asset/resource/amazon-logo.svg'
import Img5 from '../../../../asset/resource/path.svg';
import Box from '@material-ui/core/Box';
import Img6 from '../../../../asset/resource/Icons/Live classes_1.svg'
import Img7 from '../../../../asset/resource/Icons/Self paced videos.svg'
import Img8 from '../../../../asset/resource/Icons/Lab sessions.svg'
import Img9 from '../../../../asset/resource/Icons/Live Projects.svg'
import Img10 from '../../../../asset/resource/Icons/24x7 Support.svg'
import Img11 from '../../../../asset/resource/Icons/Customizable_Curriculum.svg'
import Img12 from '../../../../asset/resource/Icons/Certification_assistance.svg'
import Img13 from '../../../../asset/resource/Icons/Job assistance.svg'
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";

const useStyles = makeStyles((theme) => ({
  section: {
    padding: "40px 0 0 0",
  },
  sideElement: {
    textAlign: "center",
    marginBottom: "30px",
    marginTop: "0px",
    fontSize: "20px",

  },
  content: {
    fontSize: "20px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
    },
    textAlign: "justify",
    lineHeight: "1.5",
    color: "#3a343a",
  },
  details: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    marginTop: '1rem',
    padding: '2rem 1.5rem',
    background: 'rgb(3 82 60)',
    color: '#fff',
    '& button': {
      color: '#fff',
      border: '1px solid #fff'
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: '100%',
    },
  },
  overviewBox: {
    marginBottom: '2rem', padding: '1rem', width: '100%',
    [theme.breakpoints.down("sm")]: {
      padding: 0
    },
  },
  barndNames: {
    display: 'grid',
    gridTemplateColumns: 'auto auto auto auto auto',
    justifyContent: 'space-between',
    width: '100%',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: 'auto auto auto',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: 'auto auto',
      // justifyContent: 'center'
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: 'auto',
      justifyContent: 'center'
    },
    '& img': {
      margin: '1rem 0',
      height: '2rem'
    }
  },
  highlights: {
    display: 'grid',
    marginTop: '2.5rem',
    gridTemplateColumns: 'auto auto auto auto',
    justifyContent: 'space-between',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: 'auto auto auto',
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: 'auto auto',
      justifyContent: 'space-around'
    },
    [theme.breakpoints.down("xs")]: {
      gridTemplateColumns: 'auto',
      justifyContent: 'center'
    },
  },
  detailHighlights: {
    display: 'flex',
    // border: '1px solid red',
    // padding: '1rem',
    marginBottom: '24px',
    '& > div:first-child': {
      // color: '#2491ef',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontSize: '30px',
      marginRight: '13px'
    },
    '& > div:last-child': {
      fontWeight: 600,
      fontSize: '14px',
      lineHeight: 2,
      color: '#000',
    }
  },
}));

export default function Overview() {
  const classes = useStyles();

  return (
    <div id="Overview">
      <section className={classes.section}>
        <Container>
          <HeadingsComponent first="Key" last='Highlights' />
          <Box className={classes.highlights}>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img6} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>
                60 Hrs Instructor Led Training
              </div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img7} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>
                80 Hrs Self-paced Videos
              </div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img8} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>
                120 Hrs Project & Exercises
              </div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img9} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>
                Certification
              </div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img10} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>
                Job Assistance
              </div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img11} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>
                Flexible Schedule
              </div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img12} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>Lifetime Free Upgrade</div>
            </div>
            <div className={classes.detailHighlights}>
              <div>
                <img src={Img13} alt='' style={{ height: '32px', width: '50px' }} />
              </div>
              <div>Mentor Support</div>
            </div>
          </Box>
        </Container>
        <Container>
          <div>
            <div className={classes.overviewBox}>
              <h1 style={{ marginBottom: 0 }}>	TekSlate corporate clients.</h1>
              <div className={classes.barndNames}>
                <div>
                  <img src={Img1} alt='' />
                </div>
                <div>
                  <img src={Img2} alt='' />
                </div>
                <div>
                  <img src={Img3} alt='' />
                </div>
                <div>
                  <img src={Img4} alt='' />
                </div>
                <div>
                  <img src={Img5} alt='' />
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div >
  );
}
