import { Container, IconButton } from "@material-ui/core";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import React, { useRef, useState } from "react";
import loadable from "react-loadable-visibility/loadable-components";
import Slider from 'react-slick';
// const Slider = loadable(() => import("react-slick"), {
//   ssr: false,
// });
import CardSlide from "./CardDetails";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const useStyles = makeStyles((theme) => ({
  leftArrowStyles: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  rightArrowStyles: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  next_btn: {
    display: "none",
    [theme.breakpoints.down("md")]: {
      display: "block",
    },

    section: {
      padding: "16px 0",
      backgroundColor: "#fafafa",
    },

    maintext: {
      marginTop: "0px",
      marginBottom: "10px",
      fontSize: "30px",
      textAlign: "center",
      [theme.breakpoints.down("sm")]: {
        fontSize: "27px",
      },
    },
  },
}));

const CarouselComponent = ({ reviews, title }) => {
  const [activeSlide, setactiveSlide] = useState(0);
  const [activeSlide2, setactiveSlide2] = useState(0);
  const theme = useTheme();

  const slider = useRef();
  const classes = useStyles();

  function next() {
    slider.current.slickNext();
  }
  function previous() {
    slider.current.slickPrev();
  }

  const settings = {
    beforeChange: (current, next) => setactiveSlide(next),
    afterChange: (current) => setactiveSlide2(current),
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    // slidesToShow: reviews.length > 3 ? 3 : 1,
    slidesToScroll: 1,
    initialSlide: 0,
    // autoplay: true,
    // nextArrow: <ArrowForwardIosIcon style={{ color: '#000' }} />,
    // prevArrow: <ArrowBackIosIcon style={{ color: '#000' }} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: false,
          dots: false,
        },
      },
    ],
  };
  return (
    <section id="reviews" className={classes.section}>
      <div style={{ margin: "1rem 0px" }}>
        <Container>
          {/* <h2
            style={{
              marginTop: "0px",
              marginBottom: "30px !important",
              fontSize: "30px !important",
              textAlign: "center",
            }}
          >
            {title}
          </h2> */}
          <div
            style={{
              position: "relative",
            }}
          >
            <div
              className={classes.leftArrowStyles}
            // style={{ display: 3 >= reviews.length ? "none" : "block" }}
            >
              <IconButton
                style={{
                  position: "absolute",
                  zIndex: "2",
                  top: "38%",
                  left: 0,
                  marginLeft: "-4%",
                  color: "black",
                }}
                onClick={previous}
              >
                <ArrowBackIosIcon />
              </IconButton>
            </div>

            <Slider {...settings} ref={slider} style={{ minHeight: '390px' }}>
              {reviews.map((review, idx) => {
                return (
                  <div key={idx}>
                    <CardSlide review={review} idx={idx} />
                  </div>
                );
              })}
            </Slider>
            <div
              className={classes.rightArrowStyles}
            // style={{ display: 3 >= reviews.length ? "none" : "block" }}
            >
              <IconButton
                style={{
                  position: "absolute",
                  zIndex: "2",
                  top: "38%",
                  right: "0%",
                  marginRight: "-4.5%",
                  color: "black",
                }}
                className="button"
                onClick={next}
              >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Container>
        <div className={classes.next_btn}>
          <div style={{ display: "flex" }}>
            <IconButton
              style={{ marginLeft: "auto", outline: "none" }}
              className="button"
              onClick={previous}
            >
              <ArrowBackIosIcon />
            </IconButton>
            <p style={{ margin: "auto 10px", fontSize: "18px" }}>
              {Math.round(activeSlide + 1)}/{reviews.length}
            </p>
            <IconButton
              style={{ marginRight: "auto", outline: "none" }}
              className="button"
              onClick={next}
            >
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarouselComponent;
