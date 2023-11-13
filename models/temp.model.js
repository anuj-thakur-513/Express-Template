const tempDb = require("./temp.mongo");

async function getAllData() {
  return await tempDb.find({});
}

module.exports = {
  getAllData,
};
