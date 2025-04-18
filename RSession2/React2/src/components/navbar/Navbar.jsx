import React from 'react'
import Logo from '../Logo/Logo'
import User from '../user/user'
export default function Navbar() {
  return (
    <div>
      <div className="navbar flex justify-between items-center px-4 py-2 bg-white">
        <Logo/>
        <User/>
      </div>
    </div>
  )
}
