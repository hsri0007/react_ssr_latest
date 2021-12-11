"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Course, Certification, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getCertification(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string" ? 0 : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string" ? 5 : parseInt(req.query.limit);
      const data = await sequelize.query(
        "SELECT ce.id,c.course,ce.course_id,ce.certification_title,ce.certification_description,ce.certification_status FROM certification as ce INNER JOIN course as c ON ce.course_id=c.id LIMIT :lim OFFSET :off;",
        {
          replacements: { lim: lim, off: off },
          type: QueryTypes.SELECT,
        }
      );

      return res.status(200).json({
        success: true,
        message: "This is course controller",
        data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: true,
        message: "Some thing failed",
      });
    }
  },
  async getCount(req, res) {
    try {
      const data = await Certification.findAndCountAll({});
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
  async getCertificationbyID(req, res) {
    try {
      const curri_data = await sequelize.query(
        "SELECT ce.id,c.course,ce.course_id,ce.certification_title,ce.certification_description,ce.certification_status FROM certification as ce INNER JOIN course as c ON c.id = ce.course_id WHERE ce.id=:rep;",
        {
          replacements: { rep: req.params.id },
          type: QueryTypes.SELECT,
        }
      );

      return res.status(200).json({
        success: true,
        message: "Data retrieved Successfully",
        curri_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: true,
        message: "Some thing failed",
      });
    }
  },
  // async getCertificationbyID(req, res) {
  //   try {
  //     const cert_data = await Certification.findOne({
  //       where: {
  //         id: req.params.id,
  //       },
  //     });

  //     const data = await Course.findOne({
  //       attributes: ["course"],
  //       where: {
  //         id: cert_data.course_id,
  //       },
  //     });

  //     const final = await mergeJSON.merge(cert_data.dataValues, data.dataValues);

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

  async postCertificationData(req, res) {
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
      const data = await Certification.create({
        course_id: req.body.id,
        certification_title: req.body.certification_title,
        certification_description: req.body.certification_description,
        certification_status: stat,
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
  async updateCertification(req, res) {
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
      const data = await Certification.update(
        {
          course_id: req.body.id,
          certification_title: req.body.certification_title,
          certification_description: req.body.certification_description,
          certification_status: stat,
        },
        {
          where: { id: req.params.id },
        }
      );

      return res.status(200).json({
        success: true,
        message: "Data updated successfully",
        data,
      });
    } catch (err) {
      console.log(error);
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
      const ct = await Certification.findAndCountAll({
        where: {
          certification_title: {
            [Op.like]: `%${query}%`,
          },
        },
        offset: off,
        limit: lim,
      });
      const data = await sequelize.query(
        "SELECT ce.id,c.course,ce.course_id,ce.certification_title,ce.certification_description,ce.certification_status FROM certification as ce INNER JOIN course as c ON ce.course_id=c.id WHERE ce.certification_title LIKE :rep LIMIT :lim OFFSET :off;",

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
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
};
