"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { BlogCategory, Articles, sequelize } from "../../models";

export default {
  async getAllArticles(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      var final_obj = {};
      const data = await Articles.findAll({
        offset: off,
        limit: lim,
        where: {
          status: 0,
          blog_type: 1,
        },
      });
      final_obj.articles = JSON.parse(JSON.stringify(data));

      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        final_obj,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async getByArticleUrl(req, res) {
    try {
      var final_obj = {};
      const url_title = req.query.url_title;
      const article = await Articles.findOne({
        where: {
          url_title: url_title,
        },
      });

      final_obj.article = article;
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        final_obj,
      });
    } catch (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async getAllBlogs(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      var final_obj = {};
      const questions = await Articles.findAll({
        offset: off,
        limit: lim,
        where: {
          status: 0,
          blog_type: 2,
        },
      });
      final_obj.blogs = JSON.parse(JSON.stringify(questions));
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        final_obj,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },

  async getBlogByUrl(req, res) {
    try {
      const url_title = req.params.url_title;
      const content = await Articles.findAll({
        where: {
          url_title: url_title,
        },
      });
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        content,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  async getAllB(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      var final_obj = {};
      const questions = await Articles.findAll({
        offset: off,
        limit: lim,
        where: {
          status: 0,
          blog_type: 3,
        },
      });
      final_obj.blogs = JSON.parse(JSON.stringify(questions));
      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        final_obj,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
};
