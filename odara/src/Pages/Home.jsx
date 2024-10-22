import React from "react";
import HomeNav from "../components/HomeNav";
import Vid from "../../public/assets/Videos/ODARA (1).mp4";
import Button from "../components/Button";

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
      <div className="absolute bottom-[100px] w-full flex justify-center z-10 ">
        <Button variant="secondary" className="">
          SHOP NOW
        </Button>
      </div>
    </div>
  );
};

export default Home;
