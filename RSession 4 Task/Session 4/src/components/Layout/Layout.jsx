import React from 'react'
import Navbar from '../common/navbar/Navbar'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  )
}
