import express from "express";
import colors from "colors";
import connectDB from "./config/db.js";
//Routes
import gameRouter from "./routes/gameRoutes.js";
import userRouter from "./routes/userRoutes.js";
import favouriteRouter from "./routes/favouriteRoutes.js";
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import path from "path";
import dotenv from "dotenv";
import morgan from "morgan";

dotenv.config();
connectDB();
const app = express();

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/api/v1/games", gameRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/favourites", favouriteRouter);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("API is running....");
  });
}

app.use(notFound);
app.use(errorHandler);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on PORT ${PORT}`.yellow.bold);
});
