const express = require("express");
const { postBusses } = require("../controllers/busses.controller");

const bussesRoute = express.Router();

bussesRoute.post("/postbusses", postBusses);

module.exports = bussesRoute;
