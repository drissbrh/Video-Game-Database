import asyncHandler from "express-async-handler";
import Favourite from "../models/favouriteModel.js";
import game from "../models/gameModel.js";

// @desc    Create new favourite item
// @route   POST /api/favourites
// @access  Private
const addFavouriteItem = asyncHandler(async (req, res) => {
  const { favouriteItems } = req.body;

  if (favouriteItems && favouriteItems.length === 0) {
    res.status(400);
    throw new Error("Nothing in your fav List");
    return;
  } else {
    const favourite = new Favourite({
      favouriteItems,
      user: req.user._id,
    });

    const createdItem = favourite.save();
    res.status(201).json(createdItem);
  }
});

const getMyFavourites = asyncHandler(async (req, res) => {
  const favourites = await Favourite.find({ user: req.user._id });
  res.json(favourites);
});

const deleteFavouriteItem = asyncHandler(async (req, res) => {
  const article = await Favourite.findById(req.params.id);

  if (article) {
    await article.remove();
    res.json({ message: "game removed" });
  } else {
    res.status(404);
    throw new Error("game not found");
  }
});
export { addFavouriteItem, getMyFavourites, deleteFavouriteItem };
