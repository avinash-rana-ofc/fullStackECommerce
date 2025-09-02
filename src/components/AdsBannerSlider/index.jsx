import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import BannerBox from "../BannerBox";

const AdsBannerSlider = (props) => {
  return (
    <div className="py-5 w-full">
      <Swiper
        slidesPerView={props.items}
        navigation={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="smlBtn"
      >
        <SwiperSlide>
            <BannerBox img={"banner1.webp"} alt={"banner1"} link={"/"}/>
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner2.jpg"} alt={"banner2"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner3.webp"} alt={"banner3"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner4.webp"} alt={"banner4"} link={"/"} />
        </SwiperSlide>
        <SwiperSlide>
            <BannerBox img={"banner5.jpg"} alt={"banner5"} link={"/"} />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default AdsBannerSlider;
