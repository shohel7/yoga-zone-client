import React from "react";
import axios from "axios";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { useQuery } from "@tanstack/react-query";

const PopularInstructor = () => {
  const {
    data: instructors = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["instructors"],
    queryFn: async () => {
      const data = await axios.get("http://localhost:5000/instructors");
      // console.log(data?.data);
      return data?.data;
    },
  });

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  console.log(instructors);
  return (
    <div className="px-5 md:px-5 lg:max-w-[1230px] mx-auto">
      <SectionTitle
        heading={"Popular Instructors"}
        paragraph={
          "Yoga is a physical, mental, and spiritual practice or discipline. There is a broad variety of schools, practices and goals in Hinduism, Buddhism. The origins."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 gap-x-0">
        {instructors.map((instructors) => (
          <div
            key={instructors?._id}
            className="md:w-[360px] bg-base-100 hover:shadow-xl"
          >
            <figure className="relative">
              <img
                className="h-[250px] rounded-full w-9/12 mx-auto"
                src={instructors?.image}
                alt="class-image"
              />
            </figure>
            <div className="card-body">
              <h2 className="text-center text-xl font-semibold hover:text-[#5FC7AE] transition-all duration-200">
                {instructors?.name}
              </h2>
              <span className="flex flex-col gap-2 mt-4 text-center">
                <p className="font-bold text-[#5FC7AE]">
                  <span className="text-gray-600 font-normal">Email: </span>
                  {instructors?.email}
                </p>
                <p className="gray-600 font-bold text-[#5FC7AE]">
                  <span className="text-gray-600 font-normal">
                    Number of Class:{" "}
                  </span>
                  {instructors?.numberOfClass}
                </p>
                <p className="gray-600 font-bold text-[#5FC7AE]">
                  <span className="text-gray-600 font-normal">
                    Name of Class:{" "}
                  </span>
                  {instructors?.nameOfClass}
                </p>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularInstructor;
