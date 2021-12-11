"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Course, BlogCategory, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getBlog(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      const data = await BlogCategory.findAll({
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
      const data = await BlogCategory.findAndCountAll({});
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

  async getBlogbyID(req, res) {
    try {
      const blog_data = await BlogCategory.findOne({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        blog_data,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async postBlogData(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await BlogCategory.create({
        blog_category: req.body.blog_category,
        description: req.body.description,
        meta_title: req.body.meta_title,
        url_title: req.body.url_title,
        meta_desc: "",
        status: stat,
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
  async updateBlogData(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await BlogCategory.update(
        {
          blog_category: req.body.blog_category,
          description: req.body.description,
          meta_title: req.body.meta_title,
          url_title: req.body.url_title,
          meta_desc: "",
          status: stat,
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
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);

      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);

      const { query } = req.body;

      const data = await BlogCategory.findAndCountAll({
        where: {
          blog_category: {
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
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
};
