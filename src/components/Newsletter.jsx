import React from "react";

const Newsletter = () => {
  return (
    <div className="w-full  text-white py-16 px-8">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-2">
          <h1 className="md:text-3xl sm:text-2xl text-xl font-bold py-2 pt-6">
            Want tips & tricks to optimize your workflow?
          </h1>
          <p>Sign up to our newsletter to stay update to date.</p>
        </div>
        <div className="my-4">
          <div className="flex flex-col sm:flex-row justify-between items-center w-full">
            <input
              type="email"
              placeholder="Enter Email"
              className="p-3 flex w-full rounded-md text-black font-medium"
            />
            <button className="bg-[#00df9a] w-[200px] rounded-md ml-4 my-6 px-6 py-3 font-bold text-black hover:opacity-75">
              Notify Me
            </button>
          </div>
          <p>
            We care about the protection of your data. Read our <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
