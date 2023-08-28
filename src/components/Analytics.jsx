import React from "react";
import Laptop from "../Assets/laptop.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={Laptop} alt="/" />
        <div className="flex flex-col justify-center">
          <p className="text-[#00df9a] font-bold md:text-xl sm:text-0.5xl">
            DATA ANALYTICS DASHBOARD
          </p>
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">
            Manage Data Analytics Centrally
          </h1>
          <p className="font-bold text-gray-500">
            Centrally manage business data for seamless organization, enhanced
            security, and efficient decision-making. Streamline processes,
            ensure data accuracy, and foster collaboration, empowering
            businesses to thrive in a data-driven world.
          </p>
          <button className="bg-[#000300] w-[200px] rounded-md my-6 mx-auto font-medium py-3 text-white md:mx-0 hover:text-[#00df9a]">
            Know More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
