import { GoGoal } from "react-icons/go";
import vision from "../assets/vision.png";
import { slideUp } from "./Animation";
import { motion } from "framer-motion";
const About = () => {
  return (
    <div className="lg:pt-10 lg:px-10 px-4 pt-4 text-sm text-white lg:text-xl font-bold bg-[#2D161A] min-h-screen lg:pb-0 pb-4">
      <div className="w-full flex flex-col gap-10 items-center justify-start bg-[#2D161A] mt-10">
        <motion.h1
          className="text-center py-3 font-bold text-3xl"
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          About Us
        </motion.h1>
        <motion.h1
          className="max-w-[800px] text-center"
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          Our mission is to make the digital world useful, positive, and
          productive. We share{" "}
          <span className="text-green-400 cursor-pointer">
            | Simple | Effective | Educational |
          </span>{" "}
          information on various topics to educate, raise awareness and inspire
          a positive change
        </motion.h1>
        <motion.div
          className="max-w-[600px] w-full h-1 border-t-2 border-white"
          initial={{ scale: 0, x: -100 }}
          animate={{ scale: 1, x: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        />
        <div className="w-full flex lg:flex-row flex-col items-center justify-center lg:gap-36 gap-4">
          <motion.div
            className="max-w-[400px] min-h-[200px] bg-gray-800 p-4 rounded-xl"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl text-center font-bold text-gray-100">
                Mission
              </h1>

              <GoGoal className="text-2xl" />
            </div>
            <p className="text-gray-100 py-5 text-center ">
              Our mission is to improve the internet culture and make it useful,
              positive, and productive.
            </p>
          </motion.div>

          <motion.div
            className="max-w-[400px] min-h-[200px] mt-4 bg-gray-800 p-4 rounded-xl"
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <div className="flex items-center justify-center gap-2">
              <h1 className="text-3xl text-center font-bold text-gray-100">
                Vision
              </h1>

              <img src={vision} alt="" className="" />
            </div>
            <p className="text-gray-100 py-5 text-center">
              We envision a society that values education and knowledge.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;
