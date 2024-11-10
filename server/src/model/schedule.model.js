const mongoose = require("mongoose");
const stopSchema = new mongoose.Schema({
  stop_name: {
    type: String,
    required: true,
  },
  stop_time: {
    type: Date,
    required: true,
  },
  distance: {
    type: Number,
    required: true,
  },
});
const scheduleSchema = new mongoose.Schema(
  {
    bus_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Bus", // Reference to the Bus model
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
    stops: [stopSchema],
    available_seats: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);

module.exports = Schedule;
