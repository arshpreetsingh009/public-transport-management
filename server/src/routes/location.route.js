const express = require("express");

const loactionRoute = express.Router();
loactionRoute.post("/login", userLogin);

module.exports = loactionRoute;
