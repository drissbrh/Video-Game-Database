import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./HomeScreen.css";

import Game from "../components/Game";
import Paginate from "../components/Paginate";
import { getGames } from "../redux/games/gameSlice";

const HomeScreen = () => {
  const pageNumber = useParams().pageNumber || 1;

  const dispatch = useDispatch();
  const gamesRed = useSelector((state) => state.gamesRed);
  const { isLoading, isError, message, gamesResponse } = gamesRed;
  const { games, page, pages } = gamesResponse;

  useEffect(() => {
    dispatch(getGames(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <div className="homescreen">
      <h1 className="homescreen__title">All Games</h1>
      <div className="homescreen__games">
        {isLoading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : message ? (
          <h3>{message}</h3>
        ) : (
          <>
            {games &&
              games.map((g) => (
                <Game
                  key={g._id}
                  gameId={g._id}
                  name={g.name}
                  release={g.released}
                  image={g.background_image}
                  ratings={g.ratings}
                  rating={g.rating}
                  parent={g.parent_platforms}
                  genres={g.genres}
                  metacritic={g.metacritic}
                  playtime={g.playtime}
                />
              ))}
            <Paginate pages={pages} page={page} />
          </>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
