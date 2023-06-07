import React from "react";
import { Autoplay, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

const Banner = () => {
  return (
    <div>
      <Swiper
        style={{
          "--swiper-pagination-color": "#5FC7AE",
          "--swiper-navigation-color": "#5FC7AE",
          "--swiper-navigation-size": "30px",
          "--swiper-pagination-bullet-inactive-color": "#AFE3D6",
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
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper md:h-screen"
      >
        <SwiperSlide className="relative">
          <img src="https://i.ibb.co/rbGF2DF/slider1.webp" alt="slider-image" />
          <div className="absolute top-5 md:top-40 left-14 md:left-24 font-playFair">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-600 md:tracking-[5px] md:font-bold mb-2 md:mb-4 font-sans"
            >
              Welcome to our Yogazone
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-gray-600 md:font-bold text-2xl md:text-4xl mb-3 md:mb-7 md:leading-snug"
            >
              Keep <span className="text-[#5FC7AE]">Refresh & Strong</span> Your
              Body
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-gray-600 w-11/12 md:w-1/2 text-sm md:text-base"
            >
              Every facet of daily life is aligned with the purpose of
              nurturing, health, harmony, and spiritual growth and provides
            </p>
            <button className="mt-5 md:mt-10 border md:font-semibold border-[#5FC7AE] px-3 md:px-8 py-1 md:py-2 rounded-full hover:bg-[#AFE3D6] transition-all duration-200 ease-in-out uppercase text-gray-600">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src=" https://i.ibb.co/NnbBM4C/slider2.webp"
            alt="slider-image"
          />
          <div className="absolute top-5 md:top-40 left-14 md:left-24 font-playFair">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-600 md:tracking-[5px] md:font-bold mb-2 md:mb-4 font-sans"
            >
              Welcome to our Yogazone
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-gray-600 md:font-bold text-2xl md:text-4xl mb-3 md:mb-7 md:leading-snug"
            >
              Keep <span className="text-[#5FC7AE]">Refresh & Strong</span> Your
              Body
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-gray-600 w-11/12 md:w-1/2 text-sm md:text-base"
            >
              Every facet of daily life is aligned with the purpose of
              nurturing, health, harmony, and spiritual growth and provides
            </p>
            <button className="mt-5 md:mt-10 border md:font-semibold border-[#5FC7AE] px-3 md:px-8 py-1 md:py-2 rounded-full hover:bg-[#AFE3D6] transition-all duration-200 ease-in-out uppercase text-gray-600">
              Read More
            </button>
          </div>
        </SwiperSlide>
        <SwiperSlide className="relative">
          <img
            src="https://i.ibb.co/WxxwKvb/1920x858-bg1.jpg"
            alt="slider-image"
          />
          <div className="absolute top-5 md:top-40 left-14 md:left-24 font-playFair">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              className="text-gray-600 md:tracking-[5px] md:font-bold mb-2 md:mb-4 font-sans"
            >
              Welcome to our Yogazone
            </p>
            <h1
              data-aos="fade-up"
              data-aos-duration="1500"
              className="text-gray-600 md:font-bold text-2xl md:text-4xl mb-3 md:mb-7 md:leading-snug"
            >
              Keep <span className="text-[#5FC7AE]">Refresh & Strong</span> Your
              Body
            </h1>
            <p
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-gray-600 w-11/12 md:w-1/2 text-sm md:text-base"
            >
              Every facet of daily life is aligned with the purpose of
              nurturing, health, harmony, and spiritual growth and provides
            </p>
            <button className="mt-5 md:mt-10 border md:font-semibold border-[#5FC7AE] px-3 md:px-8 py-1 md:py-2 rounded-full hover:bg-[#AFE3D6] transition-all duration-200 ease-in-out uppercase text-gray-600">
              Read More
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
