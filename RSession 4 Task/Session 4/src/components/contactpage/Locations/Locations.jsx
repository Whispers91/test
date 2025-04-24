import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Locations() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[80vh] relative">
      <ul className="flex flex-col gap-3 absolute left-5 bg-[#2A3238] rounded-3xl p-10 h-70 sidebar-btns">
          <NavLink to={"/contact"} className="font-[500] text-2xl text-[#FFFFFF99]" end>
            Contact us Form
          </NavLink>
          <NavLink
            to={"/contact/emails"} 
            className="font-[500] text-2xl text-[#FFFFFF99]"
          >
            Emails
          </NavLink>
          <NavLink
            to={"/contact/locations"} end
            className="font-[500] text-2xl text-[#FFFFFF99]"
          >
            Locations
          </NavLink>
          <NavLink
            to={"/contact/phone"}
            className="font-[500] text-2xl text-[#FFFFFF99]"
          >
            Phone Number
          </NavLink>
        </ul>
        <p className="font-[500] text-4xl text-black">Contact us Locations</p>
      </div>
    </div>
  );
}
