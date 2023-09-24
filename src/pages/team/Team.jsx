import React from 'react'
import Landing from '../../components/team/Landing'
import {members} from "../../components/team/members";

function Team() {
  return (
    <>
      <Landing />
      <div className="text-white ">
        <h2 className="text-5xl text-left font-bold tracking-wider m-10 mb-5 lg:pl-10">
          OUR LEADS
        </h2>
        <hr className="w-2/3 lg:w-1/3 ml-16 mb-10" />
        <div
          className="flex lg:space-x-8 gap-5 items-center overflow-x-scroll px-5"
          style={{ background: "#0C0A0A" }}
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="xl:mx-10 my-5 min-w-fit bg-black text-center shadow-md duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={member.imageUrl}
                alt={`member ${index + 1}`}
                className="w-80 h-80 object-cover mb-3 mx-auto"
              />
              <p className="text-2xl font-extrabold text-white mt-7 px-2">
                {member.name}
              </p>
              <p className="text-gray-500 text-sm mt-4 ">{member.title}</p>
              <div class="flex items-center justify-center">
                <div class="border-b border-white border-opacity-50 w-3/5 mt-4"></div>
              </div>
              <div className="text-white justify-center text-lg mt-6 pb-10 gap-2 flex space-x-2">
                <a href={member.linkedin}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href={member.mail}>
                  <ion-icon name="mail"></ion-icon>
                </a>
              </div>
            </div>
          ))}
        </div>
        <h2 className="text-5xl text-left font-bold tracking-wider m-10 mb-5 lg:pl-10">
          MEMBERS
        </h2>
        <hr className="w-2/3 lg:w-1/3 ml-16 mb-10" />
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 lg:space-x-8 gap-5 justify-center items-center overflow-x-scroll px-5"
          style={{ background: "#0C0A0A" }}
        >
          {members.map((member, index) => (
            <div
              key={index}
              className="xl:mx-10 p-5 my-5 min-w-fit bg-black text-center shadow-md duration-300 hover:scale-105 cursor-pointer"
            >
              <img
                src={member.imageUrl}
                alt={`member ${index + 1}`}
                className="w-80 h-80 mb-3 mx-auto"
              />
              <p className="text-2xl font-extrabold text-white mt-7 px-2">
                {member.name}
              </p>
              <p className="text-gray-500 text-sm mt-4 ">{member.title}</p>
              <div class="flex items-center justify-center">
                <div class="border-b border-white border-opacity-50 w-3/5 mt-4"></div>
              </div>
              <div className="text-white justify-center text-lg mt-6 pb-10 gap-2 flex space-x-2">
                <a href={member.linkedin}>
                  <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href={member.mail}>
                  <ion-icon name="mail"></ion-icon>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team