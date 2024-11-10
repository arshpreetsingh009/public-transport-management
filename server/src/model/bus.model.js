const mongoose = require("mongoose");

const busSchema = new mongoose.Schema(
  {
    bus_number: {
      type: String,
      required: true,
      unique: true, // Ensures bus number is unique
    },
    bus_name: {
      type: String,
      required: true, // New field for bus name
    },
    bus_type: {
      type: String,
      required: true,
      enum: ["AC", "Non-AC", "Sleeper", "Luxury"], // Adjust types as necessary
    },
  },
  { timestamps: true }
);

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
