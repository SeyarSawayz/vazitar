import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-white shadow-sm min-h-12 flex  items-center justify-center flex-col gap-1 pb-2 border-t-gray-300 mt-2">
      <Link to={"/"}>
        <h1 className="lg:text-l text-sm text-center text-gray-500 font-bold tex-white ">
          <span className="text-gray-700">Vazitar </span>| Simple | Effective |
          Educational S.E.E{" "}
        </h1>
        <h1 className="text-xs lg:text-s  text-center text-gray-500">
          © Copyright All right reserved
        </h1>
      </Link>

      <div className="flex items-center justify-center gap-4">
        <a
          href="https://www.facebook.com/share/8zJSqTGPxfJF4nqZ/?mibextid=kFxxJD"
          target="_blank"
          className="w-8 h-8 hover:bg-blue-600 transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-white"
        >
          <FaFacebookF className="text-l " />
        </a>
        <a
          href="https://www.instagram.com/vazitar/"
          target="_blank"
          className="w-8 h-8 hover:bg-red-400 transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-white"
        >
          <FaInstagram className="text-l " />
        </a>

        <a
          href="https://x.com/VazihV"
          target="_blank"
          className="w-8 h-8 hover:bg-sky-500  transition-all duration-300 flex items-center justify-center text-gray-600 hover:text-white"
        >
          <FaXTwitter className="text-l " />
        </a>
      </div>
    </div>
  );
};

export default Footer;
