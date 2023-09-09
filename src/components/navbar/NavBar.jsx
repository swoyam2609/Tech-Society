import React, { useState } from 'react'
import logo from "../../assets/logo.svg"

export default function NavBar() {
    let [isOpen, setIsOpen ] = useState(false);
    let [dropdown, setDropdown] = useState(false);

  return (
    <div className=" shadow-md w-full top-0 left-0 navbar">
      <div className="md:flex items-center justify-between bg-[#0c0a0a] py-4 px-7 md:px-10">
        <div className="items-center font-[Poppins] text-white">
          <a href="/" className="flex">
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
          </a>
        </div>
        <div
          className="text-3xl text-white absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ion-icon name={isOpen ? "close" : "menu"}></ion-icon>
        </div>
        <ul
          className={`text-[#848484] bg-[#0c0a0a] md:flex md:items-center md:py-0 py-4 md:static absolute left-0 w-full md:w-auto md:pl-0 pl-5 md:z-auto z-[-1] transition-all duration-500 ease-in ${
            isOpen ? "top-20 z-auto" : "top-[-500px]"
          }`}
        >
          <li className="md:ml-8 text-sm md:my-0 my-5">
            <a href="/" className="hover:text-white duration-300">
              HOME
            </a>
          </li>
          <li className=" relative md:top-1.5 md:ml-8 text-sm md:my-0 my-5">
            <button
              className="hover:text-white duration-300 pb-3"
              onMouseEnter={() => setDropdown(true)}
            >
              PAGES &#709;
            </button>
            <div
              className={`w-28 md:absolute bg-[#0c0c0a] -right-10 p-2 transition-all duration-1000 ${
                dropdown ? "top-15" : "top-[-200px]"
              }`}
              onMouseLeave={() => setDropdown(false)}
            >
              <ul className="space-y-2">
                <li>
                  <a
                    href="/about"
                    className="flex duration-300 hover:text-white"
                  >
                    ABOUT US
                  </a>
                </li>
                <li>
                  <a href="/faq" className="flex duration-300 hover:text-white">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li className="md:ml-8 text-sm md:my-0 my-5">
            <a href="/gallery" className="hover:text-white duration-300">
              GALLERY
            </a>
          </li>
          <li className="md:ml-8 text-sm md:my-0 my-5">
            <a href="/events" className="hover:text-white duration-300">
              EVENTS
            </a>
          </li>
          <li className="md:ml-8 text-sm md:my-0 my-5">
            <a href="/contact" className="hover:text-white duration-300">
              CONTACT
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
