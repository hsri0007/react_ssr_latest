import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { useSelector } from "react-redux";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  sideElement: {
    textAlign: "center",
    marginBottom: 0,
    marginTop: 0,
    // fontSize: "24px",
  },
  headtext: {
    marginTop: "0px",
    color: "#7b7b7b",
    fontWeight: "600",
    [theme.breakpoints.down("sm")]: {
      fontSize: "14px",
    },
  },
  subtext: {
    marginBottom: "0px",
    fontSize: "18px",
    fontWeight: "600",
    color: "#fc3d39",
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
  accordionStyles: {
    marginBottom: "0.4rem",
    boxShadow: "0 2px 13px 0 rgb(0 0 0 / 2%)",
    "&.MuiExpansionPanel-root:before": {
      display: "none",
    },
  },
  accordionDetailsStyles: {
    display: "flex",
    flexDirection: "column",
  },
  hideBorder: {
    "&.MuiExpansionPanel-root:before": {
      display: "none",
    },
  },
  section: {
    width: "65%",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      width: '80%'
    },
    [theme.breakpoints.down("sm")]: {
      width: '95%'
    },
  },
  heading: {
    '&:hover': {
      background: '#000',
      color: '#fff'
    },
    '&:hover svg': {
      color: '#fff'
    }
  }
}));

export default function Faqs({ value, coursedetails }) {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [toggle, setToggle] = useState(true);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const ReadMoreFunc = () => {
    setToggle(!toggle);
  };

  const check = toggle ? 2 : value.length;

  return (
    <div id="Faq__bar">
      <section className={classes.section}>
        <Container>
          <div className={classes.sideElement}>
            <HeadingsComponent first={coursedetails} last="FAQ'S" />
            <p style={{ paddingBottom: '1rem' }}>
              Have questions? We’ve got the answers. Get the details on how you
              can grow in this course.
            </p>
          </div>
          {/* <Grid container spacing={3}> */}
          <div style={{ padding: "1rem 0" }}>
            {value.map((c, i) => {
              return (
                i <= check && (
                  <Accordion
                    expanded={expanded === `panel${i}`}
                    onChange={handleChange(`panel${i}`)}
                    className={classes.accordionStyles}
                  >
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`panel${i}bh-content`}
                      id={`panel${i}bh-header`}
                      className={classes.heading}
                    >
                      <Typography className={classes.heading}>
                        {i + 1}. &nbsp; {c.faq_title}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails
                      className={classes.accordionDetailsStyles}
                    >
                      <Typography
                        dangerouslySetInnerHTML={{
                          __html: `${c.faq_description}`,
                        }}
                      />
                    </AccordionDetails>
                  </Accordion>
                )
              );
            })}
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={ReadMoreFunc}
              >
                {toggle ? "read more" : "read less"}
              </Button>
            </div>
          </div>
          {/* </Grid> */}
        </Container>
      </section>
    </div>
  );
}
