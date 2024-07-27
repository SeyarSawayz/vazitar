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

  const arrowVariants = {
    hidden: { y: 0 },
    visible: {
      y: -10,
      transition: {
        y: {
          repeat: Infinity, // This makes the animation loop
          repeatType: "reverse", // This makes the animation go back and forth
          duration: 0.8,
          ease: "easeInOut",
        },
      },
    },
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
        className="w-full min-h-screen "
        style={{
          backgroundImage: `url(${reshadPic})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* <Header /> */}
        <div className="flex items-center justify-start min-h-screen">
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
