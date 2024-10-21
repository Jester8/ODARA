import React from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600 mb-4">
          Welcome to Odara
        </h1>
        <p className="text-lg text-gray-700">
          Your all-in-one eCommerce platform!
        </p>
        <button className="mt-6 bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600">
          Start Shopping
        </button>
      </div>
    </div>
  );
};

export default Home;
