import React, { useEffect, useState } from "react";

import "./GameScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
// import { addToFavourites } from "../redux/actions/favouriteActions";
import { getOneGame } from "../redux/games/gameSlice";
import { addToFavs } from "../redux/favourites/faveSlice";
import Carroussel from "../components/Carroussel";

const GameScreen = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const dispatch = useDispatch();
  const id = useParams().id;
  const navigate = useNavigate();
  const gamesRed = useSelector((state) => state.gamesRed);
  const { isLoading, isError, isSuccess, message, gameDetails } = gamesRed;

  const { screens, game } = gameDetails;

  useEffect(() => {
    console.log(!game?.id || game?.id !== id, game.id, id);
    if (!game?.id || game?.id != id) {
      dispatch(getOneGame(id));
    }
  }, [dispatch, id, game]);

  const addIt = () => {
    dispatch(addToFavs(game));
  };

  const goBack = () => {
    navigate(-1);
  };

  const openGallery = () => {
    setIsGalleryOpen(true);
  };

  const closeGallery = () => {
    setIsGalleryOpen(false);
  };

  return (
    <div className="gamescreen">
      {isLoading ? (
        <div className="loading">
          <div className="spinner"></div>
        </div>
      ) : message ? (
        <h2>{message}</h2>
      ) : (
        <div className="game__details">
          {screens && screens.results && (
            <Carroussel
              platforms={screens?.results}
              isOpen={isGalleryOpen}
              onClose={closeGallery}
            />
          )}
          <div className="game__image" onClick={openGallery}>
            <img src={game?.background_image} alt={game?.name} />
          </div>
          <div className="game__text__details">
            <div className="game__name">
              <p>{game?.name}</p>
              <i
                className="fa-solid fa-heart game__likes"
                onClick={addIt}
                title="Add this game to favourite"
              ></i>
              <i
                className="fa-solid fa-door-open game__exit"
                title="Exit to home page"
                onClick={goBack}
              ></i>
            </div>
            <p dangerouslySetInnerHTML={{ __html: game?.description }} />
            <div>
              <div className="info__released">
                <p>Released: </p>
                <span>{game?.released}</span>
              </div>
              <div className="info__rating1">
                <p>Rating: </p>
                <span>{game?.rating}</span>
              </div>
              <div className="info__meta1">
                <p>Metacritic: </p>
                <span className="above_70">{game?.metacritic}</span>
              </div>
              <div className="info__play1">
                <p>Playtime: </p>
                <span>{game?.playtime} Hours</span>
              </div>
              <div className="info__genres1">
                <p>Genres: </p>

                <span>
                  {game?.genres &&
                    game?.genres.map((g) => <span>{g.name.split(",")}</span>)}
                </span>
              </div>
              <div className="info__platforms1">
                <p>Platforms: </p>
                <span>
                  {game?.parent_platforms &&
                    game?.parent_platforms.map((p) => (
                      <>
                        <i
                          className={
                            p.platform.name === "PlayStation"
                              ? "fa-brands fa-playstation"
                              : p.platform.name === "PC"
                              ? "fa-solid fa-desktop"
                              : p.platform.name === "Apple Macintosh"
                              ? "fa-solid fa-apple-whole"
                              : p.platform.name === "Linux"
                              ? "fa-brands fa-linux"
                              : p.platform.name === "Xbox"
                              ? "fa-brands fa-xbox"
                              : p.platform.name === "iOS"
                              ? "fa-brands fa-app-store-ios"
                              : p.platform.name === "Android"
                              ? "fa-brands fa-android"
                              : ""
                          }
                        ></i>
                      </>
                    ))}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default GameScreen;
