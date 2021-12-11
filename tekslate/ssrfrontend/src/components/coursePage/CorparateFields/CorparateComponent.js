import { Button, Container, TextField } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import React from 'react';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import HeadingsComponent from '../HeadingsComponent/HeadingsComponent';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Learning from '../../../../asset/resource/learning.svg';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    corporateMain: {
        width: '80%',
        margin: '0 auto',
        [theme.breakpoints.down("sm")]: {
            width: '100%',
        },
    },
    arrowStylePara: {
        display: 'flex',
        alignItems: 'center',
    },
    tableTekslate: {
        border: '1px solid #000',
        '& .MuiTableCell-head': {
            border: '1px solid #000'
        },
        '& .MuiTableCell-root': {
            borderWidth: '0 1px 1px 1px',
            borderStyle: 'solid',
            borderColor: "#000"
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

const CorparateComponent = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Container>
            <div style={{ textAlign: 'center', margin: '4rem 0 2rem 0' }}>
                <HeadingsComponent first='Corporates' last='Teams' />
            </div>
            <div className={classes.corporateMain}>
                <Button variant='outlined' color='primary' size='small' style={{ borderRadius: '2rem' }}>Transform Your Workforce</Button>
                <h2>Ramp up your teams React skills</h2>
                <p>Harness the power of React to increase speed to market, improve user experiences and decrease development costs. Empower your teams to ship innovative products on time and under budget.</p>
                <p className={classes.arrowStylePara}><ChevronRightIcon style={{ color: '#2a32c5' }} /> Upskill and reskill</p>
                <p className={classes.arrowStylePara}><ChevronRightIcon style={{ color: '#2a32c5' }} /> Assess and benchmark</p>
                <p className={classes.arrowStylePara}><ChevronRightIcon style={{ color: '#2a32c5' }} /> Get advanced learner insights</p>
                <p className={classes.arrowStylePara}><ChevronRightIcon style={{ color: '#2a32c5' }} /> Leverage immersive learning</p>
                <div>
                    <Button variant='contained' color='primary' endIcon={<ChevronRightIcon />} onClick={handleOpen}>Skill Up Your Teams</Button>
                </div>
            </div>

            <div style={{ margin: '6rem 0 2rem 0' }}>
                <div style={{ textAlign: 'center' }}>
                    <HeadingsComponent first='Why' last='TekSlate?' />
                </div>
                <div style={{ width: '80%', margin: '0 auto' }}>
                    <TableContainer>
                        <Table className={classes.tableTekslate} aria-label="TekSlate table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="left" style={{ fontWeight: 'bold', }}>Offerings</TableCell>
                                    <TableCell align="center" style={{ background: '#f0f0f0', fontWeight: 'bold' }} >TekSlate</TableCell>
                                    <TableCell align="center" style={{ fontWeight: 'bold' }}>Others</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.map((row) => (
                                    <TableRow key={row.offerings}>
                                        <TableCell align="left" component="th" scope="row">
                                            {row.offerings}
                                        </TableCell>
                                        <TableCell align="center"
                                            style={{ color: row.tekslate === 'Yes' ? 'green' : '', background: '#f0f0f0' }}>{row.tekslate}</TableCell>
                                        <TableCell align="center" style={{ color: row.others === 'No' ? 'red' : row.others === 'NA' ? 'red' : row.others === 'Yes' ? 'green' : '' }}>{row.others}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
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
                        <div>
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
    )
}

export default CorparateComponent;

function createData(offerings, tekslate, others,) {
    return { offerings, tekslate, others, };
}

const rows = [
    createData('Flexible learning', "Yes", 'Yes',),
    createData('Latest Curriculum', 'Yes', 'Yes',),
    createData('Custom Curriculum', 'Yes', 'No',),
    createData('Job Assurance', 'Yes', 'No',),
    createData('Personal Support Staff', 'Yes', 'No',),
    createData('User Rating', '4.7/5.0', 'Less than 4.5',),
    createData('Corporate Rating', '4.8/5.0', 'NA',),
    createData('Easy EMI', 'Yes', 'NA',),
    createData('Money Back Guraantee*', 'Yes', 'NA',),
];
