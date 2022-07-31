import React from "react";
import "./FavouriteItem.css";

import { Link } from "react-router-dom";

const FavouriteItem = (props) => {
  const { mygame, removeHandler } = props;
  return (
    <div className="favouriteItem">
      <img src={mygame.background_image} />
      <div className="item__body">
        <Link to={`/game/${mygame._id}`} title="See game details">
          <p className="favourite__name">{mygame.name}</p>
        </Link>
        <p className="added">
          Released on: {mygame.released.slice(0, 19).replace(/T/g, "  ")}
        </p>
      </div>
      <div className="delete__btn">
        <button
          onClick={() => removeHandler(mygame._id)}
          title="Remove from Favourites"
        >
          <i className="fa-solid fa-trash"></i>
        </button>
      </div>
    </div>
  );
};

export default FavouriteItem;
