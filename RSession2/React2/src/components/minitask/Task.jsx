import React, { useState } from 'react'

export default function Task() {
    const [isAccept, setAccept] = useState(false)
    return (
    <div>
      <div>
      <input type="checkbox" name = "" id = "" onChange={(e) => setAccept(e.target.checked)}/>
      <label htmlFor="">Accept Terms</label>
      </div>
      <input type="text" name = "" id = "" disabled = {isAccept} className={`border-2 border-gray-300 rounded-md focus:outline-none ps-2 ${isAccept ? "bg-white" : "bg-gray-600"}`}/>
    </div>
  )
}
