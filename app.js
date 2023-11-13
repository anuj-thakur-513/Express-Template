const express = require("express");
const path = require("path");
const cors = require("cors");
const morgan = require("morgan");
const v1 = require("./routes/version1");

const app = express();

// Cross Origin Communication
app.use(
  cors({
    origin: "http://localhost:3000", // front-end server on local
  })
);

// logging all the requests into console for knowing current status
app.use(morgan("combined"));

app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));  // if you have any static folder post build, you can serve it here

// Versioned API calls
app.use("/v1", v1);

// root router
app.get("/", (req, res) => {
  res.send("Successfuly connected to server!!!");
});

module.exports = {
  app,
};
