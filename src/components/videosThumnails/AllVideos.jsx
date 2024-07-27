import React from "react";
import amanullah from "../../assets/majazat.jpg";
import phalstine from "../../assets/phalastine.jpg";
import un from "../../assets/unitednation.jpg";
import un2 from "../../assets/un2.jpg";

import poverty from "../../assets/poverty.jpg";
import poverty2 from "../../assets/faqer.jpg";
import { FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";
import { slideUp } from "../Animation";

const videos = [
  {
    id: 1,
    link: "https://www.youtube.com/watch?v=yiaMafisIbw&t=10s",
    img: amanullah,
    title: "از دست دادن عضویت در لیگ ملت ها | شاه امان الله خان",
    delay: 0.4,
  },
  {
    id: 2,
    link: "https://www.youtube.com/watch?v=yX8XYAz_tSE&t=11s",
    img: phalstine,
    title: "تأییدی عضویت دائمی فلسطین و خشم اسرائیل در سازمان ملل متحد",
    delay: 0.6,
  },
  {
    id: 3,
    link: "https://www.youtube.com/watch?v=NhepLJCJx6c",
    img: un,
    title:
      "| داستان سازمان ملل متحد | لیگ ملت ها | United Nations | League of Nation|",
    delay: 0.8,
  },
  {
    id: 4,
    link: "https://www.youtube.com/watch?v=ls470zSTBN8&t=2s",
    img: poverty,
    title: "موانع اصلی در فقر ماندن افغانستان! | واضع تر",
    delay: 1,
  },
  {
    id: 5,
    link: "https://www.youtube.com/watch?v=ELVs1Xcvcm8&t=173s",
    img: poverty2,
    title: "بر اساس آخرین معيار های فقر 99 درصد ما در فقر هستیم !",
    delay: 1.2,
  },
  {
    id: 6,
    link: "https://www.youtube.com/watch?v=UW2EQvb9pPs",
    img: un2,
    title: "اهداف و ارگان‌های سازمان ملل متحد | | UnitedNations |",
    delay: 1.4,
  },
];

const AllVideos = ({ onVideoSelect }) => {
  return (
    <div className="w-full min-h-screen p-5 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 place-content-center place-items-center gap-4">
        {videos?.map((video) => (
          <motion.div
            className="relative flex items-center justify-center flex-col gap-2 hover:scale-105 transition-all duration-300 rounded-md group"
            key={video.link}
            onClick={() => onVideoSelect(video.link)}
            initial="hidden"
            whileInView="visible"
            variants={slideUp(video.delay)}
            viewport={{ once: true, amount: 0.5 }}
          >
            <a
              href={video.link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.preventDefault()}
              className="flex items-center justify-center flex-col relative"
            >
              <img src={video.img} alt="" className="rounded-md" />
              <FaYoutube className="text-6xl text-[#FF0001] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
            <h1 className="text-center font-bold text-gray-700 text-sm">
              {video.title}
            </h1>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllVideos;
