import React from "react";

const Favorite = ({ favorite, handleRemoveFromFavorite }) => {
  return (
    <div className="card bg-base-100 shadow-sm border">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button
            onClick={() =>
              handleRemoveFromFavorite(
                favorite.id,
                favorite.currentBidPrice,
                favorite.title
              )
            }
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-auto hover:text-red-600 hover:bg-red-50"
          >
            ✕
          </button>
        </div>
        <div className="flex gap-5">
          <div className="avatar">
            <div className="mask h-14 w-14 border rounded">
              <img src={favorite.image} alt="" />
            </div>
          </div>
          <div>
            <h1 className="truncate max-w-52 font-medium">{favorite.title}</h1>
            <div className="flex opacity-75">
              <p>${favorite.currentBidPrice}</p>
              <p>Bids: {favorite.bidsCount}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorite;
