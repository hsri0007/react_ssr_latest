import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import ComputerIcon from '@material-ui/icons/Computer';
import { Box, Button, TextField } from "@material-ui/core";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";

const useStyles = makeStyles((theme) => ({
    section: {
        padding: "40px 0",
    },
    sideElement: {
        textAlign: "center",
        margin: 0,
        fontSize: "20px",
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
    text_justify: {
        textAlign: "justify",
    },
    trainingHeading: {
        textAlign: 'center',
        '& p': {
            width: '50%', margin: '0 auto',
            [theme.breakpoints.down('md')]: {
                width: '90%'
            }
        }
    },
    tableContent: {
        display: 'grid',
        gridTemplateColumns: '21% 36% 36%',
        width: '85%',
        margin: '0 auto',
        gridColumnGap: '1rem',
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: '50% 50%',
        },
        [theme.breakpoints.down("sm")]: {
            gridTemplateColumns: '100%',
        },
        '& table': {
            width: '100%',
            marginTop: "2rem",
        },
        '& td': {
            padding: '20px 13px',
            '& h2': {
                margin: 0,
                fontSize: '1rem'
            },
            '& p': {
                margin: 0
            }
        },
    },
    tableHeadings: {
        display: 'block',
        [theme.breakpoints.down("md")]: {
            display: 'none'
        },
    },
    specialTables: {
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        padding: '0.4rem',
        '& td': {
            fontWeight: 'bold',
            borderBottom: '1px solid #dcdbdb'
        }
    },
    firstTD: {
        display: 'flex',
        justifyContent: 'center',
        minHeight: '45px'
    },

}));

export default function TrainingOptions() {
    const classes = useStyles();

    return (
        <div id="Training_options">
            <section className={classes.section}>
                <Container>
                    <div className={classes.trainingHeading}>
                        <HeadingsComponent first='Training' last='Options' />
                        <h2 style={{ marginTop: '9px' }}>Different individuals. Different upgrade goals. Different modes of learning.</h2>
                        <p>We got solutions for everyone looking for an AWS Architect course. Opt in for your convenient upgrade option, and we will guide you through. </p>
                    </div>
                    <div className={classes.tableContent}>
                        <table className={classes.tableHeadings}>
                            <tr>
                                <td className={classes.firstTD} style={{ padding: '2.4rem 0' }}>
                                </td></tr>
                            <tr><td>Duration</td></tr>
                            <tr><td>One-on-one Session	</td></tr>
                            <tr><td>Support</td></tr>
                            <tr><td>Fee</td></tr>
                            <tr><td>Resources</td></tr>
                            <tr><td>Time</td></tr>
                        </table>
                        <div>
                            <table className={classes.specialTables}>
                                <tr>
                                    <td className={classes.firstTD}>
                                        <div style={{ paddingRight: '1rem' }}>
                                            <ComputerIcon />
                                        </div>
                                        <div style={{ marginTop: '0.2rem' }}>
                                            <h2>Live Online.</h2>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td>30 Sessions</td></tr>
                                <tr><td>Yes</td></tr>
                                <tr><td>24x7</td></tr>
                                <tr><td>₹9999</td></tr>
                                <tr><td>Additional tips from the trainer</td></tr>
                                <tr>
                                    <td style={{ display: 'flex', flexDirection: 'column', padding: '0.9rem 10px', border: 0 }}>
                                        <p style={{ marginBottom: '0.3rem' }}>Sep 5th  07:00 PM  IST</p>
                                        <p>Sep 25th  07:00 PM  IST</p>
                                    </td>
                                </tr>
                            </table>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem' }}>
                                <Button variant='contained' color='primary'>Register Now</Button>
                            </div>
                        </div>
                        <div>
                            <table className={classes.specialTables}>
                                <tr>
                                    <td className={classes.firstTD}>
                                        <div style={{ paddingRight: '1rem' }}><OndemandVideoIcon /></div>
                                        <div style={{ marginTop: '0.2rem' }}>
                                            <h2>Self-Paced</h2>
                                        </div>
                                    </td>
                                </tr>
                                <tr><td>26 Videos</td></tr>
                                <tr><td>No</td></tr>
                                <tr><td>Weekdays & Working Hours</td></tr>
                                <tr><td>₹6666</td></tr>
                                <tr><td>NA</td></tr>
                                <tr><td style={{ border: 0, paddingBottom: '2rem' }}>NA</td></tr>

                            </table>
                            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.4rem' }}>
                                <Button variant='contained' color='primary'>Get Pricing</Button>
                            </div>
                        </div>
                    </div>
                </Container>

            </section>
        </div >
    );
}
