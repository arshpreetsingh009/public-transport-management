const express = require("express");
const { getBusses } = require("../controllers/busses.controller");

const bussesRoute = express.Router();

bussesRoute.post("/getbusses", getBusses);

module.exports = bussesRoute;
