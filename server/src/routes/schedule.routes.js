const express = require("express");
const {
  createSchedule,
  getBusses,
} = require("../controllers/schedule.controller");

const scheduleRoute = express.Router();

scheduleRoute.post("/postschedule", createSchedule);
scheduleRoute.get("/getbusses", getBusses);

module.exports = scheduleRoute;
