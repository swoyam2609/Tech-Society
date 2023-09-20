import React from 'react';
// import game from '../../assets/aboutMe/game.png';

import Swoyam from "../../assets/aboutMe/leads/Swoyam.jpg";
import Raj from "../../assets/aboutMe/leads/Raj.jpg";

const Leads = () => {
  const leadsData = [
    {
      name: "Swoyam Siddharth Nayak",
      title: "Secretary",
      imageUrl: Swoyam,
      linkedin: "https://www.linkedin.com/in/swoyam2609/",
      mail: "mailto:b121065@iiit-bh.ac.in",
    },
    {
      name: "Raj Alpha Swain",
      title: "Joint Secretary",
      imageUrl: Raj,
      linkedin: "https://www.linkedin.com/in/rajalphaswain/",
      mail: "mailto:b321028@iiit-bh.ac.in",
    }
  ];

  return (
    <div
      className="justify-center items-center pb-28"
      style={{ background: "#0C0A0A" }}
    >
      {/* <div className="flex gap-5 text-left ml-5 lg:ml-80 pt-28 hover:scale-110 duration-300 cursor-pointer">
        <div>
          <img src={game} className="w-16 h-16" alt="" />
        </div>
        <div>
          <h1 className="text-white text-[2rem] tracking-wider pb-1">76,500</h1>
          <p className="text-white text-xs opacity-70 pb-10">
            Games playerd by 6,388 people in 7 days
          </p>
        </div>
      </div>
      <hr class="border-t border-gray-400  w-[30rem] my-4 border-opacity-50 ml-72"></hr>
      <div className="flex gap-5 text-left ml-5 lg:ml-80 pt-10 hover:scale-110 duration-300 cursor-pointer">
        <div>
          <img src={game} className="w-16 h-16" alt="" />
        </div>
        <div>
          <h1 className="text-white text-[2rem] tracking-wider pb-1">76,500</h1>
          <p className="text-white text-xs opacity-70 pb-10">
            Games playerd by 6,388 people in 7 days
          </p>
        </div>
      </div>
      <hr class="border-t border-gray-300 w-[30rem] pb-10 my-4 ml-72 border-opacity-50  "></hr> */}

      <div className="flex flex-col justify-center p-10">
        <h5 className="text-s m-auto text-[#3786ff] my-2 tracking-wider justify-center">
          2023
        </h5>
        <h2 className="text-5xl m-auto text-white font-bold mb-8 my-2 tracking-wider">
          OUR LEADS
        </h2>
      </div>
      <div
        className="gap-5 flex flex-col lg:flex-row lg:space-x-8 justify-center items-center"
        style={{ background: "#0C0A0A" }}
      >
        {leadsData.map((lead, index) => (
          <div
            key={index}
            className="xl:mx-10 my-5 xl:w-96 bg-black text-center shadow-md duration-300 hover:scale-105 hover:rounded-lg cursor-pointer"
          >
            <img
              src={lead.imageUrl}
              alt={`Lead ${index + 1}`}
              className="w-80 object-cover mb-3 mx-auto"
            />
            <p className="text-2xl font-extrabold text-white mt-7">
              {lead.name}
            </p>
            <p className="text-gray-500 text-sm mt-4 ">{lead.title}</p>
            <div class="flex items-center justify-center">
              <div class="border-b border-white border-opacity-50 w-3/5 mt-4"></div>
            </div>
            <div className="text-white justify-center text-lg mt-6 pb-10 gap-2 flex space-x-2">
              <a href={lead.linkedin}>
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
              <a href={lead.mail}>
                <ion-icon name="mail"></ion-icon>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leads;
