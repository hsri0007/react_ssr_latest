import React from 'react'
import HeadingsComponent from '../HeadingsComponent/HeadingsComponent';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, TextField } from '@material-ui/core';
import { useSelector } from "react-redux";
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    root: {
        width: "65%",
        margin: "0 auto",
        padding: '4rem 0 2rem 0',
        [theme.breakpoints.down("md")]: {
            width: '80%'
        },
        [theme.breakpoints.down("sm")]: {
            width: '95%'
        },
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
    inputDiv: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        [theme.breakpoints.down("sm")]: {
            flexDirection: 'column'
        },
    },
    firstInput: {
        margin: '0 1rem 1rem 0',
        [theme.breakpoints.down("sm")]: {
            margin: '0 0 1rem 0'
        },
    },
    secondInput: {},
    inputNumberDate: {
        display: 'grid',
        gridTemplateColumns: '51% 49%',
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: '100%',
        },
    },
    dateCustomStyle: {
        marginTop: '-3px',
        [theme.breakpoints.down("sm")]: {
            margin: '0 0 1rem 0'
        },
    },
    spamText: {
        fontSize: '0.8rem', textAlign: 'center',
        // [theme.breakpoints.down("sm")]: {
        //     flexDirection: 'column'
        // },
    }
}));

const CourseForm = () => {
    const classes = useStyles();
    const { data } = useSelector((state) => state.course);
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [age, setAge] = React.useState(10);

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    return (
        <div className={classes.root}>
            <Container>
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                    <HeadingsComponent first={`Join a Free ${data.overview.course}`} last='Demo Session' />
                    <p>
                        See if this course is a fit for you by joining us for an online info session. You’ll meet our team, get an overview of the curriculum and course objectives, and learn about the benefits of being a student at Tekslate
                    </p>
                </div>

                <div>
                    <form className={classes.formBox}>
                        <div className={classes.inputDiv}>
                            <TextField id="filled-basic" size='small' label="First Name" fullWidth variant="standard" className={classes.firstInput} />
                            <TextField id="filled-basic" size='small' label="Last Name" fullWidth variant="standard" className={classes.secondInput} style={{ marginBottom: '1rem' }} />
                        </div>
                        <div className={classes.inputNumberDate}>
                            <div style={{ display: 'flex' }}>
                                {/* <FormControl className={classes.formControl}> */}
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={age}
                                    onChange={handleChange}
                                    defaultValue={10}
                                    style={{ marginBottom: '1rem' }}
                                >
                                    <MenuItem value={10}>+1</MenuItem>
                                    <MenuItem value={20}>+91</MenuItem>
                                    <MenuItem value={30}>+354</MenuItem>
                                </Select>
                                {/* </FormControl> */}
                                <TextField id="filled-basic" size='small' label="Phone" fullWidth variant="standard" className={classes.firstInput} />
                            </div>
                            <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="inline"
                                    format="MM/dd/yyyy"
                                    margin="normal"
                                    id="date-picker-inline"
                                    label="Select your demo date"
                                    fullWidth
                                    className={classes.dateCustomStyle}
                                    value={selectedDate}
                                    onChange={handleDateChange}
                                    KeyboardButtonProps={{
                                        'aria-label': 'change date',
                                    }}
                                />
                            </MuiPickersUtilsProvider>
                        </div>
                        <div className={classes.inputDiv}>
                            <TextField
                                id="Message"
                                label="Message"
                                multiline
                                size='small'
                                rows={5}
                                style={{ marginBottom: '1rem' }}
                                // defaultValue="Default Value"
                                variant="standard"
                                fullWidth
                            />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', padding: '1rem 0' }}>
                            <Button variant='contained' color='primary' >CONTACT US</Button>
                        </div>
                        <div className={classes.spamText}>
                            By providing us with your details, We wont spam your inbox.
                        </div>
                    </form>
                </div>
            </Container>

        </div>
    )
}

export default CourseForm
