// var express = require('express');
// var router = express.Router();
import express from "express";
import IndexController from "../controllers/indexControllers/IndexController";
import IndexTutorialController from "../controllers/indexControllers/IndexTutorialController";
import IndexCategoryController from "../controllers/indexControllers/IndexCategoryController";
import IndexSearchController from "../controllers/indexControllers/IndexSearchController";
import IndexPaymentController from "../controllers/indexControllers/IndexPaymentController";
var router = express.Router();

router.get("/course-home", IndexController.getDetails);
router.get("/home/trending", IndexController.getTrending);
router.get("/home/popular", IndexController.getPopular);
router.get("/all-courses", IndexController.getAllCourses);

// Articles (Tutorials)
router.get("/tutorials", IndexTutorialController.getAllArticles);
router.get("/tutorials/url", IndexTutorialController.getByArticleUrl);

//Blogs
router.get("/interview-question", IndexTutorialController.getAllBlogs);
router.get(
  "/interview-question/:url_title",
  IndexTutorialController.getBlogByUrl
);

//Course Categories
router.get("/categories", IndexCategoryController.getAllCategories);
router.get("/sub-categories", IndexCategoryController.getAllSubCategories);
router.get("/categories/:cat_id", IndexCategoryController.getCoursebyCatID);

// Post enquiry
router.post("/enquiry", IndexController.createEnquiry);

router.get("/temp", IndexController.popPageType);

//Search
//Create Index
router.get("/search/populate", IndexSearchController.createIndex);
router.get(
  "/search/autocomplete",
  IndexSearchController.searchResultAutocomplete
);
router.get("/search/allresults", IndexSearchController.searchResults);

router.get("/misc/pagetype", IndexController.getPageType);

// Payments
router.post("/orders/razorpay", IndexPaymentController.create_order_razorpay);
router.post("/orders/stripe", IndexPaymentController.create_order_stripe);
router.post("/addpayment", IndexPaymentController.insert_payments);
router.post("/webhook", IndexPaymentController.stripe_webhook);
export default router;
