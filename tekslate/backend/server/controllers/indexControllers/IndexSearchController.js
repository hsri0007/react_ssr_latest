"use strict";
import { Op, Sequelize, QueryTypes, query } from "sequelize";
import {
  Course,
  Articles,
  Curriculum,
  Coursedate,
  Overview,
  SubCategory,
  FAQ,
  Enquiry,
  PageType,
  sequelize,
} from "../../models";

import getCourses from "../AdminCourseController";
const algoliasearch = require("algoliasearch");

const client = algoliasearch("VMW7X9XDJ9", "a1176e80e10d794b6d4caec633bb3e45");
const index = client.initIndex("tekslate");

export default {
  async createIndex(req, res) {
    const courses = await Course.findAll({
      attributes: [
        "id",
        "course",
        "url_title",
        "image",
        "duration",
        "lab_sessions",
        "enrolled",
        "rating",
      ],
    });
    const c = JSON.parse(JSON.stringify(courses));

    const newc = await c.map((value) => {
      value.type = "course";
      return value;
    });
    const articles = await Articles.findAll({
      attributes: ["id", "title", "url_title", "rating", "meta_desc"],
    });
    const ar = JSON.parse(JSON.stringify(articles));

    const newar = await ar.map((value) => {
      value.type = "article";
      return value;
    });
    const subcat = await SubCategory.findAll({
      attributes: [
        "id",
        "sub_category",
        "page_title",
        "url_title",
        "description",
      ],
    });
    const sc = JSON.parse(JSON.stringify(subcat));

    const newsc = await sc.map((value) => {
      value.type = "category";
      return value;
    });
    // index
    //   .saveObjects(newc,{
    //     autoGenerateObjectIDIfNotExist: true
    //   })
    //   .then(({ objectIDs }) => {
    //     console.log(objectIDs);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // index
    //   .saveObjects(newar,{
    //     autoGenerateObjectIDIfNotExist: true
    //   })
    //   .then(({ objectIDs }) => {
    //     console.log(objectIDs);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // index
    //   .saveObjects(newsc,{
    //     autoGenerateObjectIDIfNotExist: true
    //   })
    //   .then(({ objectIDs }) => {
    //     console.log(objectIDs);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
    index
      .setSettings({
        searchableAttributes: [
          "course",
          "title",
          "url_title",
          "sub_category",
          "page_title",
          "meta_desc",
          "type",
        ],
      })
      .then(() => {
        console.log("Done");
      });
    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      newar,
    });
  },

  async searchResultAutocomplete(req, res) {
    const search = req.query.search;

    var fin_result = [];

    const searchResultsCourse = await index.search(search, {
      attributesToRetrieve: ["course", "url_title"],
      // attributesToHighlight: [],
      filters: "type:course",
      offset: 0,
      length: 5,
    });

    const searchResultsArticles = await index.search(search, {
      attributesToRetrieve: ["title", "url_title"],
      // attributesToHighlight: [],
      filters: "type:article",
      offset: 0,
      length: 5,
    });
    var final_object = {};
    final_object.course = JSON.parse(JSON.stringify(searchResultsCourse.hits));
    final_object.articles = JSON.parse(
      JSON.stringify(searchResultsArticles.hits)
    );
    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      final_object,
    });
  },
  async searchResults(req, res) {
    const search = req.query.search;
    var off, lim;
    if (search === "") {
      off = 0;
      lim = 9;
    }
    const search_res = await index.search(search, {
      facets: ["type"],
    });

    return res.status(200).json({
      success: true,
      message: "Successfully updated",
      search_res,
    });
  },
};
