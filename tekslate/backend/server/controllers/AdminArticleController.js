"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Course, Articles, sequelize } from "../models";
const mergeJSON = require("merge-json");

export default {
  async getArticle(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);
      const data = await Articles.findAll({
        offset: off,
        limit: lim,
      });
      console.log(data);
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
      const data = await Articles.findAndCountAll({});
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

  async getArticlebyID(req, res) {
    try {
      const blog_data = await Articles.findOne({
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

  async postArticleData(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Articles.create({
        blog_category: 0,
        blog_type: 1,
        wp_id: 1,
        description: req.body.description,
        title: req.body.title,
        meta_title: req.body.meta_title,
        url_title: req.body.url_title,
        meta_desc: req.body.meta_desc,

        views: 0,
        rating: req.body.rating,
        author: req.body.author,
        author_desc: req.body.author_desc,
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
  async updateArticles(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Articles.update(
        {
          blog_category: 0,
          blog_type: 1,
          wp_id: 1,
          description: req.body.description,
          title: req.body.title,
          meta_title: req.body.meta_title,
          url_title: req.body.url_title,
          meta_desc: req.body.meta_desc,

          views: 0,
          rating: req.body.rating,
          author: req.body.author,
          author_desc: req.body.author_desc,
          status: stat,
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

      const data = await Articles.findAndCountAll({
        where: {
          title: {
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
