import React, { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { IoCloseSharp } from "react-icons/io5";
import { Button } from "@mui/material";
import { FaRegSquarePlus } from "react-icons/fa6";
import { FaRegMinusSquare } from "react-icons/fa";
import { Link } from "react-router-dom";

const CategoryPanel = (props) => {
  const [subMenuIndex, setSubMenuIndex] = useState(null);
  const [innerSubMenuIndex, setInnerSubMenuIndex] = useState(null);

  const openSubmenu = (index) => {
    if (subMenuIndex === index) setSubMenuIndex(null);
    else setSubMenuIndex(index);
  };

  const openInnerSubmenu = (index) => {
    if (innerSubMenuIndex === index) setInnerSubMenuIndex(null);
    else setInnerSubMenuIndex(index);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="flex justify-between items-center p-3 font-[500] text-[16px]">
        Shop by Categories{" "}
        <IoCloseSharp
          onClick={() => props.openCategoryPanel(false)}
          className="text-[20px] cursor-pointer"
        />
      </h3>

      <div className="scroll">
        <ul className="w-full">
          <li className="relative flex flex-col list-none">
            <Link to={"/"} className="w-full">
              <Button className="!justify-start !px-3 w-full !text-[rgba(0,0,0,0.8)] !text-left">
                Fashion
              </Button>
            </Link>
            {subMenuIndex === 0 ? (
              <FaRegMinusSquare
                className="top-[10px] right-[15px] absolute cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            ) : (
              <FaRegSquarePlus
                className="top-[10px] right-[15px] absolute cursor-pointer"
                onClick={() => openSubmenu(0)}
              />
            )}

            {subMenuIndex === 0 && (
              <ul className="pl-3 w-full submenu">
                <li className="relative list-none">
                  <Link to={"/"} className="w-full">
                    <Button className="!justify-start !px-3 w-full !text-[rgba(0,0,0,0.8)] !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 0 ? (
                    <FaRegMinusSquare
                      className="top-[10px] right-[15px] absolute cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="top-[10px] right-[15px] absolute cursor-pointer"
                      onClick={() => openInnerSubmenu(0)}
                    />
                  )}

                  {innerSubMenuIndex === 0 && (
                    <ul className="pl-3 w-full inner_submenu">
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>


          {/* 2nd li */}
          <li className="relative flex flex-col list-none">
            <Link to={"/"} className="w-full">
              <Button className="!justify-start !px-3 w-full !text-[rgba(0,0,0,0.8)] !text-left">
                Fashion
              </Button>
            </Link>
            {subMenuIndex === 1 ? (
              <FaRegMinusSquare
                className="top-[10px] right-[15px] absolute cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            ) : (
              <FaRegSquarePlus
                className="top-[10px] right-[15px] absolute cursor-pointer"
                onClick={() => openSubmenu(1)}
              />
            )}

            {subMenuIndex === 1 && (
              <ul className="pl-3 w-full submenu">
                <li className="relative list-none">
                  <Link to={"/"} className="w-full">
                    <Button className="!justify-start !px-3 w-full !text-[rgba(0,0,0,0.8)] !text-left">
                      Apparel
                    </Button>
                  </Link>
                  {innerSubMenuIndex === 1 ? (
                    <FaRegMinusSquare
                      className="top-[10px] right-[15px] absolute cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  ) : (
                    <FaRegSquarePlus
                      className="top-[10px] right-[15px] absolute cursor-pointer"
                      onClick={() => openInnerSubmenu(1)}
                    />
                  )}

                  {innerSubMenuIndex === 1 && (
                    <ul className="pl-3 w-full inner_submenu">
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Smart Tablet
                        </Link>
                      </li>
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Crepe T-Shirt
                        </Link>
                      </li>
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Leather Watch
                        </Link>
                      </li>
                      <li className="mb-1 list-none">
                        <Link
                          to={"/"}
                          className="!justify-start !px-3 w-full text-[14px] !text-left transition link"
                        >
                          Rolling Diamond
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
              </ul>
            )}
          </li>
        </ul>
      </div>
    </Box>
  );
  return (
    <div>
      <Drawer
        open={props.isOpenCatPanel}
        onClose={() => props.openCategoryPanel(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default CategoryPanel;
