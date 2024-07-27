import React, { useEffect, useRef, useState } from "react";
import reshadPic from "../assets/reshad.png";
import Header from "./Header";
import Social from "./Social";
import { Link } from "react-router-dom";
import { FaArrowUp } from "react-icons/fa";
import PlayYoutube from "./PlayYoutube";
import Subscribe from "./Subscribe";
import AllVideos from "./videosThumnails/AllVideos";
import { motion } from "framer-motion";
import { arrowVariants } from "./Animation";
import { HiArrowSmDown } from "react-icons/hi";
const Home = () => {
  const [showScroll, setShowScroll] = useState(false);

  const [currentVideo, setCurrentVide] = useState(
    "https://www.youtube.com/embed/yiaMafisIbw"
  );
  const videoRef = useRef(null);

  const handleVideoSelect = (link) => {
    const embedLink = link
      .replace("watch?v=", "embed/")
      .replace("&t=", "?start=");
    setCurrentVide(embedLink);
    videoRef.current.scrollIntoView({ behavior: "smooth" });
  };

  const scrollUp = () => {
    if (window.scrollY >= 560) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScrollBottom = () => {
    window.scrollTo({ top: 650, behavior: "smooth" });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollUp);
    return () => {
      window.removeEventListener("scroll", scrollUp);
    };
  }, []);
  return (
    <>
      <div
        className="w-full min-h-screen relative "
        style={{
          backgroundImage: `url(${reshadPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <motion.div
          className="absolute bottom-16 left-[47%] cursor-pointer "
          onClick={handleScrollBottom}
          variants={arrowVariants}
          initial="hidden"
          animate="visible"
        >
          <HiArrowSmDown className="text-5xl font-bold text-gray-100" />
        </motion.div>
        {/* <Header /> */}
        <div className="flex items-center justify-start min-h-screen pt-10">
          <Social />
        </div>
        {showScroll && (
          <div
            className=" fixed size-9 rounded-md  cursor-pointer bg-black border border-gray-400  bottom-10 md:bottom-10 flex items-center justify-center right-4 md:right-20 hover:bg-zinc-600 slide-top z-30"
            onClick={scrollToTop}
          >
            <Link
              to="/"
              className="flex flex-col items-center cursor-pointer hover:text-zinc-600"
            >
              <motion.div
                className="text-xl text-white"
                variants={arrowVariants}
                initial="hidden"
                animate="visible"
              >
                <FaArrowUp />
              </motion.div>
            </Link>
          </div>
        )}
      </div>

      <PlayYoutube currentVideo={currentVideo} ref={videoRef} />
      <Subscribe />
      <AllVideos onVideoSelect={handleVideoSelect} />
    </>
  );
};

export default Home;
