import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
const CoursePage = loadable(
  () => import("../../components/coursePage/coursePage"),
  {
    ssr: true,
  }
);

const CourseSecondPage = loadable(
  () => import("../../components/coursePage/courseSecondPage"),
  {
    ssr: true,
  }
);
const CourseLastPage = loadable(
  () => import("../../components/coursePage/courseLastPage"),
  {
    ssr: true,
  }
);

const FooterComponent = loadable(
  () => import("../../components/footerComponent/footerComponent"),
  {
    ssr: true,
  }
);
const MainPage = loadable(
  () => import("../../components/mainPage/mainPage"),
  {
    ssr: true,
  }
);

const Course = () => {
  return (
    <div>
      {/* <CoursePage />
      <CourseSecondPage/>
      <CourseLastPage/>
      <FooterComponent /> */}
      <MainPage />
      {/* </MainPage> */}
    </div>
  );
};

export default Course;
