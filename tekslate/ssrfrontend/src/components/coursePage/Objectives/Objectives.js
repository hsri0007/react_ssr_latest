import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from "react-redux";
import HeadingsComponent from "../HeadingsComponent/HeadingsComponent";

const useStyles = makeStyles((theme) => ({
    section: {
        padding: "18px 0",
    },
    accordionStyles: {
        marginBottom: '0.4rem',
        boxShadow: '0 2px 13px 0 rgb(0 0 0 / 2%)',
    },
    accordionDetailsStyles: {
        display: 'flex',
        flexDirection: 'column'
    },
    objectivesContainer: {
        display: 'grid',
        gridTemplateColumns: '70% auto',
        [theme.breakpoints.down("md")]: {
            gridTemplateColumns: '100%',
        },
    },
    '&.MuiAccordionSummary-root': {
        '&:hover': {
            background: '#000',
            color: '#fff'
        }
    },
    heading: {
        '&:hover': {
            background: '#000',
            color: '#fff'
        },
        '&:hover svg': {
            color: '#fff'
        }
    }
}));

export default function Objectives() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const { data } = useSelector((state) => state.course);

    return (
        <div id="Objectives">
            <section className={classes.section}>
                <Container style={{ padding: '0 0.5rem' }}>
                    <HeadingsComponent first={data.overview.course} last='Objectives' />
                    <div className={classes.objectivesContainer}>
                        <div style={{ paddingBottom: '1rem', }}>
                            {data.objectives.map((c, i) => {
                                return <Accordion expanded={expanded === `panel${i}`} onChange={handleChange(`panel${i}`)} className={classes.accordionStyles}>
                                    <AccordionSummary
                                        className={classes.heading}
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls={`panel${i}bh-content`}
                                        id={`panel${i}bh-header`}>
                                        <Typography>{i + 1}. &nbsp; {c.overview_title}</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails className={classes.accordionDetailsStyles}>
                                        <Typography dangerouslySetInnerHTML={{ __html: `${c.overview_description}` }} />
                                    </AccordionDetails>
                                </Accordion>
                            })}
                        </div>

                    </div>
                </Container>
            </section>
        </div>
    );
}
