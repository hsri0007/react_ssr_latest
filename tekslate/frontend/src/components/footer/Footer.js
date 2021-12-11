import React from 'react'
import "./Footer.css"
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { makeStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    outer:{
        display: "flex",
        minHeight:"100vh",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    container:{
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        flexDirection: "row",
        width: "100%"
    },
    footer:{
        position: "relative",
        padding:"50px 100px",
        backgroundColor:"rgb(24, 22, 22)",
        display: "flex",
        flexWrap: "wrap"
    },
    upper:{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between"
    },
    footerElements:{
        color: "white",
        wordWrap: "wrap",
        '& ul':{
            listStyle: "none",
            paddingTop: "20px"
        },
        '& ul li':{
            padding: "14px 0px"
        },
        '& ul li a':{
            textDecoration: "none",
            color: "rgb(161, 161, 160)"
        }
    },
    footerElementsContent:{
        fontSize: "17px",
        '&:hover':{
            color: "white"
        }
    },
    footerElementsTitle:{
        fontSize: "22px",
        fontWeight: "900",
        borderBottom: "2px solid rgb(236, 234, 234)",
        paddingBottom: "7px",
        width: "60%"
    },
    mid:{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        paddingTop: "15px"
    },
    midTitle:{
        color: "white",
        paddingTop: "12px",
        borderBottom: "4px solid gray",
        fontSize: "17px"
    },
    midElements:{
        display: "flex",
        padding: "5px"
    },
    midLabels:{
        padding:"12px",
        '& a':{
            textDecoration: "none",
            color:"rgb(161, 161, 160)"
        }
    },
    midCopyright:{
        display: "flex",
        justifyContent:"center",
        fontSize:"16px",
        color: "rgb(223, 219, 219)",
        borderTop: "1px solid gray",
        paddingTop: "15px",
        width: "60%"
    },
    midDisclaimer:{
        fontSize:"14px",
        paddingTop: "25px",
        color:"rgb(161, 161, 160)"
    }

}))


function Footer() {

  const classes = useStyles();

    return (
        <div className={classes.outer}>
            <footer className={classes.footer}>
                <div className={classes.container}>
                    <div className={classes.upper}>
                        <div className={classes.footerElements}>
                            <h2 className={classes.footerElementsTitle}>Trending Course Categories</h2>
                            <ul>
                                <li><a href="#" className={classes.footerElementsContent}>Business Intelligence and Analytics Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Cloud Computing Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Programming and Frameworks Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Customer Relationship Mangement Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Database Mangement and Adminstration Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Business Process Mangement Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Software and Automation Testing Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>IT Service Mangement Courses</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>RPA Certification Courses</a></li>
                            </ul>
                        </div>
                         <div className={classes.footerElements}>
                         <h2 className={classes.footerElementsTitle}>Trending Course</h2>
                         <ul>
                                <li><a href="#" className={classes.footerElementsContent}>Power Bi Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Google Cloud Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Salesforce Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Oracle DBA Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Informatice Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Snowflake Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Jira Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Python Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Service Now Training</a></li>
                            </ul>
                        </div>
                         <div className={classes.footerElements}>
                         <h2 className={classes.footerElementsTitle}>Popular Course</h2>
                         <ul>
                                <li><a href="#" className={classes.footerElementsContent}>Agile Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>ArcSight Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>CyberArk Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Workday Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Locker Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>AWS Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Alteryx Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>Powershell Training</a></li>
                                <li><a href="#" className={classes.footerElementsContent}>UiPath Training</a></li>
                            </ul>
                        </div>
                         <div className={classes.footerElements}>
                            <div>
                            <div>
                                <h2 className={classes.footerElementsTitle}>For Businesses</h2>
                                <ul>
                                    <li><a href="#" className={classes.footerElementsContent}>Corporate</a></li>
                                    <li><a href="#" className={classes.footerElementsContent}>Training</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={classes.footerElementsTitle}>Work with us</h2>
                                <ul>
                                    <li><a href="#" className={classes.footerElementsContent}>Hire From US</a></li>
                                    <li><a href="#" className={classes.footerElementsContent}>Become and instructor</a></li>
                                    <li><a href="#" className={classes.footerElementsContent}>Write for us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h2 className={classes.footerElementsTitle}>Discover</h2>
                                <ul>
                                    <li><a href="#" className={classes.footerElementsContent}>Community</a></li>
                                    <li><a href="#" className={classes.footerElementsContent}>Blog</a></li>
                                    <li><a href="#" className={classes.footerElementsContent}>Sample Resumes</a></li>
                                </ul>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className={classes.mid}>
                        <h2 className={classes.midTitle}>Company</h2>
                        <div className={classes.midElements}>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}>About Us</a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}>Contact Us</a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}>Refund Policy</a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}>Reviews</a></div>
                        </div>
                        <div className={classes.midElements}>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}><FacebookIcon/></a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}><TwitterIcon/></a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}><InstagramIcon/></a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}><LinkedInIcon/></a></div>
                            <div className={classes.midLabels}><a href="#" className={classes.footerElementsContent}><YouTubeIcon/></a></div>
                        </div>
                        <h2 className={classes.midCopyright}>Copyright © 2021  Appmajix Technologies Private Limited. All Rights Reserved</h2>
                        <h2 className={classes.midDisclaimer}>Disclaimer: The certification names and logos are the trademarks of their respective owners.</h2>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer
