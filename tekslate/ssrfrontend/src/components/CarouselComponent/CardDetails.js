import React from "react";
import { makeStyles, createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Button, Card } from '@material-ui/core';
import StarOutlineRoundedIcon from '@material-ui/icons/StarOutlineRounded';

export const theme = createMuiTheme({
    overrides: {
        // For label
        MuiCard: {
            root: {
                "& .hidden-button": {
                    display: "none",
                    transition: '.9s ease'
                },
                "&:hover .hidden-button": {
                    display: "block"
                }
            }
        }
    }
});

const useStyles = makeStyles((theme) => ({
    relatedComp: {
        margin: '0 0.6rem',
        padding: '1rem',
        border: '1px solid #ddd',
        transitionTimingFunction: 'ease-in',
        transition: '0.2s',
        '& li': {
            color: '#3f3f3f',
            lineHeight: '24px',
            marginBottom: '10px'
        },
        '&:hover': {
            border: '2px solid blue',
            borderTop: '5px solid blue'
            // cursor: 'pointer'
        }
    },
}));

export default function MediaControlCard({ review, idx }) {
    const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
            <Card elevation={0} className={classes.relatedComp}>
                <div style={{ height: '32px' }}>
                    {review.trending ? <Button variant='outlined' color='primary' size='small' style={{ borderRadius: '0.9rem' }}> Trending</Button> : ''}
                </div>
                <h3>{review.designation}</h3>
                <ul style={{ paddingLeft: '1rem', height: '125px', maxHeight: '125px' }}>
                    <li>Lorem Ipsum is simply dummy text of the printing</li>
                    <li>Lorem Ipsum is simply dummy text of the printing  </li>
                </ul>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        borderTop: '1px solid #000', padding: '0.5rem',
                        fontSize: '0.8rem'
                    }}>
                    <p>123 hrs</p>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <StarOutlineRoundedIcon style={{ fontSize: '1rem', marginBottom: '0.1rem' }} />
                        <span>{review.rating}</span>
                    </div>
                </div>
                <div className="hidden-button">
                    <Button variant='contained' color='primary' style={{ width: '100%' }}>START LEARNING</Button>
                </div>
            </Card>
        </ThemeProvider>
    );
}
