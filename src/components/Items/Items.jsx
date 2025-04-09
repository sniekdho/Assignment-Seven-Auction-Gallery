import React, { useEffect, useState } from "react";
import Item from "../Item/Item";
import { FaRegHeart } from "react-icons/fa";

const Items = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("items.json")
      .then((response) => response.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="py-20">
      <div className="container mx-auto py-4">
        <h1 className="text-xl text-[#0E2954] font-bold">Active Auctions</h1>
        <p className="text-sm text-black font-light opacity-80">
          Discover and bid on extraordinary items
        </p>
      </div>

      <div className="container mx-auto flex gap-5">
        <div className="left-part w-[70%] bg-white rounded-lg shadow-sm">
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
                  <Item item={item}></Item>
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
                    <tr>
                      <td colSpan="2">
                        <div className="text-center space-y-3 p-3">
                          <h1 className="text-black font-bold">
                            No favorites yet
                          </h1>
                          <p className="text-sm text-black font-light opacity-70">
                            Click the heart icon on any item <br /> to add it to
                            your favorites
                          </p>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                  {/* foot */}
                  <tfoot>
                    <tr>
                      <div className="flex justify-between text-black opacity-60 py-1">
                        <th>Total Bids Amount</th>
                        <th>$0000</th>
                      </div>
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
