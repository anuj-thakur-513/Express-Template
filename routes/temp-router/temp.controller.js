const { getAllData } = require("../../models/temp.model");

async function httpGetAllData(req, res) {
  return res.status(200).json(await getAllData());
}

module.exports = {
  httpGetAllData,
};
