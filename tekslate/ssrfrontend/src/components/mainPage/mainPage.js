import React from "react";
import loadable from "react-loadable-visibility/loadable-components";
import { useSelector } from "react-redux";
import RelatedCourses from "../coursePage/RelatedCourses/RelatedCourses";
import CourseForm from '../coursePage/CourseForm/courseForm';

const CoursePage = loadable(() => import("../coursePage/coursePage"), {
  ssr: true,
});

const CourseSecondPage = loadable(
  () => import("../coursePage/courseSecondPage"),
  {
    ssr: true,
  }
);
const CourseLastPage = loadable(() => import("../coursePage/courseLastPage"), {
  ssr: true,
});

const FooterComponent = loadable(
  () => import("../footerComponent/footerComponent"),
  {
    ssr: true,
  }
);
const BlogPage = loadable(() => import("../blogPage/Banner"), {
  ssr: true,
});

const Course = () => {
  const { type } = useSelector((state) => state.course);

  return (
    <div>
      {type === "course" ? (
        <div>
          <CoursePage />
          <CourseSecondPage />
          <CourseForm />
          <RelatedCourses />
          {/* <CourseLastPage /> */}
          {/* <FooterComponent /> */}
        </div>
      ) : (
        <div>
          <BlogPage></BlogPage>
        </div>
      )}
    </div>
  );
};

export default Course;
