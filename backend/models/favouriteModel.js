import mongoose from "mongoose";

const favouriteSchema = mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "User" },
    favouriteItems: {
      game: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "game",
      },
    },

    addedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const Favourite = mongoose.model("Favourites", favouriteSchema);

export default Favourite;
