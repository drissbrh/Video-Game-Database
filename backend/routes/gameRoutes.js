import express from "express";
import { getAllGames, getGameById } from "../controllers/gameController.js";

const gameRouter = express.Router();

gameRouter.get("/", getAllGames);
gameRouter.get("/:id", getGameById);

export default gameRouter;
