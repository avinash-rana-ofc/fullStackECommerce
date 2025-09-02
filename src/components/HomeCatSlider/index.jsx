import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";

const HomeCatSlider = () => {
  return (
    <div className="py-8 homeCatSlider">
      <div className="container">
        <Swiper
          slidesPerView={7}
          navigation={true}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png"
                  alt="fashion"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660988059_ele.png"
                  alt="electronics"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Electronics</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661045887_bag.png"
                  alt="bags"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Bags</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661061379_foot.png"
                  alt="footwear"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Footwear</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661077633_gro.png"
                  alt="groceries"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Groceries</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661092792_beauty.png"
                  alt="beauty"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Beauty</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741661105893_well.png"
                  alt="wellness"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Wellness</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png"
                  alt="fashion"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png"
                  alt="fashion"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png"
                  alt="fashion"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to={"/"}>
              <div className="flex flex-col justify-center items-center bg-white px-3 py-7 rounded-sm text-center item">
                <img
                  src="https://serviceapi.spicezgold.com/download/1755610847575_file_1734525204708_fash.png"
                  alt="fashion"
                  className="w-[60px] transition-all"
                />
                <h3 className="mt-3 font-[500] text-[15px]">Fashion</h3>
              </div>
            </Link>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default HomeCatSlider;
