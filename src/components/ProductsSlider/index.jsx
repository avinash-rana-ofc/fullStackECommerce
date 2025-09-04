import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import ProductItem from "../ProductItem";

const ProductsSlider = (props) => {
  return (
    <div className="py-3 productsSlider">
      <Swiper
        slidesPerView={props.items}
        navigation={true}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        modules={[Navigation]}
        className="mySwiper"
        //style={{ width: "120%" }} 
      >
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
            <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductsSlider;
