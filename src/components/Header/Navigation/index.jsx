import { Button } from "@mui/material";
import React, { useState } from "react";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { GoRocket } from "react-icons/go";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css"

const Navigation = () => {
    const [isOpenCatPanel, setIsOpenCatPanel] = useState(false);

    const openCategoryPanel = (value) => {
      console.log(value)
        setIsOpenCatPanel(value);
    }
  return (
    <>
      <nav>
        <div className="flex justify-end items-center gap-5 container">
          <div className="w-[20%] col_1">
            <Button className="gap-2 w-full !text-black" onClick={() => openCategoryPanel(true)}>
              <RiMenu2Fill className="text-[18px]" />
              Shop by Categories
              <LiaAngleDownSolid className="ml-auto font-bold text-[13px]" />
            </Button>
          </div>

          <div className="w-[60%] col_2">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[14px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[14px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[14px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Electronics
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[16px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Bags
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[16px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Footwear
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[16px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Groceries
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[16px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Beauty
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[16px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Wellness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  to={"/home"}
                  className="font-[500] text-[16px] transition link"
                >
                  <Button className="!font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] transition link">
                    Jewellery
                  </Button>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-[20%] col_3">
            <p className="flex items-center gap-3 mt-0 mb-0 font-[500] text-[14px]">
              <GoRocket className="text-[18px]" />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>

      {/* Category Panel Component */}
      <CategoryPanel openCategoryPanel={openCategoryPanel} isOpenCatPanel={isOpenCatPanel}/>
    </>
  );
};

export default Navigation;
