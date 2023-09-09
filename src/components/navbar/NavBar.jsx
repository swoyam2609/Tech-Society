import React from 'react'
import logo from "../../assets/logo.svg"

export default function NavBar() {
  return (
    <div className="w-full top-0 left-0 navbar">
      <div className="md:flex bg-[#0c0a0a] py-4 px-7 md:px-10">
        <div className="cursor-pointer flex items-center font-[Poppins] text-white">
          <span>
            <img src={logo} alt="tech-society logo" />
          </span>
          <span className="pl-2 font-sans">
            <h2 className="text-3xl mb-1 tracking-wide">
              <span className="font-bold">Tech</span>Society
            </h2>
            <h5 className="text-xs text-center  tracking-widest">
              IIIT BHUBANESWAR
            </h5>
          </span>
        </div>
      </div>
    </div>
  );
}
