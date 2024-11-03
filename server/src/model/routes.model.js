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
});

const routeSchema = new mongoose.Schema(
  {
    start_location: {
      type: String,
      required: true,
    },
    end_location: {
      type: String,
      required: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    stops: [stopSchema],
  },
  { timestamps: true }
);

const Route = mongoose.model("Route", routeSchema);

module.exports = Route;
