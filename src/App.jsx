import React, { useRef, useState } from "react";
import Home from "./components/Home";
import { Route, Routes } from "react-router-dom";
import Blog from "./components/Blog";
import Header from "./components/Header";
import Contact from "./components/Contact";
import PlayYoutube from "./components/PlayYoutube";
import Subscribe from "./components/Subscribe";
import AllVideos from "./components/videosThumnails/AllVideos";
import Footer from "./components/Footer";
import About from "./components/About";
import MobileNav from "./components/MobileNav";

const App = () => {
  const [currentVideo, setCurrentVide] = useState(
    "https://www.youtube.com/embed/yiaMafisIbw"
  );
  const videoRef = useRef(null);
  const [toggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle((prev) => !prev);
  };

  return (
    <>
      <div className="bg-white">
        <Header />
        <MobileNav
          handleClick={handleClick}
          toggle={toggle}
          setToggle={setToggle}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
};

export default App;
