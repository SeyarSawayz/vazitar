import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { fadeInUp, fadeInDown } from "./Animation";
import { motion } from "framer-motion";

const MobileNav = ({ handleClick, toggle, setToggle }) => {
  return (
    <div className="lg:hidden fixed w-full top-0 z-40">
      <div className="flex items-center justify-end m-5 mr-10 relative   z-10">
        <div className="flex items-center  justify-between w-full">
          <div className="w-16 h-16 flex items-center justify-center">
            <NavLink to={"/"}>
              <img src={logo} alt="logo" />
            </NavLink>
          </div>
          <button onClick={handleClick} className="focus:outline-none">
            {toggle ? (
              <IoMdClose className="text-white text-5xl" />
            ) : (
              <RxHamburgerMenu className="text-white text-5xl" />
            )}
          </button>
        </div>
      </div>

      <motion.div
        className="bg-[#333333] p-5 absolute top-0 w-full"
        variants={toggle ? fadeInUp(0.3) : fadeInDown(0.3)}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <ul className="flex flex-col items-start justify-start gap-8 text-l text-white font-Rajdhani pt-16">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li
              className="hover:text-red-400 uppercase"
              onClick={() => setToggle(false)}
            >
              Home
            </li>
          </NavLink>
          <a
            href="https://www.instagram.com/vazitar/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setToggle(false)}
          >
            <li className="hover:text-red-400 uppercase">Instagram</li>
          </a>
          <a
            href="https://www.youtube.com/@vazitar"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setToggle(false)}
          >
            <li className="hover:text-red-400 uppercase">Youtube</li>
          </a>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li
              className="hover:text-red-400 uppercase"
              onClick={() => setToggle(false)}
            >
              Blog
            </li>
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li
              className="hover:text-red-400 uppercase"
              onClick={() => setToggle(false)}
            >
              About Us
            </li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li
              className="hover:text-red-400 uppercase"
              onClick={() => setToggle(false)}
            >
              Contact
            </li>
          </NavLink>
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileNav;
