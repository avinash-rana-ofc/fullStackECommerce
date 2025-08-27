import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGitCompareOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { Tooltip } from "@mui/material";

const Header = () => {
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
      padding: "0 4px",
    },
  }));

  return (
    <header>
      <div className="top-strip py-2 border-gray-300 border-t-[1px] border-b-[1px]">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="w-[50%] col1">
              <p className="font-[500] text-[12px]">
                Get upto 50% off for new season styles, limited time only
              </p>
            </div>
            <div className="flex justify-end items-center col2">
              <ul className="flex items-center gap-3">
                <li className="list-none">
                  <Link
                    to="/help-center"
                    className="font-[500] text-[13px] transition link"
                  >
                    Help Center
                  </Link>
                </li>
                <li className="list-none">
                  <Link
                    to="/order-tracking"
                    className="font-[500] text-[13px] transition link"
                  >
                    Order Tracking
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="py-3 header">
        <div className="flex justify-between items-center container">
          <div className="w-[25%] col1">
            <Link to={"/"}>
              <img src="/logo.png" />
            </Link>
          </div>
          <div className="w-[45%] col2">
            <Search />
          </div>
          <div className="flex justify-end items-center pl-7 w-[30%] col3">
            <ul className="flex items-center gap-3">
              <li className="list-none">
                <Link
                  to={"/login"}
                  className="font-[500] text-[15px] transition link"
                >
                  Login
                </Link>{" "}
                |{" "}
                <Link
                  to={"/register"}
                  className="font-[500] text-[15px] transition link"
                >
                  Register
                </Link>
              </li>
              <li>
                <Tooltip title="Compare">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <IoGitCompareOutline />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Add to cart">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <MdOutlineShoppingCart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
              <li>
                <Tooltip title="Wishlist">
                  <IconButton aria-label="cart">
                    <StyledBadge badgeContent={4} color="secondary">
                      <FaRegHeart />
                    </StyledBadge>
                  </IconButton>
                </Tooltip>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
