import dotenv from "dotenv";
dotenv.config();
import rawg1 from "./data/rawg1.js";
import game from "./models/gameModel.js";

import users from "./data/userData.js";
import User from "./models/userModel.js";

import connectDB from "./config/db.js";

connectDB();

const importData = async () => {
  try {
    await game.deleteMany({});
    await game.insertMany(rawg1);

    await User.deleteMany({});
    await User.insertMany(users);
    console.log("Data Import: Success".green.inverse);
    process.exit(1);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
