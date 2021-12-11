"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Curriculum } from "../models";
import { Course, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getCurriculum(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string" ? 0 : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string" ? -1 : parseInt(req.query.limit);
      var data;
      if (lim !== -1) {
        data = await sequelize.query(
          "SELECT cu.id, c.course,cu.course_id,cu.curriculum_title,cu.curriculum_description,cu.c_status FROM curriculum as cu INNER JOIN course as c ON cu.course_id=c.id LIMIT :lim OFFSET :off;",

          {
            replacements: { lim: lim, off: off },

            type: QueryTypes.SELECT,
          }
        );
      } else {
        data = await sequelize.query(
          "SELECT cu.id, c.course,cu.course_id,cu.curriculum_title,cu.curriculum_description,cu.c_status FROM curriculum as cu INNER JOIN course as c ON cu.course_id=c.id;",

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
      const data = await Curriculum.findAndCountAll({});
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
  async getCurriculumbyID(req, res) {
    try {
      const curri_data = await sequelize.query(
        "SELECT cu.id,c.course,cu.course_id,cu.curriculum_title,cu.curriculum_description,cu.c_status FROM curriculum as cu INNER JOIN course as c ON cu.course_id = c.id WHERE cu.id = :rep",
        {
          replacements: { rep: req.params.id },

          type: QueryTypes.SELECT,
        }
      );
      console.log(curri_data);
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        curri_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  // async getCurriculumbyID(req, res) {
  //   try {
  //     const cu_data = await Curriculum.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });

  //     const data = await Course.findOne({
  //       attributes: ["course"],
  //       where: {
  //         id: cu_data.course_id,
  //       },
  //     });

  //     const final = await mergeJSON.merge(cu_data.dataValues, data.dataValues);

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

  async postCurriculumData(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      // const c_id = await Course.findOne({
      //   attributes: ["id"],
      //   where: {
      //     course: req.body.course,
      //   },
      // });
      const data = await Curriculum.create({
        course_id: req.body.id,
        curriculum_title: req.body.curriculum_title,
        curriculum_description: req.body.curriculum_description,
        c_status: stat,
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
  async updateCurriculum(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      // const c_id = await Course.findOne({
      //   attributes: ["id"],
      //   where: {
      //     course: req.body.course,
      //   },
      // });
      const data = await Curriculum.update(
        {
          course_id: req.body.id,
          curriculum_title: req.body.curriculum_title,
          curriculum_description: req.body.curriculum_description,
          c_status: stat,
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
      const ct = await Curriculum.findAndCountAll({
        where: {
          curriculum_title: {
            [Op.like]: `%${query}%`,
          },
        },
        offset: off,
        limit: lim,
      });

      const data = await sequelize.query(
        "SELECT cu.id,c.course,cu.course_id,cu.curriculum_title,cu.curriculum_description,cu.c_status FROM curriculum as cu INNER JOIN course as c ON cu.course_id=c.id WHERE cu.curriculum_title LIKE :rep LIMIT :lim OFFSET :off;",

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
