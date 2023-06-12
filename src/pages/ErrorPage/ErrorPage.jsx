import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <div className="flex justify-center items-center">
        <img
          className="md:w-3/4 md:h-[550px] mt-16 md:mt-0"
          src="https://i.ibb.co/Ks6S4Jt/not-found.gif"
          alt="notFoundImage"
        />
      </div>
      <div className="flex justify-center">
        <Link
          to="/"
          className="py-2.5 w-32 md:py-3 bg-[#F29D7E] hover:bg-[#ec8a67] transition-all transition-duration-200 ease-in-out rounded-md font-medium text-white text-base uppercase cursor-pointer"
        >
          <span className="flex items-center justify-center gap-2.5">
            <span>Go Back</span> <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
