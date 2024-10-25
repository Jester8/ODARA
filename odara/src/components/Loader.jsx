import React, { useEffect, useState } from "react";
import Logo1 from "../assets/logo/Odara-purple.png";

const Loader = () => {
  const [showLoader, setShowLoader] = useState(true);

  // Set a 5-second timer for the loader
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false); // Hide loader after 5 seconds
    }, 10000);

    return () => clearTimeout(timer); // Cleanup timer on component unmount
  }, []);

  // If loader time is over, don't display anything
  if (!showLoader) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
      <div className="text-center">
        {/* Logo Display */}
        {/* <img
          src={Logo1}
          alt="ODARA Logo"
          className="h-[320px] w-auto  md:w-[490px] mb-4 mx-auto"
        /> */}

        {/* Purple Spinner */}
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 mx-auto"></div>
      </div>
    </div>
  );
};

export default Loader;
