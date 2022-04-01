const express = require("express");
const { getAllGames, getGameById } = require("../controllers/gameController");

const gameRouter = express.Router();

gameRouter.get("/", getAllGames);
gameRouter.get("/:id", getGameById);

module.exports = gameRouter;
