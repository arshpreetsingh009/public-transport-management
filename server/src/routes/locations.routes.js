const express = require("express");
const {
  getLocations,
  postLocations,
} = require("../controllers/locations.controller");

const LocationsRoute = express.Router();

// LocationsRoute.post("/locations", postLocations);
LocationsRoute.get("/locations", getLocations);

module.exports = LocationsRoute;
