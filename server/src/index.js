require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");
const connectDB = require("./config/connectDB");

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const scheduleRoute = require("./routes/schedule.routes");
const LocationsRoute = require("./routes/locations.routes");

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));
app.use(scheduleRoute);
app.use(LocationsRoute);

connectDB(DATABASE_URL);
app.listen(PORT, () => {
  console.log(`app started listening to post : ${PORT}`);
});
