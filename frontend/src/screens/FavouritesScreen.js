import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import FavouriteItem from "../components/FavouriteItem";
import { Link } from "react-router-dom";
import "./FavouritesScreen.css";

import { removeFromFavourites } from "../redux/actions/favouriteActions";

const FavouritesScreen = () => {
  const dispatch = useDispatch();
  const { favouriteItems } = useSelector((state) => state.favourite);

  const removeFromFavouritesHandler = (id) => {
    dispatch(removeFromFavourites(id));
  };
  useEffect(() => {}, [dispatch]);
  return (
    <div className="favouritesScreen">
      {favouriteItems.length === 0 ? (
        <div className="favourite__empty">
          Your List Is Empty <br></br>
          <Link to="/">Go Back</Link>
        </div>
      ) : (
        favouriteItems.map((f) => (
          <FavouriteItem
            key={f._id}
            mygame={f}
            removeHandler={removeFromFavouritesHandler}
          />
        ))
      )}
    </div>
  );
};

export default FavouritesScreen;
