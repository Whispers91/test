import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <div className='flex justify-between items-center p-8 navbar-btns'>
      <p className='text-[40px]'>
        Logo
      </p>
      <ul className='flex gap-11 items-center text-[20px] text-[#2A323899]'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/service"}>Service</NavLink>
        <NavLink to={"/contact"}>Contact us</NavLink>
      </ul>
      <button className='bg-[#2A3238] px-18 py-3 rounded-3xl font-[500] text-2xl text-white'>
        Login
      </button>
    </div>
  )
}
