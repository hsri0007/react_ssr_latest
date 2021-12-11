import { Op, Sequelize, QueryTypes, query } from "sequelize";
import { Publishers, sequelize } from "../models";
const bcrypt = require("bcryptjs");

const checkDuplicateUsernameorEmail = (req, res, next) => {
  Publishers.findOne({
    where: {
      name: req.body.username,
    },
  }).then((user) => {
    if (user) {
      res.status(400).send({
        message: "Failed! Username is already in use!",
      });
      return;
    }

    // Email
    Publishers.findOne({
      where: {
        email: req.body.email,
      },
    }).then((user) => {
      if (user) {
        res.status(400).send({
          message: "Failed! Email is already in use!",
        });
        return;
      }

      next();
    });
  });
};

module.exports = checkDuplicateUsernameorEmail;
