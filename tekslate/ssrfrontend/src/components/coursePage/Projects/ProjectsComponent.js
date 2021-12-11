import { Container } from '@material-ui/core';
import React from 'react'
import HeadingsComponent from '../HeadingsComponent/HeadingsComponent';
import { makeStyles } from '@material-ui/core/styles';
import DesktopProject from './DesktopProject';
import MobileProject from './MobileProject';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
        display: 'flex',
        height: 224,
        '& > div:first-child': {
            display: 'none',
            [theme.breakpoints.down("md")]: {
                display: 'block'
            },
        },
        '& > div:last-child': {
            display: 'flex',
            [theme.breakpoints.down("md")]: {
                display: 'none'
            },
        },
    },
}));

const ProjectsComponent = () => {
    const classes = useStyles();

    const [state, setState] = React.useState([
        {
            heading: 'Domain 1: Design Resilient Architectures',
            points: [
                'Choose1 reliable/resilient storage.',
                'Decoupling mechanisms using AWS services.',
                'Design a multi-tier architecture solution.',
                'Design high availability and/or fault-tolerant architectures.'
            ]
        },
        {
            heading: 'Domain 2: Design Resilient Architectures',
            points: [
                'Choose2 reliable/resilient storage.',
                'Decoupling mechanisms using AWS services.',
                'Design a multi-tier architecture solution.',
                'Design high availability and/or fault-tolerant architectures.'
            ]
        },
        {
            heading: 'Domain 3: Design Resilient Architectures',
            points: [
                'Choose3 reliable/resilient storage.',
                'Decoupling mechanisms using AWS services.',
                'Design a multi-tier architecture solution.',
                'Design high availability and/or fault-tolerant architectures.'
            ]
        },
        {
            heading: 'Domain 4: Deploying a Multi-tiered Web Application in Amazon Web Services',
            points: [
                'Choose3 reliable/resilient storage.Deploying a Multi-tiered Web Application in Amazon Web ServicesDeploying a Multi-tiered Web Application in Amazon Web Services',
                'Decoupling mechanisms using AWS services.',
                'Design a multi-tier architecture solution.',
                'Design high availability and/or fault-tolerant architectures.'
            ]
        }
    ])

    return (
        <div style={{ padding: '4rem 0' }}>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <HeadingsComponent first='Project' last='Details' />
                </div>

                <div className={classes.root}>
                    <div>
                        <MobileProject state={state} />
                    </div>
                    <div>
                        <DesktopProject state={state} />
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default ProjectsComponent;
