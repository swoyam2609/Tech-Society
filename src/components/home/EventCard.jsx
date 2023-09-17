import React from 'react';

const Event = ({ title, subject, time,imageUrl, isGray }) => {
  const backgroundColor = isGray ? 'bg-black' : 'bg-gray-800';


  return (
    <div className={`flex ${backgroundColor} p-4 py-8`}>
      <div className={'w-1/2 text-left pl-8 py-5'}>
      <h2 className='text-[#3786ff] text-xl pb-5'>{title}</h2>
        <h2 className="text-3xl bold mb-2 text-white pb-5">{subject}</h2>
        
        <p className='text-gray-400'>{time}</p>
      </div>
      <div className="w-1/2 pl-12">
        <img src={imageUrl} alt="Event" className="w-full" />
      </div>
    </div>
  );
};

export default Event;
