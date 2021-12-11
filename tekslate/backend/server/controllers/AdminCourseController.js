import { Op, Sequelize } from "sequelize";
import { Course } from "../models";

const fs = require("fs");
const util = require("util");
const unlinkFile = util.promisify(fs.unlink);

const { profileImgUpload } = require("../middleware/s3v2");

export default {
  async getCourses(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);

      const data = await Course.findAll({
        offset: off,
        limit: lim,
      });
      console.log("Check");
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  async getCount(req, res) {
    try {
      const data = await Course.findAndCountAll({});
      const count = data.count;
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        count,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async getCourseData(req, res) {
    try {
      const data = await Course.findOne({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Data retrieved Successfully",
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async postCourseData(req, res) {
    try {
      // console.log("In Post");
      // const file = req.file;
      // console.log(file);
      // const result = await uploadFile(file);
      // await unlinkFile(file.path);
      // console.log(result);
      // console.log("Image Path: " + result.Key);
      // res.send(result.Key);
      console.log(req.body);
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Course.create({
        // id: req.body.id,
        wp_id: 0,
        category: 0,
        sub_category: 0,
        course_type: 0,
        course: req.body.course,
        description: req.body.description,
        video: "0",
        duration: req.body.duration,
        lab_sessions: req.body.lab_sessions,
        image: req.body.image,
        trending: "no",
        popular: 0,
        certification: 0,
        rating: req.body.rating,
        enrolled: req.body.enrolled,
        url_title: req.body.url_title,
        meta_title: req.body.meta_title,
        meta_desc: req.body.meta_desc,
        status: stat,
        notes: 0,
        flag: 1,
      });

      return res.status(200).json({
        success: true,
        message: "Data posted successfully",
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async uploadImage(req, res) {
    profileImgUpload(req, res, (error) => {
      console.log("requestOkokok", req.file);
      console.log("error", error);
      if (error) {
        console.log("errors", error);
        res.json({
          success: false,
          message : "File is Invalid",
          error: error,
        });
      } else {
        // If File not found
        if (req.file === undefined) {
          console.log("Error: No File Selected!");
          res.json({
            success: false,
            message : "File is not found!",
            error : "Undefined"
          });
        } else {
          // If Success
          const imageName = req.file.key;
          const imageLocation = req.file.location;
          // Save the file name into database into profile model
          res.json({
            success: true,
            image: imageName,
            location: imageLocation,
          });
        }
      }
    });
  },
  async updateCourses(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Course.update(
        {
          wp_id: 0,
          category: 0,
          sub_category: "0",
          course_type: 0,
          course: req.body.courseName,
          description: "asfdgbnbfdss",
          description: req.body.description,
          video: "0",
          duration: req.body.duration,
          lab_sessions: req.body.labSessions,
          image: "0",
          trending: "no",
          popular: 0,
          certification: 0,
          rating: req.body.rating,
          enrolled: req.body.enrolled,
          url_title: req.body.urlTitle,
          meta_title: req.body.pageMetaTitle,
          meta_desc: req.body.metaDescription,
          status: stat,
          notes: "",
          flag: 1,
        },
        {
          where: { id: req.params.id },
        }
      );
      // .then((resp) => {
      //   console.log(resp);
      //   return resp;
      // });

      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async searchQuery(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      const { query } = req.body;
      const data = await Course.findAndCountAll({
        where: {
          course: {
            [Op.like]: `%${query}%`,
          },
        },
        offset: off,
        limit: lim,
      });
      return res.status(200).json({
        success: true,
        message: "Successfully Filtered",
        data,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
};
