import { Container, Button } from "@material-ui/core";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import AboutBG from '../../../asset/resource/about_bg.png'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    maintext: {
        color: ' #fff',
        fontSize: '40px',
        fontWeight: '500',
        margin: 'auto',
        [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
        },
    },

    
desp: {
    fontSize: "16px",
    color: "white",
},

    bannerbg: {
        backgroundImage: `url(${AboutBG})`,
        backgroundPosition: "center center",
        minHeight: "300px",
        backgroundSize: "cover",
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
        '&:hover': {
            borderColor: '#003fc2',
            backgroundColor: '#003fc2',
        },
    },

    btnArrow: {
        fontSize: "16px",
        marginLeft: "10px"
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
    }
}));


const Banner = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.bannerbg}>
                <Container maxWidth="md">
                    <Grid container spacing={3}>
                        <Grid item lg={12} md={12} sm={12} xs={12}>
                            <h2 className={classes.maintext}>The Digital Learning Company</h2>
                            <p className={classes.desp}>Premium digital skills training for the future of work.</p>
                            <Button className={classes.btn}>Join us <ArrowForwardIosIcon className={classes.btnArrow} /></Button>

                        </Grid>
                    </Grid>
                </Container>
            </section>
        </div>
    )
}

export default Banner
