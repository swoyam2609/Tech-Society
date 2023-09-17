import React from 'react';

const Event = ({ title, subject, time, imageUrl, isGray }) => {
  const backgroundColor = isGray ? 'bg-black' : 'bg-gray-800';

  return (
    <div className={`flex flex-col md:flex-row ${backgroundColor} p-4 py-8 overflow-x-hidden`}>
      <div className="md:w-1/2 pl-4  md:order-2">
        <img src={imageUrl} alt="Event" className="w-full pr-4"  />
      </div>
      <div className="md:w-1/2 order-1 md:text-left md:pl-8 py-5">
        <h2 className='text-[#3786ff] text-xl  pb-5'>{title}</h2>
        <h2 className="text-3xl font-bold mb-2 text-white pb-5">{subject}</h2>
        <p className='text-gray-400'>{time}</p>
      </div>
    </div>
  );
};

export default Event;