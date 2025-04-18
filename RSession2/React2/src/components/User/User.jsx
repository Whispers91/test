import React from "react";

import { IoIosArrowDown } from "react-icons/io";

export default function user() {
  return (
    <div>
      <div className="user-container flex items-center gap-4">
        <div className="bell-icon cursor-pointer mr-1">
          <img src="/public\assets\Navbar\bell-ring.png" alt="" />
        </div>
        <div className="user-panel bg-[#F0F1F5] p-3 w-fit rounded-[.8em] flex items-center cursor-pointer border-2 border-[#0000001A]">
          <div className="user-icon border-2 border-white rounded-2xl bg-white mr-2">
            <img src="/public/assets/Navbar/user male.png" alt="" />
          </div>
          <div className="user-name mr-1">
          Joe Programming
          </div>
          <IoIosArrowDown/>
        </div>
      </div>
    </div>
  );
}
