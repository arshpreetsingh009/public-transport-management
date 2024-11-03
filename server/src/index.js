require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const app = express();
const connectDB = require("./config/connectDB");

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const routesRoute = require("./routes/routes.route");
const LocationsRoute = require("./routes/locations.routes");

app.use(express.json());
app.use(morgan("combined"));
app.use(routesRoute);
app.use(LocationsRoute);

connectDB(DATABASE_URL);
app.listen(PORT, () => {
  console.log(`app started listening to post : ${PORT}`);
});
