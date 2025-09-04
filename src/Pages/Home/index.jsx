import React from "react";
import HomeSlider from "../../components/HomeSlider";
import HomeCatSlider from "../../components/HomeCatSlider";
import { LiaShippingFastSolid } from "react-icons/lia";
import AdsBannerSlider from "../../components/AdsBannerSlider";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductsSlider from "../../components/ProductsSlider";

const Home = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <HomeSlider />
      <HomeCatSlider />

{/* POPULAR PRODUCTS SECTION */}

      <section className="bg-white py-8">
        <div className="container">
          <div className="flex justify-between items-center">
            <div className="leftSec">
              <h2 className="font-[600] text-[20px]">Popular Products</h2>
              <p className="font-[400] text-[14px]">
                Do not miss the current offers until the end of October.
              </p>
            </div>
            <div className="rightSec">
              <Box
                sx={{
                  maxWidth: { xs: 320, sm: 480, lg: 880 },
                  bgcolor: "background.paper",
                }}
              >
                <Tabs
                  value={value}
                  onChange={handleChange}
                  variant="scrollable"
                  scrollButtons="auto"
                  aria-label="scrollable auto tabs example"
                >
                  <Tab label="Fashion" />
                  <Tab label="Electronics" />
                  <Tab label="Bags" />
                  <Tab label="Footwear" />
                  <Tab label="Groceries" />
                  <Tab label="Beauty" />
                  <Tab label="Wellness" />
                  <Tab label="Jewellery" />
                </Tabs>
              </Box>
            </div>
          </div>

          <ProductsSlider items={5} />
        </div>
      </section>
{/* BANNER OFFER SECTION */}

      <section className="bg-white py-16 pt-2">
        <div className="container">
          <div className="flex justify-between items-center m-auto mb-7 p-4 py-4 border-[#ff5252] border-2 rounded-md w-[80%] freeShipping">
            <div className="flex items-center gap-4 col1">
              <LiaShippingFastSolid className="text-[50px]" />
              <span className="font-[600] text-[20px] uppercase">
                Free Shipping
              </span>
            </div>
            <div className="col2">
              <p className="mb-0 font-[500]">
                Free Delivery Now On Your First Order and above Rs 200/-
              </p>
            </div>
            <p className="font-bold text-[25px]">- Only Rs 200/-*</p>
          </div>

          <AdsBannerSlider items={4} />
        </div>
      </section>

{/* LATEST PRODUCTS SECTION */}

      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="font-[600] text-[20px]">Latest Products</h2>

          <ProductsSlider items={5} />
          <AdsBannerSlider items={4} />
        </div>
      </section>

{/* FEATURED PRODUCTS SECTION */}
      <section className="bg-white py-5 pt-0">
        <div className="container">
          <h2 className="font-[600] text-[20px]">Featured Products</h2>

          <ProductsSlider items={5} />
          <AdsBannerSlider items={3} />
        </div>
      </section>
      
    </div>
  );
};

export default Home;
