import React, { useEffect } from "react";
import { ListGames } from "../redux/actions/gameActions";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./HomeScreen.css";

// import Game from "../components/Game";
import Paginate from "../components/Paginate";

const HomeScreen = () => {
  // const pageNumber1 = useParams();
  // const pageNumber = pageNumber1 || 1;

  const dispatch = useDispatch();
  // const gameList = useSelector((state) => state.gameList);
  // const { loading, error, games, page, pages } = gameList;

  // useEffect(() => {
  //   dispatch(ListGames());
  // }, [dispatch]);
  return (
    <div className="homescreen">
      <h1 className="homescreen__title">All Games</h1>
      {/* <div className="homescreen__games">
        {loading ? (
          <div className="loading">
            <div className="spinner"></div>
          </div>
        ) : error ? (
          <h3>{error}</h3>
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
      </div> */}
    </div>
  );
};

export default HomeScreen;
