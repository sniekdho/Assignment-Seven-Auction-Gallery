import React from "react";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen justify-items-start"
      style={{
        backgroundImage: "url(https://i.ibb.co.com/jP8zKtpj/Banner-min.jpg)",
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="text-start m-9">
          <h1 className="mb-5 text-5xl font-semibold">
            Bid on Unique Items from <br /> Around the World
          </h1>
          <p className="mb-5 font-thin text-white opacity-80">
            Discover rare collectibles, luxury goods, and vintage <br />
            treasures in our curated auctions
          </p>
          <button className="bg-white px-5 py-2 rounded-4xl font-medium text-black cursor-pointer">
            Explore Auctions
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
