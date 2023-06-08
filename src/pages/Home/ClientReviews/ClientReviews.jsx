import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import { FaQuoteRight } from "react-icons/fa";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const ClientReviews = () => {
  const Quotes = [
    {
      id: "1",
      quote:
        "Yogi is my second family where I’ve learned and then worked for a long time. Becoming a yoga trainer here is the second best decision I have made, the first one is to marry John, my beloved husband.",
      name: "John Smith",
      subCategory: "Happy Client",
    },
    {
      id: "2",
      quote:
        "Yogi is my second family where I’ve learned and then worked for a long time. Becoming a yoga trainer here is the second best decision I have made, the first one is to marry John, my beloved husband.",
      name: "John Doe",
      subCategory: "Happy Client",
    },
    {
      id: "3",
      quote:
        "Yogi is my second family where I’ve learned and then worked for a long time. Becoming a yoga trainer here is the second best decision I have made, the first one is to marry John, my beloved husband.",
      name: "John Smith",
      subCategory: "Happy Client",
    },
  ];
  return (
    <div className="lg:w-full mx-auto">
      <SectionTitle heading={"Client Reviews"} />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-0 bg-cyan-50 md:h-[550px] px-10">
        <div>
          <img
            className="md:max-w-xl"
            src="https://i.ibb.co/X2vZH33/girl-2.png"
            alt="testimonial-image"
          />
        </div>
        <div>
          <Swiper
            style={{
              "--swiper-pagination-color": "#fb923c",
              "--swiper-navigation-color": "#ECFDF5",
              "--swiper-navigation-size": "30px",
              "--swiper-pagination-bullet-inactive-color": "#FFFF",
              "--swiper-pagination-bullet-inactive-opacity": "1",
              "--swiper-pagination-bullet-size": "10px",
              "--swiper-pagination-bullet-horizontal-gap": "6px",
            }}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            modules={[Autoplay]}
            className="mySwiper md:h-screen"
          >
            <div>
              {Quotes.map((quote) => (
                <SwiperSlide
                  className="flex items-center mt-10"
                  key={quote?.id}
                >
                  <div className="flex flex-col items-center md:items-start gap-10 py-10">
                    <FaQuoteRight className="text-7xl text-[#5FC7AE] h-24 w-24" />
                    <p className="text-gray-600] md:font-semibold text-lg md:text-xl font-playFair text-center md:text-left">
                      {quote?.quote}
                    </p>
                    <span className="text-center md:text-left">
                      <h2 className="text-[#5FC7AE] text-lg md:font-semibold uppercase">
                        {quote?.name}
                      </h2>
                      <h3 className="text-gray-600 text-lg md:font-semibold">
                        {quote?.subCategory}
                      </h3>
                    </span>
                    <button className="py-2.5 w-32 md:py-3 border border-[#5FC7AE] hover:bg-[#AFE3D6] transition-all transition-duration-200 ease-in-out rounded-full font-medium text-gray-600 hover:text-white text-base uppercase cursor-pointer">
                      View More
                    </button>
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ClientReviews;
