import React from 'react'

export default function Accordion({ title, children }) {
  return (
    <div className='accordion'>
      <div className="accordion-header">
        <h2>{title}</h2>
      </div>
      <div className="accordion-content">
        {children}
      </div>
    </div>
  )
}