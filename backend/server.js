const express = require("express");
const colors = require("colors");
const connectDB = require("./config/db");
const gameRouter = require("./routes/gameRoutes");
const path = require("path");

const app = express();
app.use(express.json());
connectDB();

app.use("/api/v1/games", gameRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "build", "index.html"));
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
