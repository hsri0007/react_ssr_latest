"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Coursedate } from "../models";
import { Course, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getCoursedate(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      const data = await Coursedate.findAll({
        offset: off,
        limit: lim,
      });

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
      const data = await Coursedate.findAndCountAll({});
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

  async getCourdedatebyID(req, res) {
    try {
      const cu_data = await Coursedate.findOne({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Data retrieved Successfully",
        cu_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async postCoursedate(req, res) {
    try {
      const data = await Coursedate.create({
        course: 0,
        demo_date: req.body.demo_date,
        batch_type: req.body.batch_type,
        flag: 0,
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
  async updateCoursedate(req, res) {
    try {
      const data = await Coursedate.update(
        {
          course: 0,
          demo_date: req.body.demo_date,
          batch_type: req.body.batch_type,
          flag: 0,
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
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      const { query } = req.body;
      const data = await Coursedate.findAndCountAll({
        where: {
          demo_date: {
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
