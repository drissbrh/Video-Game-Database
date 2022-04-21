import React, { useEffect } from "react";
import { ListGameDetails } from "../redux/actions/gameActions";
import "./GameScreen.css";
import { useDispatch, useSelector } from "react-redux";

import { addToFavourites } from "../redux/actions/favouriteActions";

const GameScreen = ({ match, history }) => {
  const gameDrawer = ["gamescreen"];
  const dispatch = useDispatch();
  const gameDetails = useSelector((state) => state.gameDetails);
  const { loading, error, game } = gameDetails;

  useEffect(() => {
    if (game && match.params.id !== game._id) {
      dispatch(ListGameDetails(match.params.id));
    }
  }, [dispatch, match, game]);

  const addIt = () => {
    dispatch(addToFavourites(game._id));
  };

  return (
    <div className={"gamescreen"}>
      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : error ? (
        <h2>{error}</h2>
      ) : (
        <div className="game__details">
          <div className="game__image">
            <img src={game.background_image} alt={game.name} />
          </div>
          <div>
            <div className="game__name">
              <p>{game.name}</p>
              <i
                className="fa-solid fa-heart game__likes"
                onClick={addIt}
                title="Add this game to favourite"
              ></i>
            </div>
            <div>
              <div className="info__released">
                <p>Released: </p>
                <span>{game.released}</span>
              </div>
              <div className="info__rating1">
                <p>Rating: </p>
                <span>{game.rating}</span>
              </div>
              <div className="info__meta1">
                <p>Metacritic: </p>
                <span className="above_70">{game.metacritic}</span>
              </div>
              <div className="info__play1">
                <p>Playtime: </p>
                <span>{game.playtime} Hours</span>
              </div>
              <div className="info__genres1">
                <p>Genres: </p>
                <span>{game.genres && game.genres.map(e=> e.name).join(',')}</span>
              </div>
              <div className="info__platforms1">
                <p>Platforms: </p>
                <span>
                  <i className="fa-brands fa-playstation"></i>
                  <i className="fa-solid fa-desktop"></i>
                  <i className="fa-brands fa-linux"></i>
                  <i className="fa-brands fa-xbox"></i>
                  <i className="fa-brands fa-playstation"></i>
                </span>
              </div>
            </div>
          </div>
          <div>
            <button className="game__exit" title="Exit to home page">
              <i
                className="fa-solid fa-arrow-right-from-bracket game__exit1"
                onClick={() => history.push("/page/1")}
              ></i>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
