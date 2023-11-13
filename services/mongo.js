const mongoose = require("mongoose");
const { DB_URL } = process.env;

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!!!");
});

mongoose.connection.on("error", (err) => {
  console.error(`Error in connecting to mongoDB: ${err}`);
});

async function mongoConnect() {
  await mongoose.connect(DB_URL);
}

module.exports = {
  mongoConnect,
};
