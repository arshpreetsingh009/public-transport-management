const express = require("express");
const { postRoutes } = require("../controllers/routes.controller");

const routesRoute = express.Router();

routesRoute.post("/postRoutes", postRoutes);

module.exports = routesRoute;
