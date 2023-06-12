import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Classes = () => {
  const {
    data: classes = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["classesData"],
    queryFn: async () => {
      const data = await axios.get(
        `http://localhost:5000/classes?status=approved`
      );
      // console.log(data?.data);
      return data?.data;
    },
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center">
        <span className="loading loading-bars loading-lg text-[#5FC7AE]"></span>
      </div>
    );

  const handleSelectedClass = (item) => {
    console.log(item);
  };

  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <SectionTitle
        heading={"All Approved Classes"}
        paragraph={
          "Yoga is a physical, mental, and spiritual practice or discipline. There is a broad variety of schools, practices and goals in Hinduism, Buddhism. The origins."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-0">
        {classes.map((item) => (
          <div
            key={item?._id}
            className="border md:w-[360px] bg-base-100 hover:shadow-xl"
          >
            <figure className="relative">
              <img
                className="h-[250px] w-full"
                src={item?.image}
                alt="class-image"
              />
              <span className="absolute inset-0 pl-36 pt-28 text-white hover:bg-[#5FC7AE] hover:bg-opacity-20 transition-all duration-200 ease">
                {/* <FaEye className="text-5xl bg-[#5FC7AE] p-3 rounded-full " /> */}
              </span>
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl font-semibold hover:text-[#5FC7AE] transition-all duration-200">
                {item?.className}
              </h2>
              <div className="flex items-center justify-between mt-5">
                <span className="flex flex-col gap-3">
                  <p className="font-bold text-[#5FC7AE]">
                    <span className="text-gray-600 font-normal">
                      Instructor:{" "}
                    </span>
                    {item?.instructorName}
                  </p>
                  <p className="gray-600 font-bold text-[#5FC7AE]">
                    <span className="text-gray-600 font-normal">
                      Available Seats:{" "}
                    </span>
                    {item?.availableSeats}
                  </p>
                  <p className="gray-600 font-bold text-[#5FC7AE]">
                    <span className="text-gray-600 font-normal">Status: </span>
                    {item?.status}
                  </p>
                </span>
                <span className="text-[#5FC7AE] bg-[#d4f7ee] px-5 py-2 font-bold">
                  $ {item?.price}
                </span>
              </div>
              <button
                onClick={() => handleSelectedClass(item)}
                className="btn mt-4 bg-[#5FC7AE] text-white hover:bg-[#5FC7AE]"
              >
                Selected
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
