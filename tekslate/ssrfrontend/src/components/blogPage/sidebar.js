import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },

    section: {
        padding: '20px 0px'
    },
    heading: {
        fontSize:"14px",
        display:"block",
        fontWeight: "500",
    },

    title: {
        textAlign: "center",
        fontSize: "20px",
        margin: "10px 0px 15px 0px",
        fontWeight: "600"
    },

    accordion: {
        boxShadow: "none",
        borderBottom: "1px solid #ececec",
    },

    ul: {
        listStyle: "none",
        paddingLeft: "10px",
        margin: "0px",    
    },

    
a:{
    fontSize: "14px",
    textDecoration: "none",
    color: "#585858",
    margin: "10px 0px",
},

    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
    // categoryCard:{
    //     display:"block",
    // },

}));


const Sidebar = () => {
    const classes = useStyles();
    return (
        <div>
            <section className={classes.section}>
                <h4 className={classes.title}>Related Blogs</h4>
                <div>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.categoryCard}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Business Process Management Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.ul}>
                                <li><a className={classes.a} href="">Oracle BPM Training</a></li>
                                <li><a className={classes.a} href="">Oracle Workflow Training</a></li>
                                <li><a className={classes.a} href="">Appian Training</a></li>
                                <li><a className={classes.a} href="">IBM BPM Training</a></li>
                                <li><a className={classes.a} href="">jBPM Training</a></li>
                                <li><a className={classes.a} href="">Pega Training</a></li>
                                <li><a className={classes.a} href="">TIBCO AMX BPM Training</a></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.categoryCard}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Business Process Management Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.ul}>
                                <li><a className={classes.a} href="">Oracle BPM Training</a></li>
                                <li><a className={classes.a} href="">Oracle Workflow Training</a></li>
                                <li><a className={classes.a} href="">Appian Training</a></li>
                                <li><a className={classes.a} href="">IBM BPM Training</a></li>
                                <li><a className={classes.a} href="">jBPM Training</a></li>
                                <li><a className={classes.a} href="">Pega Training</a></li>
                                <li><a className={classes.a} href="">TIBCO AMX BPM Training</a></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.categoryCard}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Business Process Management Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.ul}>
                                <li><a className={classes.a} href="">Oracle BPM Training</a></li>
                                <li><a className={classes.a} href="">Oracle Workflow Training</a></li>
                                <li><a className={classes.a} href="">Appian Training</a></li>
                                <li><a className={classes.a} href="">IBM BPM Training</a></li>
                                <li><a className={classes.a} href="">jBPM Training</a></li>
                                <li><a className={classes.a} href="">Pega Training</a></li>
                                <li><a className={classes.a} href="">TIBCO AMX BPM Training</a></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.categoryCard}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Business Process Management Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.ul}>
                                <li><a className={classes.a} href="">Oracle BPM Training</a></li>
                                <li><a className={classes.a} href="">Oracle Workflow Training</a></li>
                                <li><a className={classes.a} href="">Appian Training</a></li>
                                <li><a className={classes.a} href="">IBM BPM Training</a></li>
                                <li><a className={classes.a} href="">jBPM Training</a></li>
                                <li><a className={classes.a} href="">Pega Training</a></li>
                                <li><a className={classes.a} href="">TIBCO AMX BPM Training</a></li>
                            </ul>
                        </AccordionDetails>
                    </Accordion>
                    <Accordion className={classes.accordion}>
                        <AccordionSummary className={classes.categoryCard}
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography className={classes.heading}>Business Process Management Courses</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <ul className={classes.ul}>
                                <li><a className={classes.a} href="">Oracle BPM Training</a></li>
                                <li><a className={classes.a} href="">Oracle Workflow Training</a></li>
                                <li><a className={classes.a} href="">Appian Training</a></li>
                                <li><a className={classes.a} href="">IBM BPM Training</a></li>
                                <li><a className={classes.a} href="">jBPM Training</a></li>
                                <li><a className={classes.a} href="">Pega Training</a></li>
                                <li><a className={classes.a} href="">TIBCO AMX BPM Training</a></li>
                            </ul>   
                        </AccordionDetails>
                    </Accordion>
                    
                    
                </div>
            </section>
        </div>
    )
}

export default Sidebar
