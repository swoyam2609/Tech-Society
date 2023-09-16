import React from 'react'
import event1 from "../../assets/home/event1.jpeg"

function EventCard() {
  return (
    <div className='w-auto bg-[#0c0a0a] p-10 flex flex-col-reverse xl:flex-row justify-between items-center'>
      <div className=''>
        <div className=''>
          <span>tag 1</span>
          <span>tag 2</span>
        </div>
      </div>
      <img src={event1} className="h-48" alt="Images" />
    </div>
  )
}

export default EventCard