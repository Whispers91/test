import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Emails() {
  return (
    <div>
      <div className="flex items-center justify-center w-full h-[80vh] relative">
        <ul className="flex flex-col gap-3 absolute left-5 bg-[#2A3238] rounded-3xl p-10 h-70 sidebar-btns">
          <NavLink
            to={"/contact"} end
            className="font-[500] text-2xl text-[#FFFFFF99]"
          >
            Contact us Form
          </NavLink>
          <NavLink
            to={"/contact/emails"} end
            className="font-[500] text-2xl text-[#FFFFFF99]"
          >
            Emails
          </NavLink>
          <NavLink
            to={"/contact/locations"}
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
        <p className="font-[500] text-4xl text-black">Contact us Emails</p>
      </div>
    </div>
  );
}
