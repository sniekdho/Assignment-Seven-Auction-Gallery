import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm px-13">
      <div className="navbar-start">
        <h1 className="text-xl font-poppins cursor-pointer">
          <span className="text-[#003EA4]">Auction</span>
          <span className="text-[#FFD337] font-bold">Gallery</span>
        </h1>
      </div>
      <div className="navbar-center hidden lg:flex">
        <div className="flex gap-10 cursor-pointer text-black font-poppins">
          <h1>Home</h1>
          <h1>Auctions</h1>
          <h1>Categories</h1>
          <h1>How to works</h1>
        </div>
      </div>
      <div className="navbar-end gap-5">
        <button className="btn btn-ghost btn-circle bg-[#ebf0f5] p-6">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />{" "}
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
        <div className="avatar">
          <div className="w-12 rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
