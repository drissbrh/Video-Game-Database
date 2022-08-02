import express from "express";

const favouriteRouter = express.Router();
import {
  addFavouriteItem,
  deleteFavouriteItem,
  getMyFavourites,
} from "../controllers/favouriteController.js";
import { protect } from "../middleware/authMiddleware.js";

favouriteRouter.route("/myfavourites").post(protect, addFavouriteItem);
favouriteRouter.route("/myfavourites").get(protect, getMyFavourites);
favouriteRouter.route("/:id").delete(protect, deleteFavouriteItem);

export default favouriteRouter;
