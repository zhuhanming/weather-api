const express = require("express");
const app = express();
const port = 3001;

app.get("/", (_req, res) => {
  res.send("Weather API is up and running");
});

app.get("/weather", (_req, res) => {
  const weathers = ["sunny", "cloudy", "rainy"];
  res.send({ weather: weathers[Math.floor(Math.random() * weathers.length)] });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
