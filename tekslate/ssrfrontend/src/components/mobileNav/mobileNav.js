import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
// import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
// import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import GolfCourseRoundedIcon from '@material-ui/icons/GolfCourseRounded';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import LabelIcon from '@material-ui/icons/Label';

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

const MobileNav = () => {
    const classes = useStyles();
    const [state, setState] = React.useState(false);
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift'))
        {
            return;
        }

        setState(open);
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
        >
            <Accordion
                expanded={expanded === "panel1"}
                style={{ boxShadow: "none" }}
                onChange={handleChange("panel1")}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                >
                    <ListItem style={{ padding: 0 }} >
                        <ListItemIcon>
                            <GolfCourseRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Course" />
                    </ListItem>
                </AccordionSummary>
                <AccordionDetails
                    style={{ display: "flex", flexDirection: "column" }}
                >
                    <ListItem button onClick={toggleDrawer(anchor, false)}
                        onKeyDown={toggleDrawer(anchor, false)}>
                        <ListItemIcon >
                            <LabelIcon />
                        </ListItemIcon>
                        <ListItemText primary="t.text" />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon >
                            <LabelIcon />
                        </ListItemIcon>
                        <ListItemText primary="t.text" />
                    </ListItem>
                    <ListItem button >
                        <ListItemIcon >
                            <LabelIcon />
                        </ListItemIcon>
                        <ListItemText primary="t.text" />
                    </ListItem>
                </AccordionDetails>
            </Accordion>
            <List
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List
                onClick={toggleDrawer(anchor, false)}
                onKeyDown={toggleDrawer(anchor, false)}>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem 1rem 0 1rem' }}>
            <div>
                <MenuRoundedIcon style={{ marginBottom: '13px' }} onClick={toggleDrawer("right", true)} />
            </div>
            <Drawer anchor="right" open={state} onClose={toggleDrawer("right", false)}>
                {list("right")}
            </Drawer>
            <h2 style={{ display: 'inline-block', margin: 0 }}>Tekslate</h2>
            <div >
                <SearchIcon />
                {/* <div className={classes.searchIcon}>
                    <SearchIcon />
                </div>
                <InputBase
                    placeholder="Search…"
                    classes={{
                        root: classes.inputRoot,
                        input: classes.inputInput,
                    }}
                    inputProps={{ 'aria-label': 'search' }}
                /> */}
            </div>
        </div>
    )
}

export default MobileNav;
