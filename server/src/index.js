require("dotenv").config();
const express = require("express");
const app = express();
const connectDB = require("./config/connectDB");

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world");
});

connectDB(DATABASE_URL);
app.listen(PORT, () => {
  console.log(`app started listening to post : ${PORT}`);
});
