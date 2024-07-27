import React from "react";
import { FaYoutube } from "react-icons/fa6";

const Subscribe = () => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-[#FF0000] hover:scale-125 transition-all duration-300  text-white px-3 py-2 rounded-md cursor-pointer font-bold ">
        <a
          href="https://www.youtube.com/@vazitar"
          target="_blank"
          className="flex items-center justify-center gap-1"
        >
          <FaYoutube className="text-white" />
          <button className="">Subscribe to my Channel</button>
        </a>
      </div>
    </div>
  );
};

export default Subscribe;
