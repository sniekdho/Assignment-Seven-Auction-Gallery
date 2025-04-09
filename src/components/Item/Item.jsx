import React from "react";
import { FaRegHeart } from "react-icons/fa";

const Item = ({ item }) => {
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
        <FaRegHeart className="cursor-pointer" color="#0E2954" size={20} />
      </td>
    </tr>
  );
};

export default Item;
