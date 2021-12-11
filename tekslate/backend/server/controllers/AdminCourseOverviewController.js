"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Overview } from "../models";
import { Course, sequelize } from "../models";
// import CourseOverview from "../models/CourseOverview";
const mergeJSON = require("merge-json");

export default {
  async getCourseOverviews(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string" ? 0 : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string" ? -1 : parseInt(req.query.limit);
      var data;
      if (lim !== -1) {
        data = await sequelize.query(
          "SELECT o.id, c.course,o.course_id,o.overview_title,o.overview_description,o.o_status FROM overview as o INNER JOIN course as c ON o.course_id=c.id LIMIT :lim OFFSET :off;",
          {
            replacements: { lim: lim, off: off },

            type: QueryTypes.SELECT,
          }
        );
      } else {
        data = await sequelize.query(
          "SELECT o.id, c.course,o.course_id,o.overview_title,o.overview_description,o.o_status FROM overview as o INNER JOIN course as c ON o.course_id=c.id ",
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
      const data = await Overview.findAndCountAll({});
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
  async getCourseOverviewbyID(req, res) {
    try {
      const ov_data = await sequelize.query(
        "SELECT ov.id,c.course,ov.course_id,ov.overview_title,ov.overview_description,ov.o_status FROM overview as ov INNER JOIN course as c ON ov.course_id = c.id WHERE ov.id = :rep",
        {
          replacements: { rep: req.params.id },

          type: QueryTypes.SELECT,
        }
      );
      console.log(ov_data);
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        ov_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed please try again",
      });
    }
  },

  // async getCourseOverviewbyID(req, res) {
  //   try {
  //     const ov_data = await Overview.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });

  //     const data = await Course.findOne({
  //       attributes: ["course"],
  //       where: {
  //         id: ov_data.course_id,
  //       },
  //     });

  //     const final = await mergeJSON.merge(ov_data.dataValues, data.dataValues);

  //     return res.status(200).json({
  //       success: true,
  //       message: "This is course controller",
  //       final,
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     return res.status(500).json({
  //       success: true,
  //       message: "Some thing failed",
  //     });
  //   }
  // },

  async postOverviewData(req, res) {
    var stat = req.body.status;
    if (stat == "active") stat = 1;
    else stat = 0;
    try {
      // const c_id = await Course.findOne({
      //   attributes: ["id"],
      //   where: {
      //     course: req.body.course,
      //   },
      // });
      const data = await Overview.create({
        course_id: req.body.id,
        overview_title: req.body.overview_title,
        overview_description: req.body.overview_description,
        o_status: stat,
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
  async updateCourseOverview(req, res) {
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
      const data = await Overview.update(
        {
          course_id: req.body.id,
          overview_title: req.body.overview_title,
          overview_description: req.body.overview_description,
          o_status: stat,
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
        typeof req.query.limit !== "string" ? 10 : parseInt(req.query.limit);
      const { query } = req.body;
      const ct = await Overview.findAndCountAll({
        where: {
          overview_title: {
            [Op.like]: `%${query}%`,
          },
        },
        offset: off,
        limit: lim,
      });
      console.log(ct.count);
      const data = await sequelize.query(
        "SELECT ov.id,c.course,ov.course_id,ov.overview_title,ov.overview_description,ov.o_status FROM overview as ov INNER JOIN course as c ON ov.course_id = c.id WHERE ov.overview_title LIKE :rep LIMIT :lim OFFSET :off;",
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
