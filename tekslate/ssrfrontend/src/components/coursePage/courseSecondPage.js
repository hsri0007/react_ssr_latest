import React from "react";
// import { makeStyles } from '@material-ui/core/styles';
import loadable from "react-loadable-visibility/loadable-components";
const ScrollSpyTabs = loadable(
  () => import("./CourseScrollTabs/CourseScrollTabs"),
  {
    ssr: false,
  }
);
import Overview from "../coursePage/Overview/Overview";
import Curriculum from "../coursePage/Curriculum/Curriculum";
import Objectives from "../coursePage/Objectives/Objectives";
import TrainingOptions from "../coursePage/TrainingOptions/TrainingOptions";
import Faqs from "../coursePage/Faqs/Faqs";
import { useSelector } from "react-redux";
// import RelatedCourses from './RelatedCourses/RelatedCourses';
import Testimonials from "../testimonials/testimonials";
import ProjectsComponent from "./Projects/ProjectsComponent";
import CorparateComponent from "./CorparateFields/CorparateComponent";

// const useStyles = makeStyles((theme) => ({

// }));

const courseSecondPage = () => {
  // const classes = useStyles();
  const { data } = useSelector((state) => state.course);

  return (
    <>
      <ScrollSpyTabs
        tabsInScroll={[
          {
            text: "Key Features",
            component: <Overview />,
          },
          {
            text: "Curriculum",
            component: <Curriculum />,
          },
          {
            text: "Projects",
            component: <ProjectsComponent />,
          },
          {
            text: "Objectives",
            component: <Objectives />,
          },
          {
            text: "Training Options",
            component: <TrainingOptions />,
          },
          {
            text: "Corporate",
            component: <CorparateComponent />,
          },
          {
            text: "Reviews",
            component: <Testimonials />,
          },
          {
            text: "Faqs",
            component: (
              <Faqs value={data.faq} coursedetails={data.overview.course} />
            ),
          },
        ]}
      />
      {/* <CourseTabs />
      <Overview />
      <Curriculum />
      <TrainingOptions />
      <TrainingDates />
      <Objectives />
      <Faqs /> */}
    </>
  );
};

export default courseSecondPage;
