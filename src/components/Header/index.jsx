import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <div className="top-strip py-2 border-gray-300 border-t-[1px] border-b-[1px]">
        <div className="container">
          <div className="flex justify-center items-center">
            <div className="w-[50%] col1">
              <p className="font-[500] text-[12px]">Get upto 50% off for new season styles, limited time only</p>
            </div>
            <div className="flex justify-end items-center col2">
              <ul>
                <li className="list-none">
                  <Link to="help-center" className="font-[500] text-[13px] link" >Help Center</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
