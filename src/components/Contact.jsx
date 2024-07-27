import React from "react";
import { IoLocation } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbSocial } from "react-icons/tb";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="bg-white dark:bg-[#2D161A] py-5 lg:pt-10 lg:px-10 px-4 pt-8 text-sm text-white lg:text-xl font-bold">
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 1 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
          Contact Us
        </h2>
        <p className="mb-8 lg:mb-11 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
          Share your ideas and thoughts with us, and we will create the video
          for you.
        </p>
      </motion.div>

      <div className="mt-5 flex lg:flex-row flex-col lg:px-0 px-10 items-center justify-center gap-10">
        <div className="min-w-[500px]">
          <motion.div
            className="px-4 mx-auto max-w-screen-md"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <form action="#" className="space-y-8 lg:mx-0 mx-16">
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-[#513430] border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@vazitar.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="subject"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  rows="6"
                  className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 resize-none"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Send message
              </button>
            </form>
          </motion.div>
        </div>
        <motion.div
          className="lg:mx-0 mx-20"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <div className="bg-gray-800 min-w-[300px] lg:min-w-[500px] flex flex-col gap-8 p-10 rounded-md max-h-[400px]">
            <div className="flex items-center justify-start gap-5 text-gray-100 text-xl">
              <IoLocation />
              <h1>Vienna, Austria</h1>
            </div>
            <div className="flex items-center justify-start gap-5 text-gray-100 text-xl">
              <FaPhoneVolume />
              <h1>+43-670-401-5614</h1>
            </div>
            <div className="flex items-center justify-start gap-5 text-gray-100 text-xl">
              <MdEmail />
              <h1>vazih.vision@gmail.com</h1>
            </div>
            <div className="flex items-center justify-start gap-5 text-gray-100 text-xl">
              <TbSocial />
              <h1>/vazitar</h1>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
