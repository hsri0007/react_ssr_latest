import { Op, Sequelize } from "sequelize";
import { Authors } from "../models";

// const { Course } = model;

const { profileAuthorImgUpload } = require("../middleware/s3v2");

export default {
  async getAuthors(req, res) {
    try {
      const off =
        typeof req.query.offset !== "string"
          ? req.query.offset
          : parseInt(req.query.offset);
      const lim =
        typeof req.query.limit !== "string"
          ? req.query.limit
          : parseInt(req.query.limit);

      const data = await Authors.findAll({
        offset: off,
        limit: lim,
      });
      console.log("Check");
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
      const data = await Authors.findAndCountAll({});
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

  async getAuthorsData(req, res) {
    try {
      const data = await Authors.findOne({
        where: {
          id: req.params.id,
        },
      });

      return res.status(200).json({
        success: true,
        message: "Data retrieved Successfully",
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

  async postAuthorsData(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Authors.create({
        author_designation: req.body.author_designation,
        author_name: req.body.author_name,
        author_bio: req.body.author_bio,
        author_img: req.body.image,
        author_url: req.body.author_url,
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
  async uploadImage(req, res) {
    profileAuthorImgUpload(req, res, (error) => {
      console.log("requestOkokok", req.file);
      console.log("error", error);
      if (error) {
        console.log("errors", error);
        res.json({
          success: false,
          message: "Invalid file",
          error: error,
        });
      } else {
        // If File not found
        if (req.file === undefined) {
          console.log("Error: No File Selected!");
          res.json({
            success: false,
            message: "File is not Found",
            error: "Undefined",
          });
        } else {
          // If Success
          const imageName = req.file.key;
          const imageLocation = req.file.location;
          // Save the file name into database into profile model
          res.json({
            success: true,
            image: imageName,
            location: imageLocation,
          });
        }
      }
    });
  },
  async updateAuthor(req, res) {
    try {
      var stat = req.body.status;
      if (stat == "active") stat = 1;
      else stat = 0;
      const data = await Authors.update(
        {
          author_designation: req.body.author_designation,
          author_name: req.body.author_name,
          author_bio: req.body.author_bio,
          author_img: req.body.image,
          author_url: req.body.author_url,
          status: stat,
        },
        {
          where: { id: req.params.id },
        }
      ).then((resp) => {
        console.log(resp);
        return resp;
      });

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
      const data = await Authors.findAndCountAll({
        where: {
          author_name: {
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
