import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
import Rating from "@mui/material/Rating";
import { Button } from "@mui/material";
import { FaRegHeart } from "react-icons/fa";
import { MdZoomOutMap } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import Tooltip from "@mui/material/Tooltip";

const ProductItem = () => {
  return (
    <div className="shadow-md border-[rgba(0,0, border-1 rounded-md overflow-hidden 0, 0.1) productItem ]">
      <div className="group relative rounded-md w-[100%] overflow-hidden imgWrapper">
        <Link to={"/"}>
          <div className="h-[220px] overflow-hidden img">
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939206_125c18d6-592d-4082-84e5-49707ae9a4fd1749366193911-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-1.jpg"
              alt="fashion1"
              className="w-full"
            />
            <img
              src="https://serviceapi.spicezgold.com/download/1753722939207_5107b7b1-ba6d-473c-9195-8576a6a0a9611749366193848-Flying-Machine-Women-Wide-Leg-High-Rise-Light-Fade-Stretchab-3.jpg"
              alt="fashion2"
              className="top-0 left-0 absolute opacity-0 group-hover:opacity-100 w-full group-hover:scale-105 transition-all duration-700"
            />
          </div>
        </Link>
        <span className="top-[10px] left-[10px] z-50 absolute flex items-center bg-red-400 p-1 rounded-lg font-[500] text-[12px] text-white discount">
          10%
        </span>

        <div className="top-[-200px] group-hover:top-[15px] right-[5px] z-50 absolute flex flex-col items-center gap-2 opacity-0 group-hover:opacity-100 w-[50px] transition-all duration-300 actions">
          <Tooltip title="view details" placement="left-start">
            <Button className="group !bg-white hover:!bg-red-400 !rounded-full !w-[35px] !min-w-[35px] !h-[35px] hover:!text-black">
              <MdZoomOutMap className="!text-black text-[18px] group-hover:text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="compare" placement="left-start">
            <Button className="group !bg-white hover:!bg-red-400 !rounded-full !w-[35px] !min-w-[35px] !h-[35px] hover:!text-black">
              <IoGitCompareOutline className="!text-black text-[18px] group-hover:text-white" />
            </Button>
          </Tooltip>
          <Tooltip title="wishlist" placement="left-start">
            <Button className="group !bg-white hover:!bg-red-400 !rounded-full !w-[35px] !min-w-[35px] !h-[35px] hover:!text-black">
              <FaRegHeart className="!text-black text-[18px] group-hover:text-white" />
            </Button>
          </Tooltip>
        </div>
      </div>
      <div className="p-3 py-5 info">
        <h6 className="text-[13px]">
          <Link to={"/"} className="transition-all link">
            Flying Machine
          </Link>
        </h6>
        <h3 className="mt-1 mb-1 font-[500] text-[#000] text-[13px] title">
          <Link to={"/"} className="transition-all link">
            Women Wide Leg High-Rise ...
          </Link>
        </h3>
        <Rating name="size-small" defaultValue={4} size="small" readOnly />

        <div className="flex items-center">
          <span className="font-[500] text-[15px] text-gray-500 line-through oldPrice">
            Rs 1800/-
          </span>
          <span className="font-[600] text-[15px] text-red-400 oldPrice">
            Rs 1200/-
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
