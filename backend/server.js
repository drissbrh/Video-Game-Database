const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const gameRouter = require("./routes/gameRoutes");
const path = require("path");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config();
connectDB();
const app = express();

app.use(express.json());

app.use("/api/v1/games", gameRouter);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Api Is Running");
  });
}
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.yellow.bold);
});
