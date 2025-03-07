import React from "react";
import { assets } from "../../assets/assets";

const CallToAction = () => {
  return (
    <div className="flex flex-col items-center gap-4 pt-10 pb-24 px-8 md:px-0">
      <h1 className="text-xl md:text-4xl font-semibold text-gray-800">
        Learn anything, anytime, anywhere
      </h1>
      <p className="text-gray-500 sm:text-sm">
        Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id
        veniam <br /> aliqua proident excepteur commodo do ea.
      </p>
      <div className="flex items-center font-medium  gap-6 mt-4">
      <button className="bg-blue-600 hover:bg-blue-700  text-white font-medium px-6 py-2 rounded-full transition-all duration-300">
        Gat Started
      </button>
      <button className="flex items-center  gap-2">Learn more <img src={assets.arrow_icon} alt="" /></button>
      </div>
    </div>
  );
};

export default CallToAction;
