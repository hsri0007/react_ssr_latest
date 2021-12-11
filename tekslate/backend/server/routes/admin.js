import express from "express";
import CreateSuperAdminController from "../controllers/CreateSuperAdminController";
import AdminArticleController from "../controllers/AdminArticleController";
import AdminBlogController from "../controllers/AdminBlogController";
import AdminCertificationController from "../controllers/AdminCertificationController";
var router = express.Router();
import AdminCourseController from "../controllers/AdminCourseController";
import AdminCoursedateController from "../controllers/AdminCoursedateController";
import AdminCourseOverviewController from "../controllers/AdminCourseOverviewController";
import AdminCurriculumController from "../controllers/AdminCurriculumController";
import AdminFAQController from "../controllers/AdminFAQController";
import AdminReviewController from "../controllers/AdminReviewController";
import checkDuplicateUsernameOrEmail from "../middleware/verifySignUp";
import AdminAuthorController from "../controllers/AdminAuthorController";
import verifyToken from "../middleware/verifyJWT";
// ADMIN COURSE ROUTES

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);
const multer = require("multer");

// const storage = multer.diskStorage({
//   // destination: function (req, file, cb) {
//   //   cb(null, "/uploads/");
//   // },
//   filename: function (req, file, cb) {
//     cb(null, new Date().toISOString() + file.originalname);
//   },
// });
// const fileFilter = (req, file, cb) => {
//   // reject a file
//   if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
//     cb(null, true);
//   } else {
//     cb(null, false);
//   }
// };
// const upload = multer({
//   // storage: storage,
//   dest: "uploads/",
//   // filename: new Date().toISOString() + file.originalname,
//   fileFilter: fileFilter,
// });

router.get("/courses", verifyToken, AdminCourseController.getCourses);
router.get("/courseCount", AdminCourseController.getCount);
router.get("/course/:id", verifyToken, AdminCourseController.getCourseData);
router.post("/courses/add", verifyToken, AdminCourseController.postCourseData);
router.post(
  "/courses/upload-image",
  verifyToken,
  AdminCourseController.uploadImage
);
router.put(
  "/courses/edit/:id",
  verifyToken,
  AdminCourseController.updateCourses
);
router.post("/courses/search", AdminCourseController.searchQuery);
router.get("/images/:key", (req, res) => {
  console.log(req.params);
  const key = req.params.key;
  const readStream = getFileStream(key);

  readStream.pipe(res);
});

// ADMIN COURSE OVERVIEW ROUTES

router.get(
  "/overview",
  verifyToken,
  AdminCourseOverviewController.getCourseOverviews
);
router.get("/overviewCount", AdminCourseOverviewController.getCount);
router.get(
  "/overview/:id",
  verifyToken,
  AdminCourseOverviewController.getCourseOverviewbyID
);
router.post(
  "/overview/add",
  verifyToken,
  AdminCourseOverviewController.postOverviewData
);
router.put(
  "/overview/edit/:id",
  verifyToken,
  AdminCourseOverviewController.updateCourseOverview
);

router.post(
  "/overview/search",
  // verifyToken,
  AdminCourseOverviewController.searchQuery
);

// ADMIN CURRICULUM ROUTES
router.get("/curriculum", verifyToken, AdminCurriculumController.getCurriculum);
router.get("/curriculumCount", AdminCurriculumController.getCount);
router.get(
  "/curriculum/:id",
  verifyToken,
  AdminCurriculumController.getCurriculumbyID
);
router.post(
  "/curriculum/add",
  verifyToken,
  AdminCurriculumController.postCurriculumData
);
router.put(
  "/curriculum/edit/:id",
  verifyToken,
  AdminCurriculumController.updateCurriculum
);
router.post(
  "/curriculum/search",
  // verifyToken,
  AdminCurriculumController.searchQuery
);

