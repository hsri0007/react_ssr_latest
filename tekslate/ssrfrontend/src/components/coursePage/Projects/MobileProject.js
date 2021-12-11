import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

const MobileProject = ({ state }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {state.map((c, i) => {
                return <Accordion>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls={`panel${i}a-content`}
                        id={`panel${i}a-header`}
                    >
                        <Typography className={classes.heading}>{c.heading}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <ul>
                            {c.points.map((c) => {
                                return <li>{c}</li>
                            })}
                        </ul>
                    </AccordionDetails>
                </Accordion>
            })}
        </div>
    )
}

export default MobileProject
