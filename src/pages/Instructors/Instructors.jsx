import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";

const Instructors = () => {
  const { data: instructors = [], isLoading } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const data = await axios.get(
        "https://yoga-zone-server.vercel.app/popularInstructors"
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

  console.log(instructors);
  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <SectionTitle heading={"All Instructors"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-0">
        {instructors.map((instructor) => (
          <div
            key={instructor?._id}
            className="border md:w-[360px] bg-base-100 hover:shadow-xl"
          >
            <figure className="relative">
              <img
                className="h-[250px] w-full"
                src={instructor?.image}
                alt="class-image"
              />
              <span className="absolute inset-0 pl-36 pt-28 text-white hover:bg-[#5FC7AE] hover:bg-opacity-20 transition-all duration-200 ease">
                {/* <FaEye className="text-5xl bg-[#5FC7AE] p-3 rounded-full " /> */}
              </span>
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl font-semibold hover:text-[#5FC7AE] transition-all duration-200">
                {instructor?.name}
              </h2>
              <div className="flex items-center justify-between mt-5">
                <span className="flex flex-col gap-3">
                  <p className="font-bold text-[#5FC7AE]">
                    <span className="text-gray-600 font-normal">
                      Instructor:{" "}
                    </span>
                    {instructor?.email}
                  </p>
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
