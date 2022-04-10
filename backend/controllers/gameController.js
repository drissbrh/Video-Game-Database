import Game from "../models/gameModel.js";

const getAllGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.json(games);
  } catch (error) {
    console.log(`${Error}`.red);
  }
};

const getGameById = async (req, res) => {
  try {
    const game = await Game.findById(req.params.id);
    res.json(game);
  } catch (error) {
    console.log(`${Error}`.red);
  }
};

export { getAllGames, getGameById };
