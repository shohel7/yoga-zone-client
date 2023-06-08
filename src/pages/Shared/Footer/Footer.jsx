import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { TbYoga } from "react-icons/Tb";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="mt-20">
      <div className="footer pt-8 pb-16 px-10 md:px-5 lg:max-w-[1230px] mx-auto">
        <div>
          <Link to="/">
            <span className="flex items-center space-x-3">
              <TbYoga className="text-4xl text-[#5FC7AE]" />

              <p className="text-xl text-gray-500 font-bold cursor-pointer">
                YOGA<span className="text-[#5FC7AE]">ZONE</span>
              </p>
            </span>
          </Link>
          <p className="text-gray-600 md:text-base">
            Yogi is my second family where I’ve learned and then <br /> worked
            for a long time. Becoming a yoga trainer here <br /> is the second
            best decision I have made, the first one <br /> is to marry John, my
            beloved husband.
          </p>
          <span className="flex gap-5 mt-5">
            <Link target="_black" to="https://facebook.com/">
              <FaFacebookF className="text-3xl border border-[#5Fc7AE] text-[#5Fc7AE] hover:text-white hover:bg-[#5Fc7AE] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://twitter.com/">
              <FaTwitter className="text-3xl border border-[#5Fc7AE] text-[#5Fc7AE] hover:text-white hover:bg-[#5Fc7AE] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://instagram.com/">
              <FaInstagram className="text-3xl border border-[#5Fc7AE] text-[#5Fc7AE] hover:text-white hover:bg-[#5Fc7AE] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
            <Link target="_black" to="https://youtube.com/">
              <FaYoutube className="text-3xl border border-[#5Fc7AE] text-[#5Fc7AE] hover:text-white hover:bg-[#5Fc7AE] transition duration-200 ease-in-out rounded-full py-2 h-10 w-10" />
            </Link>
          </span>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="text-[#5Fc7AE] uppercase font-playFair font-bold md:mb-3">
            To Category
          </span>
          <a className="link link-hover">Restorative yoga</a>
          <a className="link link-hover">Hatha yoga</a>
          <a className="link link-hover">Ashtanga yoga</a>
          <a className="link link-hover">Lyerngar yoga</a>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="text-[#5Fc7AE] uppercase font-playFair font-bold md:mb-3">
            Useful Links
          </span>
          <a className="link link-hover">Instructors</a>
          <a className="link link-hover">Classes</a>
          <a className="link link-hover">Dashboard</a>
          <a className="link link-hover">Login</a>
        </div>
        <div className="md:text-base text-gray-600 md:space-y-1">
          <span className="text-[#5Fc7AE] uppercase font-playFair font-bold md:mb-3">
            Contact Us
          </span>
          <span className="flex gap-3 items-center">
            <FaMapMarkerAlt className="text-xl text-[#5Fc7AE]" />
            <a className="link link-hover">
              B-block Mohammadpur, <br /> Dhaka, Bangladesh
            </a>
          </span>
          <span className="flex gap-3 items-center">
            <FaPhoneAlt className="text-xl text-[#5Fc7AE]" />
            <a className="link link-hover">+880 178 096 9001</a>
          </span>
          <span className="flex gap-3 items-center">
            <FaEnvelope className="text-xl text-[#5Fc7AE]" />
            <a className="link link-hover">shohelrana.swe@gmail.com</a>
          </span>
        </div>
      </div>
      <div className="bg-[#5Fc7AE] py-10 text-center">
        <p className="md:text-center font-bold font-playFair text-white text-sm">
          Copyright &copy; 2023 - All right reserved by YogaZone
        </p>
      </div>
    </footer>
  );
};

export default Footer;
