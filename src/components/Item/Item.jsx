import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const Item = ({ item, handleFavorite }) => {
  const [clicked, setClicked] = useState(false);

  const handleClicked = () => {
    setClicked(true);
    handleFavorite(item);
  };

  return (
    <tr>
      <td>
        <div className="flex items-center gap-5">
          <div className="avatar">
            <div className="mask h-14 w-14">
              <img src={item.image} alt="" />
            </div>
          </div>
          <div>
            <div className="text-[#0E2954]">{item.title}</div>
          </div>
        </div>
      </td>
      <td className="text-center text-[#0E2954]">${item.currentBidPrice}</td>
      <td className="text-center text-[#0E2954]">{item.timeLeft}</td>
      <td className="justify-items-center">
        <button
          onClick={() => handleClicked()}
          disabled={clicked ? true : false}
          className={`flex ${
            clicked ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {clicked ? (
            <FaHeart color="red" size={20} />
          ) : (
            <FaRegHeart color="#0E2954" size={20} />
          )}
        </button>
      </td>
    </tr>
  );
};

export default Item;
