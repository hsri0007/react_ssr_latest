import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Home from "./components/Home";
import Course from "./components/course/Course";
import AddCourse from "./components/course/AddCourse";
import Action from "./components/course/Action";
import "./App.css";

import Overview from "./components/overview/Overview";
import AddOverview from "./components/overview/AddOverview";
import OverviewAction from "./components/overview/Action";

import Curriculum from "./components/curriculum/Curriculum";
import AddCurriculum from "./components/curriculum/AddCurriculum";
import CurriculumAction from "./components/curriculum/Action";

import Faq from "./components/faq/Faq";
import AddFaq from "./components/faq/AddFaq";
import FaqAction from "./components/faq/Action";

import Certification from "./components/certification/Certification";
import AddCertification from "./components/certification/AddCertification";
import CertificationAction from "./components/certification/Action";

import CourseDates from "./components/courseDates/CourseDates";
import AddCourseDates from "./components/courseDates/AddCourseDates";
import CourseDatesAction from "./components/courseDates/Action";

import Reviews from "./components/reviews/Reviews";
import AddReviews from "./components/reviews/AddReviews";
import ReviewsAction from "./components/reviews/Action";


import Author from "./components/author/Author";
import AddAuthor from "./components/author/AddAuthor";
import AuthorAction from "./components/author/Action";

import Blog from "./components/blog/Blog";
import AddBlog from "./components/blog/AddBlog";
import BlogAction from "./components/blog/Action";

import Articles from "./components/articles/Articles";
import AddArticles from "./components/articles/AddArticles";
import ArticlesAction from "./components/articles/Action";

// import Login from "./components/login/Login";

import CreateSuperAdmin from "./components/admin-auth/Createsuperadmin";
import Login from "./components/admin-auth/Login";
import Logout from "./components/admin-auth/Logout";
import CreateAdmin from "./components/admin-auth/CreateAdmin";
import PrivateRoute from "./PrivateRoute";
import NotFound from "./components/notFound/NotFound"
function App() {
  var login = false;
  const user = JSON.parse(localStorage.getItem("user"));

  if (user && user.accessToken) {
    login = true;
  }
  return (
    <Router>
      <Switch>
        {!login && (
          <Route exact path="/">
            <Redirect to="/admin"></Redirect>
          </Route>
        )}
        {login && (
          <Route exact path="/">
            <Redirect to="/courses/course"></Redirect>
          </Route>
        )}

        <PrivateRoute
          path="/courses/course"
          exact
          component={Course}
        ></PrivateRoute>
        <Route path="/admin" exact component={Login}></Route>
        <Route path="/auth/logout" exact component={Logout}></Route>

        <PrivateRoute
          path="/courses/addCourse"
          exact
          component={AddCourse}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/courses/editCourse"
          component={(props) => <Action id={props.location.state.id} />}
        ></PrivateRoute>

        <PrivateRoute
          path="/overview/overview"
          exact
          component={Overview}
        ></PrivateRoute>
        <PrivateRoute
          path="/overview/addOverview"
          exact
          component={AddOverview}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/overview/editOverview"
          component={(props) => <OverviewAction id={props.location.state.id} />}
        ></PrivateRoute>

        <PrivateRoute
          path="/curriculum/curriculum"
          exact
          component={Curriculum}
        ></PrivateRoute>
        <PrivateRoute
          path="/curriculum/addCurriculum"
          exact
          component={AddCurriculum}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/curriculum/editCurriculum"
          component={(props) => (
            <CurriculumAction id={props.location.state.id} />
          )}
        ></PrivateRoute>

        <PrivateRoute path="/faq/faq" exact component={Faq}></PrivateRoute>
        <PrivateRoute
          path="/faq/addFaq"
          exact
          component={AddFaq}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/faq/editFaq"
          component={(props) => <FaqAction id={props.location.state.id} />}
        ></PrivateRoute>

        <PrivateRoute
          path="/certification/certification"
          exact
          component={Certification}
        ></PrivateRoute>
        <PrivateRoute
          path="/certification/addCertification"
          exact
          component={AddCertification}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/certification/editCertification"
          component={(props) => (
            <CertificationAction id={props.location.state.id} />
          )}
        ></PrivateRoute>

        <PrivateRoute
          path="/courseDates/courseDates"
          exact
          component={CourseDates}
        ></PrivateRoute>
        <PrivateRoute
          path="/courseDates/addCourseDates"
          exact
          component={AddCourseDates}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/courseDates/editCourseDates"
          component={(props) => (
            <CourseDatesAction id={props.location.state.id} />
          )}
        ></PrivateRoute>

        <PrivateRoute
          path="/reviews/reviews"
          exact
          component={Reviews}
        ></PrivateRoute>
        <PrivateRoute
          path="/reviews/addReviews"
          exact
          component={AddReviews}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/reviews/editReviews"
          component={(props) => <ReviewsAction id={props.location.state.id} />}
        ></PrivateRoute>

        <PrivateRoute
          path="/author/author"
          exact
          component={Author}
        ></PrivateRoute>
        <PrivateRoute
          path="/author/addAuthor"
          exact
          component={AddAuthor}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/author/editAuthor"
          component={(props) => <AuthorAction id={props.location.state.id} />}
        ></PrivateRoute>

        <PrivateRoute path="/blog/blog" exact component={Blog}></PrivateRoute>
        <PrivateRoute
          path="/blog/addBlog"
          exact
          component={AddBlog}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/blog/editBlog"
          component={(props) => <BlogAction id={props.location.state.id} />}
        ></PrivateRoute>

        <PrivateRoute
          path="/articles/articles"
          exact
          component={Articles}
        ></PrivateRoute>
        <PrivateRoute
          path="/articles/addArticles"
          exact
          component={AddArticles}
        ></PrivateRoute>
        <PrivateRoute
          exact
          path="/articles/editArticles"
          component={(props) => <ArticlesAction id={props.location.state.id} />}
        ></PrivateRoute>

        {/* <Route path="/login/login" exact component={Login}></Route> */}
        {/* <Route path="/courses/editAction" exact component={(props) => (<EditAction data={props.location.state.data}/>)}></Route> */}

        <Route
          path="/auth/superadmin"
          exact
          component={CreateSuperAdmin}
        ></Route>

        <PrivateRoute
          path="/auth/createadmin"
          exact
          component={CreateAdmin}
        ></PrivateRoute>
        <Route path="" exact component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
