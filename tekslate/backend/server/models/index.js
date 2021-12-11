// const Sequelize = require('sequelize')
"use strict";
// import Sequelize from "sequelize";
var Sequelize = require("sequelize");
import CourseModel from "./Course";
import CourseOverviewModel from "./CourseOverview";
import CurriculumModel from "./Curriculum";
import FAQModel from "./Faq";
import CertificationModel from "./Certification";
import CoursedateModel from "./CourseDates";
import ReviewModel from "./Reviews";
import BlogcategoryModel from "./BlogCategory";
import ArticlesModel from "./Articles";
import PublishersModel from "./Publishers";
import AuthorModel from "./Author";
import SubcategoryModel from "./SubCategory";
import EnquiryModel from "./Enquiry";
import PageModel from "./PageType";
import PaymentsModel from "./Payments";
import CategoriesModel from "./Categories";
const dotenv = require("dotenv");
dotenv.config();

const { DB_NAME, DB_USERNAME, DB_PASSWORD, DB_HOST } = process.env;
console.log(process.env);
const sequelize = new Sequelize(DB_NAME, DB_USERNAME, DB_PASSWORD, {
  host: DB_HOST,
  dialect: "mysql",
  pool: {
    max: 10,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

const Course = CourseModel(sequelize, Sequelize);
const Overview = CourseOverviewModel(sequelize, Sequelize);
const Curriculum = CurriculumModel(sequelize, Sequelize);
const FAQ = FAQModel(sequelize, Sequelize);
const Certification = CertificationModel(sequelize, Sequelize);
const Coursedate = CoursedateModel(sequelize, Sequelize);
const Reviews = ReviewModel(sequelize, Sequelize);
const BlogCategory = BlogcategoryModel(sequelize, Sequelize);
const Articles = ArticlesModel(sequelize, Sequelize);
const Publishers = PublishersModel(sequelize, Sequelize);
const Authors = AuthorModel(sequelize, Sequelize);
const SubCategory = SubcategoryModel(sequelize, Sequelize);
const Enquiry = EnquiryModel(sequelize, Sequelize);
const PageType = PageModel(sequelize, Sequelize);
const Payments = PaymentsModel(sequelize, Sequelize);
const Categories = CategoriesModel(sequelize, Sequelize);
// Overview.belongsTo(Course);

module.exports = {
  Course,
  Overview,
  Curriculum,
  FAQ,
  Certification,
  Coursedate,
  Reviews,
  BlogCategory,
  Articles,
  Publishers,
  Authors,
  SubCategory,
  Categories,
  Enquiry,
  PageType,
  Payments,
  sequelize,
};
