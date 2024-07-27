import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import logo2 from "../assets/logo2.png";
import { motion } from "framer-motion";
import { fadeInUp } from "./Animation";

const Header = () => {
  const [hasBg, setHasBg] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setHasBg(true);
    } else {
      setHasBg(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`lg:block hidden transition duration-300 ease-in-out ${
        hasBg ? "bg-black/80" : ""
      } fixed w-full top-0 z-40`}
    >
      <div className="flex  items-center justify-between px-12">
        <div className="w-16 h-16 flex items-center justify-center">
          <Link to={"/"}>
            <motion.img
              src={logo}
              alt="logo"
              variants={fadeInUp(0.5)}
              initial="initial"
              animate="animate"
            />
          </Link>
        </div>
        <motion.ul
          className="flex  items-center justify-center gap-10 text-l text-white font-Rajdhani"
          variants={fadeInUp(0.9)}
          initial="initial"
          animate="animate"
        >
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li className="hover:text-red-400 uppercase">Home</li>
          </NavLink>
          <a
            href="https://www.instagram.com/vazitar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="hover:text-red-400 uppercase">Instagram</li>
          </a>
          <a
            href="https://www.youtube.com/@vazitar"
            target="_blank"
            rel="noopener noreferrer"
          >
            <li className="hover:text-red-400 uppercase">Youtube</li>
          </a>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li className="hover:text-red-400 uppercase">Blog</li>
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li className="hover:text-red-400 uppercase">About Us</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "text-red-400" : "")}
          >
            <li className="hover:text-red-400 uppercase">Contact</li>
          </NavLink>
        </motion.ul>
        <div className="w-16 h-16 flex items-center justify-center">
          <Link to={"/"}>
            <motion.img
              src={logo2}
              alt="logo2"
              variants={fadeInUp(1.2)}
              initial="initial"
              animate="animate"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
