import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { FaRegHeart } from "react-icons/fa";
import Favorite from "../Favorite/Favorite";
import { toast } from "react-toastify";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  const [favorites, setFavorites] = useState([]);
  const [bidPrice, setBidPrice] = useState(0);

  const handleFavorite = (item) => {
    setFavorites([...favorites, item]);
    setBidPrice(bidPrice + parseInt(item.currentBidPrice.replace(/,/g, "")));
    toast.success(`${item.title} added to favorites!`);
  };

  return (
    <div className="py-20">
      <div className="container mx-auto py-4">
        <h1 className="text-xl text-[#0E2954] font-bold">Active Auctions</h1>
        <p className="text-sm text-black font-light opacity-80">
          Discover and bid on extraordinary items
        </p>
      </div>

      <div className="container mx-auto flex gap-5">
        <div className="left-part w-[70%] bg-white rounded-lg shadow-sm h-full">
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr className="text-orange-700">
                  <th className="py-4">Items</th>
                  <th className="py-4 text-center">Current Bid</th>
                  <th className="py-4 text-center">Time Left</th>
                  <th className="py-4 text-center">Bid Now</th>
                </tr>
              </thead>
              {/* body */}
              <tbody>
                {items.map((item) => (
                  <Item
                    key={item.id}
                    item={item}
                    handleFavorite={handleFavorite}
                  ></Item>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="right-part w-[30%] rounded-xl">
          <div className="card w-96 bg-base-100 card-md shadow-sm">
            <div>
              <div className="overflow-x-auto">
                <table className="table">
                  {/* head */}
                  <thead className="text-center">
                    <tr>
                      <th colSpan="2">
                        <div className="flex items-center justify-center gap-2">
                          <FaRegHeart color="#0E2954" size={20} />
                          <span className="text-[#0E2954] font-semibold text-lg">
                            Favorite Items
                          </span>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* rows */}
                    {favorites.length === 0 ? (
                      <tr>
                        <td colSpan="2">
                          <div className="text-center space-y-3 p-3">
                            <h1 className="text-black font-bold">
                              No favorites yet
                            </h1>
                            <p className="text-sm text-black font-light opacity-70">
                              Click the heart icon on any item <br /> to add it
                              to your favorites
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      favorites.map((favorite) => (
                        <tr>
                          <td colSpan="2">
                            <Favorite
                              key={favorite.id}
                              favorite={favorite}
                            ></Favorite>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr className="text-black opacity-90">
                      <th className="text-left py-4">Total Bids Amount</th>
                      <th className="text-right py-4">${bidPrice}.00</th>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Items;
