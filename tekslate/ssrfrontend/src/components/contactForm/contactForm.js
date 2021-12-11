import { Container, Button } from '@material-ui/core';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    maintext: {
        color: ' #fff',
        fontSize: '34px',
        fontWeight: '500',
        margin: 'auto',
        padding: '30px 0px',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },

    bannerbg: {
        background: '#101d42',
        padding: "60px 0px",
        display: 'flex',
        alignItems: 'center'
    },
    input: {
        background: 'white',
        color: 'black',
        width: '100%',
        borderRadius: '3px',
        div: {
            background: 'white !important',
            padding: '15px !important',
            borderRadius: '5px !important',
            color: 'black !important',
        }
    },

    textarea: {
        background: 'white',
        color: 'black',
        width: '100%',
        borderRadius: '3px',
        // height: '80px',
        overflow: 'hidden',
        padding: '10px',
        fontSize: '16px',
        fontFamily: 'inherit',
    },

    btn: {
        textTransform: 'inherit',
        border: '1px solid #1358db',
        borderRadius: '3px',
        backgroundColor: "#1358db",
        padding: "8px 30px",
        display: "inline-flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'center',
        fontSize: '16px',
        fontWeight: "600",
        fontStyle: "normal",
        textAlign: "center",
        color: "#fff",
        float:"right",
        '&:hover': {
          borderColor: '#003fc2',
          backgroundColor: '#003fc2',
       },
      },
      
      btnArrow: {
        fontSize: "16px",
        marginLeft: "10px"
      }
}));


const ContactForm = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.bannerbg}>
                <Container maxWidth="lg">
                    <Grid container spacing={3}>
                        <Grid style={{ margin: 'auto' }} item lg={6} md={6} sm={12} xs={12}>
                            <h2 className={classes.maintext}>Have questions about BrainStation?
                                Connect with us.</h2>
                        </Grid>
                        <Grid item lg={6} md={6} sm={12} xs={12}>
                            <form className={classes.root} noValidate autoComplete="off">
                                <Grid container spacing={3}>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextField
                                            className={classes.input}
                                            id="filled-textarea"
                                            label="First Name"
                                            multiline
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item lg={6} md={6} sm={12} xs={12}>
                                        <TextField
                                            className={classes.input}
                                            id="filled-textarea"
                                            label="Last Name"
                                            multiline
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextField
                                            className={classes.input}
                                            id="filled-textarea"
                                            label="Email"
                                            multiline
                                            variant="filled"
                                        />
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                        <TextareaAutosize className={classes.textarea} aria-label="minimum height" rowsMin="3" placeholder="Message" />;
                                    </Grid>
                                    <Grid item lg={12} md={12} sm={12} xs={12}>
                                    <Button className={classes.btn}>Submit <ArrowForwardIosIcon className={classes.btnArrow} /></Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}

export default ContactForm
