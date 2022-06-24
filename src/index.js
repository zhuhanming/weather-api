const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT ?? 8000;

app.use(helmet());
app.use(morgan("dev"));

app.get("/", (_req, res) => {
  res.send("Weather API is up and running");
});

app.get("/weather", async (_req, res) => {
  const weathers = ["sunny", "cloudy", "rainy"];
  const country = await prisma.country.findFirst();
  res.send({
    weather: weathers[Math.floor(Math.random() * weathers.length)],
    country: country.name,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
