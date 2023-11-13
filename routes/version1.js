const express = require("express");
const tempRouter = require("./temp-router/temp.router");

const v1 = express.Router();

v1.use("/temp", tempRouter);

module.exports = {
  v1,
};
