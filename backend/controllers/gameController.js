import Game from "../models/gameModel.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
// const getAllGames = async (req, res) => {
//   const pageSize = 12;
//   const page = Number(req.query.pageNumber) || 1;
//   try {
//     const
//     const count = await Game.countDocuments();

//     const games = await Game.find()
//       .limit(pageSize)
//       .skip(pageSize * (page - 1));
//     res.json({ games, page, pages: Math.ceil(count / pageSize) });
//   } catch (error) {
//     console.log(`${Error}`.red);
//   }
// };

const getAllGames = async (req, res) => {
  const pageNumber = req.query.pageNumber ? req.query.pageNumber : 1;
  try {
    const link = await axios.get(
      `https://api.rawg.io/api/games?page=${pageNumber}&key=${process.env.API_KEY}`
    );
    const count = link.data?.count;
    const games = link.data?.results;
    const pageSize = games?.length;
    // console.log(count, games, pageSize);

    const pages = Math.ceil(count / pageSize);
    // console.log(count, games, pageSize, pages);

    res.json({ games, pages });
    // console.log(link.data);
    // res.status(200).json(link.data);
  } catch (error) {
    console.log(`${Error}`.red);
  }
};

const getGameById = async (req, res) => {
  console.log(req.params.id);
  try {
    const link = await axios.get(
      `https://api.rawg.io/api/games/${req.params.id}?key=${process.env.API_KEY}`
    );
    const screenshots = await axios.get(
      `https://api.rawg.io/api/games/${req.params.id}/screenshots?key=${process.env.API_KEY}`
    );

    const game = link.data;
    const screens = screenshots.data;

    res.json({ game, screens });
  } catch (error) {
    console.log(`${Error}`.red);
  }
};

export { getAllGames, getGameById };
