import Game from "../models/gameModel.js";

const getAllGames = async (req, res) => {
  const pageSize = 12;
  const page = Number(req.query.pageNumber) || 1;
  try {
    const count = await Game.countDocuments();

    const games = await Game.find()
      .limit(pageSize)
      .skip(pageSize * (page - 1));
    res.json({ games, page, pages: Math.ceil(count / pageSize) });
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
