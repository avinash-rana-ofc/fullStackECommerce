import React from "react";
import "./style.css";
import { Button } from "@mui/material";
import { IoSearch } from "react-icons/io5";

const Search = () => {
  return (
    <div className="relative bg-[#e5e5e5] p-2 rounded-[5px] w-[100%] h-[50px] searchBox">
      <input
        type="text"
        placeholder="Search for products..."
        className="p-2 focus:outline-none w-full h-[35px] text-[15px]"
      />
      <Button className="top-[8px] right-[5px] z-50 !absolute !rounded-full !w-[37px] !min-w-[37px] h-[37px] !text-black">
        <IoSearch className="text-[#4e4e4e] text-[22px]" />
      </Button>
    </div>
  );
};

export default Search;