//FAQ ROUTES
router.get("/faq", verifyToken, AdminFAQController.getFAQ);
router.get("/faqCount", AdminFAQController.getCount);
router.get("/faq/:id", verifyToken, AdminFAQController.getFAQbyID);
router.post("/faq/add", verifyToken, AdminFAQController.postFAQData);
router.put("/faq/edit/:id", verifyToken, AdminFAQController.updateFAQ);
router.post("/faq/search", AdminFAQController.searchQuery);

// Certification ROUTES
router.get(
  "/certification",
  verifyToken,
  AdminCertificationController.getCertification
);
router.get("/certificationCount", AdminCertificationController.getCount);
router.get(
  "/certification/:id",
  verifyToken,
  AdminCertificationController.getCertificationbyID
);
router.post(
  "/certification/add",
  verifyToken,
  AdminCertificationController.postCertificationData
);
router.put(
  "/certification/edit/:id",
  verifyToken,
  AdminCertificationController.updateCertification
);
router.post("/certification/search", AdminCertificationController.searchQuery);

// Course dates ROUTES
router.get("/coursedate", verifyToken, AdminCoursedateController.getCoursedate);
router.get("/coursedateCount", AdminCoursedateController.getCount);
router.get(
  "/coursedate/:id",
  verifyToken,
  AdminCoursedateController.getCourdedatebyID
);
router.post(
  "/coursedate/add",
  verifyToken,
  AdminCoursedateController.postCoursedate
);
router.put(
  "/coursedate/edit/:id",
  verifyToken,
  AdminCoursedateController.updateCoursedate
);
router.post("/coursedate/search", AdminCoursedateController.searchQuery);

// Review Routes
router.get("/review", verifyToken, AdminReviewController.getReview);
router.get("/reviewCount", AdminReviewController.getCount);
router.get("/review/:id", verifyToken, AdminReviewController.getReviewbyID);
router.post("/review/add", verifyToken, AdminReviewController.postReviewData);
router.put("/review/edit/:id", verifyToken, AdminReviewController.updateReview);
router.post("/review/search", AdminReviewController.searchQuery);

// Blog ROUTES
router.get("/blog", verifyToken, AdminBlogController.getBlog);
router.get("/blogCount", AdminBlogController.getCount);
router.get("/blog/:id", verifyToken, AdminBlogController.getBlogbyID);
router.post("/blog/add", verifyToken, AdminBlogController.postBlogData);
router.put("/blog/edit/:id", verifyToken, AdminBlogController.updateBlogData);
router.post("/blog/search", AdminBlogController.searchQuery);

// Article ROUTES
router.get("/article", verifyToken, AdminArticleController.getArticle);
router.get("/articleCount", AdminArticleController.getCount);
router.get("/article/:id", verifyToken, AdminArticleController.getArticlebyID);

router.post(
  "/article/add",
  verifyToken,
  AdminArticleController.postArticleData
);
router.put(
  "/article/edit/:id",
  verifyToken,
  AdminArticleController.updateArticles
);
router.post("/article/search", AdminArticleController.searchQuery);

// AUTHOR ROUTES

router.get("/author", AdminAuthorController.getAuthors);
router.get("/authorCount", AdminAuthorController.getCount);
router.get("/author/:id", AdminAuthorController.getAuthorsData);
router.post("/author/add", AdminAuthorController.postAuthorsData);
router.put("/author/edit/:id", AdminAuthorController.updateAuthor);
router.post("/author/search", AdminAuthorController.searchQuery);
router.post(
  "/author/upload-image",
  verifyToken,
  AdminAuthorController.uploadImage
);

router.post(
  "/auth/createsuperadmin",
  // checkDuplicateUsernameOrEmail,
  CreateSuperAdminController.createSuperadmin
);
router.post("/auth/createadmin", CreateSuperAdminController.createAdmin);

router.post("/auth/login", CreateSuperAdminController.login_user);
router.get("/auth/logout", CreateSuperAdminController.logout_user);

export default router;
