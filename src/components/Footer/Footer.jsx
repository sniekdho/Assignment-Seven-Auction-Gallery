import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 text-base-content rounded p-10">
      <div className="space-y-0.5">
        <div className="text-xl font-poppins cursor-pointer">
          <h1>
            <span className="text-[#003EA4]">Auction</span>
            <span className="text-[#FFD337] font-bold">Gallery</span>
          </h1>
        </div>
        <div className="flex gap-2.5 font-normal text-black">
          <h1>Bid.</h1>
          <h1>Win.</h1>
          <h1>Own.</h1>
        </div>
        <div className="flex gap-10 cursor-pointer text-black font-poppins">
          <h1>Home</h1>
          <h1>Auctions</h1>
          <h1>Categories</h1>
          <h1>How to works</h1>
        </div>
      </div>

      <aside>
        <p>© {new Date().getFullYear()} AuctionHub.All rights reserved.</p>
      </aside>
    </footer>
  );
};

export default Footer;
