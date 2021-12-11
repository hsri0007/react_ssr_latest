import React from 'react';
import { Button, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Bg from '../../../asset/resource/hero_banner1.svg';
import { useSelector } from "react-redux";
import RatingComponent from "../RatingComponent/rating";
import GroupAddIcon from '@material-ui/icons/GroupAdd';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#9ed5f6',
    '& > div': {
      width: '90%',
      margin: '0 auto'
    }
  },
  banner: {
    display: 'grid !important',
    gridTemplateColumns: '50% 45%',
    justifyContent: 'space-between',
    height: '75vh',
    overflow: 'hidden',
    '& > div:first-child': {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    },
    '& p': {
      // fontSize: '1rem',
      margin: 0
    },
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: '100%',
      minHeight: '95vh !important',
    },
  },
  courseHeading: {
    marginBottom: '0.4',
    fontSize: '3rem',
    fontWeight: 'bold',
  },
  description: {
    margin: '0.5rem 0 1.8rem 0 !important',
    lineHeight: '1.4 !important'
  },
  bannerImg: {
    display: 'flex',
    justifyContent: 'end',
    height: '100%',
    [theme.breakpoints.down("sm")]: {
      display: 'none'
    },
  },
  bannersubText: {
    display: 'flex',
    alignItems: 'center',
    margin: '25px 0 0 0'
  },
  totalRating: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0 1rem 0.2rem 0',
    '& > div:last-child': {
      paddingTop: '0.6rem'
    }
  },
  totalEnrolled: {
    display: 'flex',
    justifyContent: 'center',
    // padding: '4px 1rem 0.2rem 0',
    '& > div:first-child': {
      paddingTop: '0.3rem'
    },
    '& > div:last-child': {
      padding: '0.5rem 0 0 0.4rem',
      fontWeight: 'bold'
    }
  }
}));

const CoursePage = () => {
  const classes = useStyles();
  const { data } = useSelector((state) => state.course);

  return (
    <div className={classes.root}>
      <Container>
        <div className={classes.banner}>
          <div>
            <p style={{ paddingBottom: '8px' }}>Online | Self-Paced | Corporate</p>
            <p className={classes.courseHeading}>
              {data.overview.course}
            </p>
            <p className={classes.description} dangerouslySetInnerHTML={{ __html: `${data.overview.description}` }} />
            <div>
              <Button variant="contained" color="primary">
                get started
              </Button>
            </div>
            <div className={classes.bannersubText}>
              <div className={classes.totalRating}>
                <div><RatingComponent value={data.overview.rating} /></div>
                <div>({data.overview.rating})</div>
              </div>
              <div className={classes.totalEnrolled}>
                <div>
                  <GroupAddIcon />
                </div>
                <div>
                  {data.overview.enrolled} Learners
                </div>
              </div>
            </div>
          </div>
          <div className={classes.bannerImg} >
            <img src={Bg} srcSet={`${Bg} 555w,${Bg} 480w,${Bg} 350w`} alt='banner' />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default CoursePage;
