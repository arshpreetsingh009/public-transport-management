const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  route_id: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: "Route", // Reference to a Route model (assuming you have one)
  },
  departure_time: {
    type: Date,
    required: true,
  },
  arrival_time: {
    type: Date,
    required: true,
  },
});

const busSchema = new mongoose.Schema(
  {
    bus_number: {
      type: String,
      required: true,
      unique: true, // Ensures bus number is unique
    },
    bus_type: {
      type: String,
      required: true,
      enum: ["AC", "Non-AC", "Sleeper", "Luxury"], // Adjust types as necessary
    },
    total_seats: {
      type: Number,
      required: true,
      min: 1, // Ensures at least one seat
    },
    features: {
      type: [String],
      default: [], // Default to an empty array if no features are provided
    },
    operator: {
      type: String,
      required: true,
    },
    schedule: [scheduleSchema],
  },
  { timestamps: true }
);

const Bus = mongoose.model("Bus", busSchema);

module.exports = Bus;
