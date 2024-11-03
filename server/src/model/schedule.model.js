const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema(
  {
    bus_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Bus", // Reference to a Bus model (assuming you have one)
    },
    route_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Route", // Reference to a Route model
    },
    departure_date: {
      type: Date,
      required: true,
    },
    departure_time: {
      type: Date,
      required: true,
    },
    arrival_time: {
      type: Date,
      required: true,
    },
    available_seats: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
