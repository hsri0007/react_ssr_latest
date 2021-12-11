import React from "react";
import Icon from "@material-ui/icons/Home";
import FolderIcon from "@material-ui/icons/Folder";
import StarIcon from "@material-ui/icons/Star";
import DescriptionIcon from "@material-ui/icons/Description";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
export const SidebarData = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HomeIcon />,
  },
  {
    title: "Courses",
    icon: <FolderIcon />,
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    path: "/courses/course",
    subNav: [
      {
        title: "Course",
        path: "/courses/course",
      },
      {
        title: "Overview",
        path: "/overview/overview",
      },
      {
        title: "Curriculum",
        path: "/curriculum/curriculum",
      },
      {
        title: "FAQs",
        path: "/faq/faq",
      },
      {
        title: "Certification",
        path: "/certification/certification",
      },
      {
        title: "Course Dates",
        path: "/courseDates/courseDates",
      },
    ],
  },
  {
    title: "Reviews",
    path: "/reviews/reviews",
    icon: <StarIcon />,
  },
  {
    title: "Articles",
    icon: <DescriptionIcon />,
    path: "/blog/blog",
    iconClosed: <ArrowDropDownIcon />,
    iconOpened: <ArrowDropUpIcon />,
    subNav: [
      {
        title: "Blog Categories",
        path: "/blog/blog",
      },
      {
        title: "Articles",
        path: "/articles/articles",
      },
    ],
  },
  {
    title: "Create Admin",
    path: "/auth/createadmin",
    icon: <SupervisorAccountIcon />
  }
  ,
  {
    title: "Logout",
    path: "/auth/logout",
    icon: <ExitToAppIcon />,
  },
];
