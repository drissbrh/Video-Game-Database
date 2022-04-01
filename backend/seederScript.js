require("dotenv").config();

const rawg1 = require("./data/rawg1");
const game = require("./models/gameModel");

const connectDB = require("./config/db");

connectDB();

const importData = async () => {
  try {
    await game.deleteMany({});
    await game.insertMany(rawg1);
    console.log("Data Import: Success".green.inverse);
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

importData();
