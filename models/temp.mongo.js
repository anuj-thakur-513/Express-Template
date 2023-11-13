const mongoose = require("mongoose");

const tempSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
});

// connect tempSchema with the "Temps" collection
module.exports = mongoose.model("Temp", tempSchema);
