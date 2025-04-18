import React from 'react'
import Section1 from './Section1'
import Section2 from './Section2'
import RSidebar from '../sidebar/RSidebar'

export default function explore() {
  return (
    <div className='explore-content bg-[#F0F1F5] w-full p-4 sm:p-6 md:p-8 flex flex-col lg:flex-row gap-6 lg:gap-8 rounded-[.5em]'>
      <div className="sections">
      <Section1/>
      <Section2/>
      </div>
        <RSidebar/>
    </div>
  )
}
