import mongoose from "mongoose";

const gameSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  released: {
    type: String,
    required: true,
  },

  background_image: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },

  ratings: [
    {
      id: {
        type: Number,
        required: true,
      },
      title: {
        type: String,
        required: true,
      },
      count: {
        type: Number,
        required: true,
      },
      percent: {
        type: Number,
        required: true,
      },
    },
    {
      id: {
        type: Number,
      },
      title: {
        type: String,
      },
      count: {
        type: Number,
      },
      percent: {
        type: Number,
      },
    },
  ],

  metacritic: {
    type: Number,
  },
  playtime: {
    type: Number,
    required: true,
  },
  saturated_color: {
    type: String,
    required: true,
  },
  dominant_color: {
    type: String,
    required: true,
  },
  parent_platforms: [
    {
      platform: {
        id: {
          type: Number,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    },
    {
      platform: {
        id: {
          type: Number,
        },
        name: {
          type: String,
        },
      },
    },
  ],
  genres: [
    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },

    {
      id: {
        type: Number,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
    },
  ],
  liked: {
    type: Boolean,
    default: false,
  },
});

const game = mongoose.model("game", gameSchema);

export default game;
