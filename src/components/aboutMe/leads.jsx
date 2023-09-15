import React from 'react';

import lead from '../../assets/aboutMe/lead.png';
const Leads = () => {
  const leadsData = [
    {
      name: 'Lead 1',
      title: 'Title 1',
      imageUrl:lead,
       // Replace with the actual image URL
    },
    {
      name: 'Lead 2',
      title: 'Title 2',
      imageUrl:lead, // Replace with the actual image URL
    },
    {
      name: 'Lead 3',
      title: 'Title 3',
      imageUrl:lead, // Replace with the actual image URL
    },
  ];

  return (
  <div className="justify-center items-center pb-8" style={{background:"#0C0A0A"}}>
  <div className='flex flex-col justify-center pt-10'>
    <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider justify-center">
              2023
            </h5>
            <h2 className="text-5xl m-auto text-white font-bold mb-8 my-2 tracking-wider">
              OUR LEADS 
            </h2>
    </div>
    <div className="flex flex-col lg:flex-row lg:space-x-8 pt-4 justify-center items-center" style={{background:"#0C0A0A"}}>
      {leadsData.map((lead, index) => (
        <div
          key={index}
          className=" w-64 bg-black text-center shadow-md"
        >
          <img
            src={lead.imageUrl}
            alt={`Lead ${index + 1}`}
            className="w-80 object-cover mb-3"
          />
          <p className="text-2xl font-extrabold text-white mt-7">{lead.name}</p>
          <p className="text-gray-500 text-sm mt-4 ">{lead.title}</p>
          <div class="flex items-center justify-center">
            <div class="border-b border-white border-opacity-50 w-3/5 mt-4"></div>
          </div>
          <div className="text-white justify-center text-lg mt-6 pb-10 gap-2 flex space-x-2">
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="mail"></ion-icon>
        </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default Leads;
