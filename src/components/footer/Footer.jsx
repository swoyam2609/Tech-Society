import React from 'react'
import logo from "../../assets/logo.svg"

function Footer() {
  return (
    <div className="footer-container w-screen">
      <div className="min-h- mx-auto sm:w-1/2 sm:flex p-5 justify-evenly text-white">
        <div className=''>
          <div className="items-center font-[Poppins] text-white">
            <a href="/" className="flex">
              <span>
                <img src={logo} alt="tech-society logo" />
              </span>
              <span className="pl-2 font-sans">
                <h2 className="text-3xl mb-1 tracking-wide">
                  <span className="font-bold">Tech</span>Society
                </h2>
                <h5 className="text-xs text-sm text-center  tracking-widest">
                  IIIT BHUBANESWAR
                </h5>
              </span>
            </a>
            <p className=" text-[#848484] mr-5 tracking-wide leading-6 text-xs line py-3">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
        <div className='px-10 lg:px-6 py-2'>
          <h2 className="text-md font-bold">LINKS</h2>
          <ul className="flex space-x-8">
            <li className="text-[#848484] text-xs">
              <ul className="space-y-3 py-3 min-w-max">
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/about">About</a>
                </li>
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/team">Our Team</a>
                </li>
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/gallery">Gallery</a>
                </li>
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/contact">Contact</a>
                </li>
              </ul>
            </li>
            <li className="text-[#848484] text-xs">
              <ul className="space-y-3 py-3 min-w-max">
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/">Help & Support</a>
                </li>
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/">Privacy Policy</a>
                </li>
                <li className='transition-all duration-300 hover:text-white'>
                  <a href="/gal">Terms of Use</a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col px-5 pb-2 md:flex-row justify-evenly items-center w-full bg-black">
        <div className="text-[#848484] flex justify-center text-sm p-2">
          © Copyright, 2023. Tech Society-IIIT Bhubaneswar
        </div>
        <div className="text-white justify-center text-lg flex space-x-2">
          <ion-icon name="logo-twitter"></ion-icon>
          <ion-icon name="logo-facebook"></ion-icon>
          <ion-icon name="logo-instagram"></ion-icon>
          <ion-icon name="mail"></ion-icon>
        </div>
      </div>
    </div>
  );
}

export default Footer