import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { slideRight } from "./Animation";
import { motion } from "framer-motion";
const Social = () => {
  return (
    <div className=" px-5">
      <motion.div
        className="flex flex-col items-start justify-center gap-3"
        variants={slideRight(0.6)}
        initial="hidden"
        animate="visible"
      >
        <div className="w-8 h-8 rounded-full bg-transparent border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-blue-600 transition-all duration-300">
          <a
            href="https://www.facebook.com/share/8zJSqTGPxfJF4nqZ/?mibextid=kFxxJD"
            target="_blank"
          >
            <FaFacebookF className="text-l text-white" />
          </a>
        </div>
        <div className="w-8 h-8 rounded-full bg-transparent border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-red-400 transition-all duration-300">
          <a href="https://www.instagram.com/vazitar/" target="_blank">
            <FaInstagram className="text-l text-white" />
          </a>
        </div>
        <div className="w-8 h-8 rounded-full bg-transparent border border-gray-300 flex items-center justify-center cursor-pointer hover:bg-sky-500  transition-all duration-300">
          <a href="https://x.com/VazihV" target="_blank">
            <FaXTwitter className="text-l text-white" />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Social;
