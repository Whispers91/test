import React from 'react'
import Navbar from '../components/navbar/Navbar'
import Sidebar from '../components/sidebar/Sidebar'
import Explore from '../components/exploreProducts/explore'
import Task from '../components/minitask/Task'

export default function FoodPage() {
  return (
    <div className='C bg-gray-100'>
      <Navbar/>
      <div className="content-container flex">
      <Sidebar/>
      <Explore/>
      </div>
      {/* <Task/> */}
    </div>
  )
}
