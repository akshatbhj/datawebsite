import React from "react";
// import Typed from 'typed.js';

const Hero = () => {
  return (
    <div className="text-white max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-[#00df9a] font-bold p-2">GROWING WITH DATA ANALYTICS</p>
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-4">Grow with data.</h1>
      <div>
        <p className="md:text-5xl sm:text-3xl text-xl font-bold py-4">Fast, flexible financing for business</p>
        {/* <Typed strings={['BTB' , 'BTC' , 'SASS']} typeSpeed={120} backSpeed={140} loop/> */}
      </div>
      <p className="md:text-2xl sm:text-0.5xl text-xl font-bold text-gray-500">Monitor your data analytics to increase your revenue for BTB, BTC & SASS platforms.</p>
      <button className="bg-[#00df9a] w-[200px] rounded-md my-6 mx-auto font-medium py-3 text-black hover:opacity-75">Get Started</button>
    </div>
  );
};

export default Hero;
