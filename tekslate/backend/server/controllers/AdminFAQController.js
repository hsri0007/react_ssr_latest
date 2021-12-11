"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Course, FAQ, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getFAQ(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string" ? 0 : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string" ? -1 : parseInt(req.query.limit);
      var data;
      if (lim !== -1) {
        data = await sequelize.query(
          "SELECT f.id,c.course,f.course_id,f.faq_title,f.faq_description,f.f_status FROM faq as f INNER JOIN course as c ON f.course_id=c.id  LIMIT :lim OFFSET :off;",

          {
            replacements: { lim: lim, off: off },

            type: QueryTypes.SELECT,
          }
        );
      } else {
        data = await sequelize.query(
          "SELECT f.id,c.course,f.course_id,f.faq_title,f.faq_description,f.f_status FROM faq as f INNER JOIN course as c ON f.course_id=c.id ;",

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
      const data = await FAQ.findAndCountAll({});
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
  async getFAQbyID(req, res) {
    try {
      const faq_data = await sequelize.query(
        "SELECT f.id,c.course,f.course_id,f.faq_title,f.faq_description,f.f_status FROM faq as f INNER JOIN course as c ON c.id = f.course_id WHERE f.id=:rep;",
        {
          replacements: { rep: req.params.id },

          type: QueryTypes.SELECT,
        }
      );

      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        faq_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  // async getFAQbyID(req, res) {
  //   try {
  //     const faq_data = await FAQ.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });

  //     const data = await Course.findOne({
  //       attributes: ["course"],
  //       where: {
  //         id: faq_data.course_id,
  //       },
  //     });

  //     const final = await mergeJSON.merge(faq_data.dataValues, data.dataValues);

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

  async postFAQData(req, res) {
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
      const data = await FAQ.create({
        course_id: req.body.id,
        faq_title: req.body.faq_title,
        faq_description: req.body.faq_description,
        f_status: stat,
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
  async updateFAQ(req, res) {
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
      const data = await FAQ.update(
        {
          course_id: req.body.id,
          faq_title: req.body.faq_title,
          faq_description: req.body.faq_description,
          f_status: stat,
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
      // const ct = await FAQ.findAndCountAll({
      //   where: {
      //     curriculum_title: {
      //       [Op.like]: `%${query}%`,
      //     },
      //   },
      //   offset: off,
      //   limit: lim,
      // });
      const ct = await sequelize.query(
        "SELECT count(f.id) as count FROM faq as f INNER JOIN course as c ON f.course_id=c.id WHERE c.course LIKE :rep;",
        {
          replacements: { rep: `%${query}%` },

          type: QueryTypes.SELECT,
        }
      );
      console.log("*************");
      console.log(ct);
      console.log(ct[0].count);
      const data = await sequelize.query(
        "SELECT f.id,c.course,f.course_id,f.faq_title,f.faq_description,f.f_status FROM faq as f INNER JOIN course as c ON f.course_id=c.id WHERE c.course LIKE :rep LIMIT :lim OFFSET :off;",

        {
          replacements: { rep: `%${query}%`, lim: lim, off: off },

          type: QueryTypes.SELECT,
        }
      );
      data.push({ count: ct[0].count });

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
