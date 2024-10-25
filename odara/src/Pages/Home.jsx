import React from "react";
import HomeNav from "../components/HomeNav";
import Vid from "../assets/Videos/ODARA (1).mp4";
import Button from "../components/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Home = () => {
  return (
    <div className="min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src={Vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="relative z-10 min-h-screen flex flex-col">
        <HomeNav />
      </div>

      {/* Responsive button: moves left by 200px on mobile
      <div className="absolute inset-x-0 bottom-0 w-full flex justify-center z-10 p-4">
        <Button
          variant="secondary"
          className="flex items-center shadow-lg shadow-gray-500/50 hover:shadow-xl hover:shadow-gray-500/70 sm:translate-x-[-200px] md:translate-x-0"
        >
          <ShoppingCartIcon className="mr-2" />
          SHOP NOW
        </Button>
      </div> */}
    </div>
  );
};

export default Home;
