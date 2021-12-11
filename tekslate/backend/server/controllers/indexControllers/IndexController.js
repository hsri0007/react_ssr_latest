"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import {
  Course,
  Articles,
  Curriculum,
  Coursedate,
  Overview,
  FAQ,
  Enquiry,
  PageType,
  sequelize,
} from "../../models";

require("dotenv").config();
const aws = require("aws-sdk");
var Closeio = require("close.io");

var closeio = new Closeio("api_46lO68pizVhOz65ZuJriiB.0TwiSNieBbAFgcNKxlOEKG");

const ses_config = {
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_KEY,
  region: "us-west-2",
};
var geoip = require("geoip-country");

const sendEmail = (data) => {
  const reply = data.email;
  let params = {
    Source: "info@mindmajix.com",
    Destination: {
      ToAddresses: ["info@tekslate.com"],
    },
    ReplyToAddresses: [reply],
    Message: {
      Body: {
        Html: {
          Charset: "UTF-8",
          Data: JSON.stringify(data),
        },
      },
      Subject: {
        Charset: "UTF-8",
        Data: `Lead, ${data.fullname}!`,
      },
    },
  };
  return AWS_SES.sendEmail(params).promise();
};

const AWS_SES = new aws.SES(ses_config);

export default {
  async getAllCourses(req, res) {
    try {
      var final_obj = {};
      // const url_title = req.query.url_title;
      const courses = await Course.findAll();
      if (courses === null) {
        return res.status(404).json({
          success: false,
          message: "No courses found",
        });
      }
      final_obj = courses;

      return res.status(200).json({
        success: true,
        message: "Courses",
        final_obj,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some error occured",
      });
    }
  },
  async getDetails(req, res) {
    try {
      var final_obj = {};
      const url_title = req.query.url_title;
      const course_overview = await Course.findOne({
        // attributes : ['id','course'],
        where: {
          url_title: url_title,
        },
      });
      if (course_overview === null) {
        return res.status(404).json({
          success: false,
          message: "No such course found",
        });
      }
      final_obj.overview = course_overview.dataValues;
      const course_id = course_overview.dataValues.id;
      const course_curriculum = await Curriculum.findAll({
        where: {
          course_id: course_id,
        },
      });

      final_obj.curriculum = JSON.parse(JSON.stringify(course_curriculum));

      const demo_dates = await Coursedate.findAll({});
      final_obj.demo_dates = JSON.parse(JSON.stringify(demo_dates));

      const course_objectives = await Overview.findAll({
        where: {
          course_id: course_id,
        },
      });

      final_obj.objectives = JSON.parse(JSON.stringify(course_objectives));

      const faqs = await FAQ.findAll({
        where: {
          course_id: course_id,
        },
      });

      final_obj.faq = JSON.parse(JSON.stringify(faqs));

      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        final_obj,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async createEnquiry(req, res) {
    try {
      var geo = geoip.lookup(req.ip);

      const entry = req.body;
      const enq = await Enquiry.create({
        fullname: req.body.fullname,
        email: req.body.email,
        phone: req.body.phone,
        message: req.body.message,
        page_url: req.body.page_url,
        ipaddress: req.ip,
        country: "IN",
        status: 1,
      });
      const em = await sendEmail(entry);

      //api_46lO68pizVhOz65ZuJriiB.0TwiSNieBbAFgcNKxlOEKG
      const obj = {
        name: entry.email,
        contacts: [
          {
            name: entry.email,
            emails: [
              {
                type: " office",
                email: entry.email,
              },
            ],
            phones: [
              {
                type: "office",
                phone: entry.phone,
              },
            ],
            // "custom.lcf_DR314aQ7aiFG7ArQOgve0OGuVYq4YGGVRmmM7grFNIL": enq.country,
            // "custom.lcf_iYxdrZ0RnKnNSFe3kTCqMRhMg3NVfI6RdNG6K9DylJp": entry.page_url,
            // "custom.lcf_2pgPHq8eUFuj4o9YAUkWJl53fjZSgG3V4zkzUGrXAro": entry.message,
            // "custom.lcf_plur3Eoe4tpGRoMEwcikOs9azk85jYmVl5REEeJMolz": "Tekslate"
          },
        ],
      };
      closeio.lead.create(obj).then(function (lead) {
        return closeio.lead.read(lead.id);
      });
      // .catch((err)=>{
      //   console.log("In Error");
      //   console.log(err);
      // });
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        enq,
      });
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async popPageType(req, res) {
    const courses = await Articles.findAll({
      attributes: [
        ["title", "name"],
        ["url_title", "slug"],
      ],
    });
    const c = JSON.parse(JSON.stringify(courses));

    const newc = await c.map((value) => {
      value.type = "articles";
      value.status = 1;
      return value;
    });

    const addpt = await PageType.bulkCreate(newc, {
      returning: true,
    });

    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      addpt,
    });
  },

  async getTrending(req, res) {
    try {
      const trends = await Course.findAll({
        where: {
          trending: "1",
        },
      });
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        trends,
      });
    } catch (error) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async getPopular(req, res) {
    try {
      const pops = await Course.findAll({
        where: {
          popular: 1,
        },
      });
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        pops,
      });
    } catch (error) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
  async getPageType(req, res) {
    try {
      var final_obj = {};
      const url = req.query.url_title;
      const type_d = await PageType.findOne({
        where: {
          slug: url,
        },
      });
      final_obj.type_d = type_d;
      return res.status(200).json({
        success: true,
        message: "Successfully updated",
        final_obj,
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Form data Invalid",
      });
    }
  },
};
