const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const gameRouter = require("./routes/gameRoutes");

const app = express();

connectDB();
app.get("/", (req, res) => {
  res.send("Bad bad not good");
});

app.use("/api/v1/games", gameRouter);
const PORT = process.env.PORT || 5001;

app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.yellow.bold);
});
