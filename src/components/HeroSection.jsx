import React from "react";
import { authBg } from "../assets";

const HeroSection = () => {
  return (
    <div className="flex justify-center text-black items-center flex-col text-center my-60">
      <h1 className="text-4xl font-bold">
        The only tool you need for creating
        <br />
        presentations.
      </h1>
      <br />
      <p className="text-2xl ">
        Create stunning presentation effortless and download instantly,
        <span className="text-primary text-2xl"> no signup required</span>
      </p>
      <br />
      <div className="w-2/4 ">
        <input
          className="text-sm w-full px-4 py-3 border border-solid outline-none border-gray-300 bg-blue-100 rounded"
          type="text"
          placeholder="Generate a presentation for.."
        />
        <br />
        <br />
        <button className="md:py-2 py-2 md:px-8 px-6 text-white bg-blue-500 hover:bg-black hover:outline-black border-none font-semibold outline outline-1 outline-primary rounded-md mr-3">
          Generate Presentation
        </button>
        <button className="md:py-2 py-2 md:px-8 px-6 text-primary bg-blue-100 hover:text-white border-none  hover:bg-blue-300 hover:outline-none font-semibold outline outline-1 outline-gray-300 rounded-md">
          Try for Free
        </button>
        <br />
        <br />
      </div>
      <div className=" mt-20 w-full my-[-80px]">
        <img src={authBg} alt="logo" className="h-[500px] w-full" />
      </div>
    </div>
  );
};

export default HeroSection;
