"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Course, Reviews, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getReview(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string" ? 0 : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string" ? -1 : parseInt(req.query.limit);
      var data;
      if (lim !== -1) {
        data = await sequelize.query(
          "SELECT r.id, c.course,r.rating,r.description,r.r_status FROM reviews as r INNER JOIN course as c ON r.course_id=c.id  LIMIT :lim OFFSET :off ;",

          {
            replacements: { lim: lim, off: off },
            type: QueryTypes.SELECT,
          }
        );
      } else {
        data = await sequelize.query(
          "SELECT r.id,c.course,r.rating,r.description,r.r_status FROM reviews as r INNER JOIN course as c ON r.course_id=c.id  ;",

          {
            type: QueryTypes.SELECT,
          }
        );
      }

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
      const data = await Reviews.findAndCountAll({});
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

  async getReviewbyID(req, res) {
    try {
      const review_data = await sequelize.query(
        "SELECT r.id,c.course,r.course_id,r.name,r.description,r.rating,r.r_status FROM reviews as r INNER JOIN course as c ON c.id = r.course_id WHERE r.id=:rep;",
        {
          replacements: { rep: req.params.id },

          type: QueryTypes.SELECT,
        }
      );

      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        review_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async postReviewData(req, res) {
    try {
      // const c_id = await Course.findOne({
      //   attributes: ["id"],
      //   where: {
      //     course: req.body.course,
      //   },
      // });
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Reviews.create({
        course_id: req.body.id,
        name: req.body.name,
        rating: req.body.rating,
        image: "",
        description: req.body.description,
        linkedin_profile: "",
        designation: "abc",
        r_status: stat,
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
  async updateReview(req, res) {
    try {
      // const c_id = await Course.findOne({
      //   attributes: ["id"],
      //   where: {
      //     course: req.body.course,
      //   },
      // });
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Reviews.update(
        {
          course_id: req.body.id,
          name: req.body.name,
          rating: req.body.rating,
          image: "",
          description: req.body.description,
          linkedin_profile: "",
          designation: "abc",
          r_status: stat,
        },
        {
          where: { id: req.params.id },
        }
      );

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
        typeof req.query.offset !== "string" ? 0 : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string" ? 5 : parseInt(req.query.limit);
      const { query } = req.body;
      const ct = await Reviews.findAndCountAll({
        where: {
          description: {
            [Op.like]: `%${query}%`,
          },
        },
        offset: off,
        limit: lim,
      });
      const data = await sequelize.query(
        "SELECT r.id,c.course,r.rating,r.description,r.r_status FROM reviews as r INNER JOIN course as c ON r.course_id=c.id WHERE r.description LIKE :rep LIMIT :lim OFFSET :off;",
        {
          replacements: { rep: `%${query}%`, lim: lim, off: off },
          type: QueryTypes.SELECT,
        }
      );
      data.push({ count: ct.count });

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
