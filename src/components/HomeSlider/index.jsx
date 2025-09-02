import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "./style.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

const HomeSlider = () => {
  return (
    <div className="py-4 pt-4 homeSlider">
      <div className="container">
        <Swiper
          spaceBetween={20}
          navigation={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
          modules={[Autoplay, Navigation]}
          className="sliderHome"
        >
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
              <img
                src="https://serviceapi.spicezgold.com/download/1755503364377_1721277298204_banner.jpg"
                alt="Banner slide"
                className="w-full"
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
            <img
              src="https://serviceapi.spicezgold.com/download/1751685144346_NewProject(11).jpg"
              alt="Banner slide"
              className="w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
            <img
              src="https://serviceapi.spicezgold.com/download/1751685130717_NewProject(8).jpg"
              alt="Banner slide"
              className="w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
            <img
              src="https://serviceapi.spicezgold.com/download/1755503418386_NewProject(12).jpg"
              alt="Banner slide"
              className="w-full"
            />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="rounded-[20px] overflow-hidden item">
            <img
              src="https://serviceapi.spicezgold.com/download/1748955932914_NewProject(1).jpg"
              alt="Banner slide"
              className="w-full"
            />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default HomeSlider;
