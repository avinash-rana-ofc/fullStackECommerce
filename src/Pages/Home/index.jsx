import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";

const Home = () => {
  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

      <section className="bg-white py-16">
        <div className="container">
          <div className="flex justify-between items-center mb-7 p-4 py-4 border-[#ff5252] border-2 rounded-md w-full freeShipping">
            <div className="flex items-center gap-4 col1">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="font-[600] text-[20px] uppercase">Free Shipping</span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">Free Delivery Now On Your First Order and above Rs 200/-</p>
            </div>
            <p className="font-bold text-[25px]">- Only Rs 200/-*</p>
          </div>

          <AdsBannerSlider items={4}/>
        </div>
      </section>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Home;
