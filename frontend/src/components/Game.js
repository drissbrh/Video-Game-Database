import React from "react";
import { Link } from "react-router-dom";
import "./game.css";

const Game = (props) => {
  const {
    gameId,
    name,
    release,
    image,
    rating,
    metacritic,
    playtime,
    ratings,
    parent,
    genres,
  } = props;

  return (
    <div className="game" key={gameId}>
      <Link to={`/game/${gameId}`} title="See game details">
        <img src={image} alt={name} />
      </Link>

      <div className="game__info">
        <Link to={`/game/${gameId}`} title="See game details">
          <p className="info__name">{name}</p>
        </Link>

        <div className="info__release">
          <p>Released: </p>
          <span>{release}</span>
        </div>
        <div className="info__rating">
          <p>Rating: </p>
          <span>{rating}</span>
        </div>
        <div className="info__meta">
          <p>Metacritic: </p>
          <span
            className={
              metacritic >= 70
                ? "above70"
                : metacritic >= 50
                ? "above50"
                : "under50"
            }
          >
            {metacritic}
          </span>
        </div>
        <div className="info__play">
          <p>Playtime: </p>
          <span>{playtime} Hours</span>
        </div>
        <div className="info__genres">
          <p>Genres: </p>
          <span>
            {genres.map((g) => (
              <>
                <span>{g.name},</span>
              </>
            ))}
          </span>
        </div>
        <div className="info__platforms">
          <p>Platforms: </p>
          <span>
            {parent.map((p) => (
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
  );
};

export default Game;
