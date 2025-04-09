import React from "react";

const Favorite = ({ favorite }) => {
  return (
    <div className="card bg-base-100 shadow-sm border">
      <div className="card-body">
        <div className="card-actions justify-end">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-auto">
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
            <div className="flex opacity-70">
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
