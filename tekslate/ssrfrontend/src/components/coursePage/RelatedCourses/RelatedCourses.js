import React, { useState } from 'react'
import { makeStyles } from "@material-ui/core/styles";
import CarouselComponent from '../../CarouselComponent/Carousel';
import Container from '@material-ui/core/Container';
import Bg1 from '../../../../asset/resource/about/Personal.png'
import Bg2 from '../../../../asset/resource/about/user-male.png'
import HeadingsComponent from '../HeadingsComponent/HeadingsComponent';

const useStyles = makeStyles((theme) => ({
    relatedCourses: {
        // width: "50%",
        // margin: "0 auto",
        // [theme.breakpoints.down("xs")]: {
        //     width: "100%",
        // },
        // display: 'grid',
        // gridTemplateColumns: 'auto auto auto auto',
        // justifyContent: 'space-between',
        // gridColumnGap: '1rem'
    }
}));

const RelatedCourses = () => {
    const classes = useStyles();
    const [reviews, setState] = useState([
        {
            slug: "/",
            name: "Raj Kotari",
            duration: 15,
            imgUri: `${Bg1}`,
            designation: "AWS",
            trending: true,
            description:
                "I have got trained for AWS from UnitedSkill. I am happy with the training and the trainer. Explanatory sessions with practical hands-on labs helped me gain industrial experience in the virtual classroom itself. I would recommend UnitedSkill.",
            rating: '4.7'
        },
        {
            slug: "/",
            name: "Nicolas Depp",
            duration: 15,
            imgUri: `${Bg2}`,
            designation: " CyberSecurity",
            trending: true,
            description:
                "I am a cybersecurity professional working for an Australian startup. I have got trained from UnitedSkill and later attempted my certification CISSP and started working. I am happy with the training and the practical sessions. Thanks to the UnitedSkill.",
            rating: '4.4'
        },
        {
            slug: "/",
            name: "Christina Alex",
            duration: 15,
            imgUri: `${Bg1}`,
            designation: "Salesforce",
            trending: true,
            description:
                "I am thanking UnitedSkill for Salesforce training. After graduation, my friend suggested me to UnitedSkill, and I am impressed with the trainer quality and training sessions. The customer support team walks you throughout the course completion.",
            rating: '4.3'
        },
        {
            slug: "/",
            name: "Nicolas Depp",
            duration: 15,
            imgUri: `${Bg2}`,
            designation: " CyberSecurity",
            trending: false,
            description:
                "I am a cybersecurity professional working for an Australian startup. I have got trained from UnitedSkill and later attempted my certification CISSP and started working. I am happy with the training and the practical sessions. Thanks to the UnitedSkill.",
            rating: '4.4'
        },
        {
            slug: "/",
            name: "Christina Alex",
            duration: 15,
            imgUri: `${Bg1}`,
            designation: "Salesforce",
            trending: true,
            description:
                "I am thanking UnitedSkill for Salesforce training. After graduation, my friend suggested me to UnitedSkill, and I am impressed with the trainer quality and training sessions. The customer support team walks you throughout the course completion.",
            rating: '4.9'
        },
        {
            slug: "/",
            name: "Nicolas Depp",
            duration: 15,
            imgUri: `${Bg2}`,
            designation: " CyberSecurity",
            trending: false,
            description:
                "I am a cybersecurity professional working for an Australian startup. I have got trained from UnitedSkill and later attempted my certification CISSP and started working. I am happy with the training and the practical sessions. Thanks to the UnitedSkill.",
            rating: '4.3'
        },
        {
            slug: "/",
            name: "Christina Alex",
            duration: 15,
            imgUri: `${Bg1}`,
            designation: "Salesforce",
            trending: false,
            description:
                "I am thanking UnitedSkill for Salesforce training. After graduation, my friend suggested me to UnitedSkill, and I am impressed with the trainer quality and training sessions. The customer support team walks you throughout the course completion.",
            rating: '4.5'
        },
        {
            slug: "/",
            name: "Nicolas Depp",
            duration: 15,
            imgUri: `${Bg2}`,
            designation: " CyberSecurity",
            trending: false,
            description:
                "I am a cybersecurity professional working for an Australian startup. I have got trained from UnitedSkill and later attempted my certification CISSP and started working. I am happy with the training and the practical sessions. Thanks to the UnitedSkill.",
            rating: '4.7'
        },
        {
            slug: "/",
            name: "Christina Alex",
            duration: 15,
            imgUri: `${Bg1}`,
            designation: "Salesforce",
            trending: true,
            description:
                "I am thanking UnitedSkill for Salesforce training. After graduation, my friend suggested me to UnitedSkill, and I am impressed with the trainer quality and training sessions. The customer support team walks you throughout the course completion.",
            rating: '4.6'
        },
    ]);
    return (
        <div style={{ margin: '5rem 0', }}>
            <Container>
                <div style={{textAlign:'center'}}>
                    <HeadingsComponent first='Related' last='Courses' />
                </div>
                <div className={classes.relatedCourses}>
                    <CarouselComponent reviews={reviews} />
                </div>
            </Container>
        </div>
    )
}

export default RelatedCourses
