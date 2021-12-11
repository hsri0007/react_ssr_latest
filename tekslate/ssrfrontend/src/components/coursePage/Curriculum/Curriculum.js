import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Button, TextField } from "@material-ui/core";
import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import { useSelector } from "react-redux";
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Learning from '../../../../asset/resource/learning.svg';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

const useStyles = makeStyles((theme) => ({
  root: (props) => {
    return {
      // color: theme.palette.primary.main,
      background: '#fff'
    };
  },

  section: {
    padding: "40px 0",
  },

  mainhead: {
    fontSize: "1rem",
    margin: 0,
    [theme.breakpoints.down("sm")]: {
      fontSize: "27px",
    },
  },
  text_justify: {
    textAlign: "justify",
  },
  curriculumBox: {
    display: 'grid',
    gridTemplateColumns: '50% 50%',
    minHeight: '50vh',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: '100%',
    },
  },
  mailBox: {
    display: 'grid',
    gridTemplateColumns: '60% 30%',
    background: 'rgb(42 50 197)',
    width: '80%',
    margin: '0 auto',
    padding: '1rem 0',
    borderRadius: '4px',
    color: '#fff',
    [theme.breakpoints.down("md")]: {
      gridTemplateColumns: '100%',
      width: '100%',
    },
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    background: '#fff',
    display: 'grid',
    gridTemplateColumns: '40% 60%',
    borderRadius: '4px',
    boxShadow: theme.shadows[5],
    [theme.breakpoints.down("sm")]: {
      gridTemplateColumns: 'auto',
    },
    '& > div:first-child': {
      padding: '1rem',
      background: '#f7faf7',
      '& p': {
        display: 'flex',
        alignItems: 'center',
      }
    },
    '& > div:last-child': {
      position: 'relative',
      margin: '1rem'
    }
  },
  modalForm: {
    marginTop: '2.5rem'
  },
  closebttn: {
    position: 'absolute',
    right: 0,
    '&:hover': {
      cursor: 'pointer'
    }
  },
  inputDiv: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '1rem',
  }
}));

export default function Curriculum() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel0');
  const [alignment, setAlignment] = React.useState('OnDemand');
  const { data } = useSelector((state) => state.course);
  const [open, setOpen] = React.useState(false);
  // console.log(data)

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAlignment = (event, newAlignment) => {
    if (newAlignment !== null)
    {
      setAlignment(newAlignment);
    }
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div id="Curriculum" style={{ background: '#f2eddf' }}>
      <section className={classes.section}>
        <Container>
          <div className={classes.curriculumBox}>
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <p className={classes.mainhead}>Curriculum</p>
              <p style={{ fontSize: '2.2rem', fontWeight: 'bold', marginTop: '1rem' }}>
                A complete index of<br /> job-ready skills
                curated <br /> to meet the industrial need.<br />  Explore.
              </p>
            </div>
            <div style={{ padding: '1rem 0', minHeight: '400px' }}>
              {data.curriculum.map((c, i) => {
                return <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} className={classes.accordionStyles}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${i}bh-content`}
                    id={`panel${i}bh-header`}
                  >
                    <Typography className={classes.heading}>{c.curriculum_title}</Typography>
                  </AccordionSummary>
                  <AccordionDetails style={{ display: 'flex', flexDirection: 'column', }}>
                    <Typography dangerouslySetInnerHTML={{ __html: `${c.curriculum_description}` }} />
                  </AccordionDetails>
                </Accordion>
              })}
            </div>
          </div>
        </Container>

        <Card className={classes.mailBox}>
          <div style={{ padding: '1.5rem' }}>
            <p style={{ margin: '0.5rem 0 0 0', fontSize: '1.2rem', fontWeight: 'bold', }}>We have made it tailored to serve every individuals learning desires. Let us know your specific mode of getting trained, and we’ll help you get the best.</p>
          </div>
          <div style={{ paddingTop: '1.5rem', display: 'flex', justifyContent: 'center' }}>
            <div>
              <Button variant="contained" style={{ margin: '1.2rem 0 0 1rem' }} startIcon={<CloudDownloadIcon />} onClick={handleOpen}>Download</Button>
            </div>
          </div>
        </Card>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <div>
                <ToggleButtonGroup
                  value={alignment}
                  exclusive
                  onChange={handleAlignment}
                  aria-label="text alignment"
                  style={{ border: '1px solid blue', marginTop: '1rem' }}
                >
                  <ToggleButton style={{ background: alignment === 'Online' ? 'blue' : 'white' }} size='small' value="Online" aria-label="Online">
                    <p style={{ margin: '0', color: alignment === 'Online' ? 'white' : 'blue' }} >Online</p>
                  </ToggleButton>
                  <ToggleButton style={{ background: alignment === 'OnDemand' ? 'blue' : 'white' }} size='small' value="OnDemand" aria-label="OnDemand" >
                    <p style={{ margin: '0', color: alignment === 'OnDemand' ? 'white' : 'blue' }} >On-Demand</p>
                  </ToggleButton>
                </ToggleButtonGroup>
                <h3>Customized Solutions For Your Teams</h3>
                <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> Upskill and reskill</p>
                <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> Assess and benchmark</p>
                <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> Get advanced learner insights</p>
                <p><ChevronRightIcon style={{ color: '#2a32c5' }} /> Leverage immersive learning</p>
                <div>
                  <img src={Learning} alt='learning' height="300px" width='auto' />
                </div>
              </div>
              <div style={{ position: 'relative' }}>
                <div className={classes.closebttn} onClick={handleClose}><CloseIcon /> </div>
                <h3>Request a Custom Quote for Corporate Training</h3>
                <p>Your Learning Advisor will get back to you within 24 hours</p>
                <form className={classes.modalForm}>
                  <div className={classes.inputDiv}>
                    <TextField id="outlined-basic" size='small' label="First Name" variant="outlined" style={{ marginRight: '1rem' }} />
                    <TextField id="outlined-basic" size='small' label="Last Name" variant="outlined" />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField id="outlined-basic" size='small' label="Email" variant="outlined" style={{ marginRight: '1rem' }} />
                    <TextField id="outlined-basic" size='small' label="Phone" variant="outlined" />
                  </div>
                  <div className={classes.inputDiv}>
                    <TextField
                      id="Message"
                      label="Message"
                      multiline
                      size='small'
                      rows={5}
                      // defaultValue="Default Value"
                      variant="outlined"
                      fullWidth
                    />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <Button variant='contained' color='primary' endIcon={<ChevronRightIcon />}>Get Custom Quote</Button>
                  </div>
                </form>
              </div>
            </div>
          </Fade>
        </Modal>
      </section>
    </div>
  );
}