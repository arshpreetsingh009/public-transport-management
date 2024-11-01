const express = require("express");
const app = express();

const PORT = 8000;

app.use(express.json());

app.get("/", (req, res) => {
  console.log("hello world");
});
app.listen(PORT, () => {
  console.log(`app started listening to post : ${PORT}`);
});
