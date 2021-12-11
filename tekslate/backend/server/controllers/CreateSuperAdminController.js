import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Publishers, sequelize } from "../models";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const config = require("../config/auth_config.js");
const secret = config.secret;
const saltRounds = 10;

export default {
  async createSuperadmin(req, res) {
    try {
      if (req.body.author === "info@appmajix.com") {
        const password = req.body.password;
        const hash = await bcrypt.hash(password, saltRounds);

        const record = await Publishers.findOne({
          where: {
            email: req.body.email,
          },
        });

        if (record) {
          return res.status(200).json({
            success: true,
            message: "User Already Exists",
            data,
          });
        }

        const data = await Publishers.create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          type: "superadmin",
        });
        console.log(data.toJSON());
        return res.status(200).json({
          success: true,
          message: "Successfully Created",
          data,
        });
      } else {
        return res.status(200).json({
          success: true,
          message: "Not authorized",
          data,
        });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  async createAdmin(req, res) {
    try {
      console.log(req.headers);
      console.log(req.headers.type);
      const type = req.headers.type;
      console.log(type);

      if (type === "superadmin") {
        const password = req.body.password;
        const hash = await bcrypt.hash(password, saltRounds);

        const data = await Publishers.create({
          name: req.body.name,
          email: req.body.email,
          password: hash,
          type: "admin",
        });
        console.log(data.toJSON());
        return res.status(200).json({
          success: true,
          message: "Successfully Created",
          data,
        });
      } else {
        return res.status(401).json({
          success: false,
          message: "Not authorized",
        });
      }
    } catch (err) {
      console.log(error);
      return res.status(500).json({
        success: false,
        message: "Some thing failed",
      });
    }
  },
  async login_user(req, res) {
    console.log(req.body);
    return Publishers.findOne({
      where: {
        email: req.body.email,
      },
    })
      .then((user) => {
        if (!user) {
          return res.status(404).send({ message: "User Not found." });
        }

        var passwordIsValid = bcrypt.compareSync(
          req.body.password,
          user.password
        );

        if (!passwordIsValid) {
          return res.status(401).send({
            accessToken: null,
            message: "Invalid Password!",
          });
        }
        // req.session.user = user;

        var token = jwt.sign({ id: user.id }, secret, {
          expiresIn: 86400 * 10, // 24 hours
        });
        console.log(token);
        return res.status(200).json({
          id: user.id,
          username: user.name,
          email: user.email,
          type: user.type,
          accessToken: token,
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({ message: err.message });
      });
  },
  async logout_user(req, res) {
    req.session.destroy();
    return res.status(200).send({
      message: "Successfully logged out",
    });
  },
};
