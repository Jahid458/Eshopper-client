import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

export default function Banner() {
  return (
    <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
      <SwiperSlide>
        <div className="bg-[#ECF0F1] flex flex-row justify-between items-center lg:py-32 md:px-0 md:py-16 px-3 py-10 ">
          {/* Content */}
          <div className=" mx-auto text-center sm:text-left md:ml-36 ml-4">
            <span className="text-gray-600 uppercase tracking-wide lg:text-sm text-xs mb-2">
              Up to 30% Off
            </span>
            <h1 className="whitespace-nowrap lg:text-6xl md:text-3xl text-base font-semibold leading-tight text-gray-900 mt-2">
              Select <br className="hidden md:block" /> Headphones
            </h1>
            <button className="mt-4 md:px-6 md:py-2 border border-b-4 border-t-0 border-l-0 border-r-0 hover:border-b-primary hover:text-primary transition-colors duration-300 ease-in-out">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="w-full flex  md:justify-end">
            <div className="w-[350px] sm:w-[200px]  md:w-[520px] lg:w-[700px] h-auto">
              <img
                src="./electric1.jpg"
                alt="Headphone"
                className="md:w-full w-[83%] h-auto  md:object-contain"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>

      {/* Slide 2 */}
      <SwiperSlide>
        <div className="bg-[#ECF0F1] flex flex-row-reverse  justify-between items-center lg:py-32 md:px-0 md:py-16 px-3 py-7 ">
          {/* Content */}
          <div className=" mx-auto text-center sm:text-left md:ml-36 lg:mr-32 mr-5">
            <span className="text-gray-600 uppercase tracking-wide lg:text-sm  mb-2">
              Drone Collection
            </span>
            <h1 className="whitespace-nowrap lg:text-6xl md:text-3xl text-xl font-semibold leading-tight text-gray-900 mt-2">
              Sale 20% Off
            </h1>
            <button className="mt-4 md:px-6 md:py-2 border border-b-4 border-t-0 border-l-0 border-r-0 hover:border-b-primary hover:text-primary transition-colors duration-300 ease-in-out">
              Shop Now
            </button>
          </div>

          {/* Image */}
          <div className="w-full flex  md:justify-end ">
            <div className="w-[350px] sm:w-[100%]  md:w-[100%] lg:w-[700px] h-auto">
              <img
                src="./banner2.png"
                alt="Headphone"
                className="md:w-full h-auto  md:object-contain ml-7"
              />
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
