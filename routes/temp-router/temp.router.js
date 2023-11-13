const express = require("express");
const httpGetAllData = require("./temp.controller");

const tempRouter = express.Router();

tempRouter.get("/", httpGetAllData);

module.exports = {
  tempRouter,
};
