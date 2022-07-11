import express from "express";

const favouriteRouter = express.Router();
import {
  addFavouriteItem,
  deleteFavouriteItem,
  getMyFavourites,
} from "../controllers/favouriteController.js";
import { protect } from "../middleware/authMiddleware.js";

favouriteRouter.route("/myfavourites").get(protect, getMyFavourites);
favouriteRouter.route("/:id").get(protect, deleteFavouriteItem);

export default favouriteRouter;
