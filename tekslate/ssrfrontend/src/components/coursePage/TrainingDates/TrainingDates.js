import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, TextField } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useSelector } from "react-redux";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import moment from 'moment';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import Calendar from '../../../../asset/resource/calendar.png';
import Learning from '../../../../asset/resource/learning.svg';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    section: {
        paddingBottom: "40px",
        width: '90%',
        margin: '0 auto',
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    trainingDates: {
        display: 'grid',
        gridTemplateColumns: 'auto auto auto',
        justifyContent: 'space-evenly',
        padding: '0 1rem',
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: 'auto auto',
            justifyContent: 'space-around',
        },
        [theme.breakpoints.down("xs")]: {
            gridTemplateColumns: 'auto',
        },
        '& > div': {
            position: 'relative',
            marginBottom: '1.5rem',
            padding: '3rem 3rem',
            borderRadius: '8px',
            background: '#e0e0e0',
            boxShadow: '0 2px 8px 0 rgb(0 0 0 / 25%)'
        }
    },
    timeRibbons: {
        position: 'absolute',
        top: 0,
        left: 0,
        padding: '0.5rem 1.5rem 0.5rem 0.5rem',
        background: 'black',
        borderTopLeftRadius: '8px',
        color: 'white',
        clipPath: 'polygon(100% 0, 83% 51%, 100% 99%, 0 100%, 0 0)'
    },
    singleDate: {
        '&:hover': {
            cursor: 'pointer'
        }
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
        padding: '1rem',
        borderRadius: '4px',
        boxShadow: theme.shadows[5],
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: 'auto',
        },
        '& > div:first-child': {
            background: '#f7faf7',
            '& p': {
                display: 'flex',
                alignItems: 'center',
            }
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

export default function TrainingDates() {
    const classes = useStyles();
    const { data } = useSelector((state) => state.course);
    // console.log(data);
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div id="Training_dates">
            <section className={classes.section}>
                <Container>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                        <h2>{data.overview.course} Upcoming Batches</h2>
                        <FormControl className={classes.formControl}>
                            <InputLabel id="demo-simple-select-label">Country</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={handleChange}
                            >
                                <MenuItem value={10}>India</MenuItem>
                                <MenuItem value={20}>USA</MenuItem>
                                <MenuItem value={30}>Australia</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                    <div className={classes.trainingDates}>
                        {data.demo_dates.map((c, i) => (
                            <div className={classes.singleDate} onClick={handleOpen}>
                                <div className={classes.timeRibbons}>
                                    {c.batch_type}
                                </div>
                                <div style={{ paddingBottom: '0.8rem' }}>{moment(c.demo_date).format('ll')} to {addMonthDate(c.demo_date)}</div>
                                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#424242', fontSize: '0.9rem' }}>
                                    <div><AccessTimeIcon /></div>
                                    <div style={{ marginLeft: '0.5rem' }}>
                                        {moment(new Date(c.demo_date)).format('h:mm A')}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                        <div style={{ padding: '1rem' }}>
                            <img src={Calendar} alt='calendar' height="100px" width='100px' />
                        </div>
                        <div>
                            <p>Schedules Doesn't Suit You ?</p>
                            <p>
                                Our Team can set up a batch at your convinient time.
                            </p>
                            <div>
                                <Button variant='contained' color='primary' onClick={handleOpen}>LET US kNOW</Button>
                            </div>
                        </div>
                    </div>
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

                </Container>
            </section>
        </div>
    );
}

function addMonthDate(data) {
    let date = new Date(data);
    let newDate = date.setMonth(date.getMonth() + 1)
    return moment(newDate).format('ll')
}
