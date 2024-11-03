const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  places: {
    type: [String], // Array of strings
    required: true, // Set to true if the array is required
  },
});

const Location = mongoose.model("Location", locationSchema);

module.exports = Location;
