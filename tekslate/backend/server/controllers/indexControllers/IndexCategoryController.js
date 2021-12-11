"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { SubCategory, Course, sequelize, Categories } from "../../models";

export default {
  async getAllCategories(req, res) {
    try {

      const categories = await Categories.findAll();

      const cat = JSON.parse(JSON.stringify(categories));

      return res.status(200).json({
        success: true,
        message: "Categories",
        cat,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  async getAllSubCategories(req, res) {
    try {

      const categories = await SubCategory.findAll({
        attributes: ["id", "category", "sub_category", "url_title"],
      });

      const cat = JSON.parse(JSON.stringify(categories));
      for (var i = 0; i < cat.length; i++) {
        const numc = await Course.count({
          col: "id",
          where:
            sequelize.where(
              sequelize.fn("FIND_IN_SET", cat[i].id, sequelize.col("sub_category")),
              ">",
              0
            ),

        });

        cat[i].count = numc;
      }

      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        cat,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  async getCoursebyCatID(req, res) {
    try {
      const cat_id = req.params.cat_id;
      const courses = await Course.findAll({
        where: sequelize.where(
          sequelize.fn("FIND_IN_SET", cat_id, sequelize.col("sub_category")),
          ">",
          0
        ),
      });


      return res.status(200).json({
        success: true,
        message: "Data retrieved successfully",
        courses,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
};
