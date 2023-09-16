import React from 'react'
import blog1 from "../../assets/home/blog1.jpeg"

function BlogCard() {
  return (
    <a href="/">
      <div className="w-80 my-10 mx-5 duration-300 hover:scale-105 hover:rounded-lg">
        <img src={blog1} className="h-56" alt="Images" />
        <div className="bg-black text-white py-5 mb-5 text-left w-auto">
          <h5 className="text-sm ml-3 my-2 text-[#3786ff] tracking-wider">
            APRIL 14, 2022
          </h5>
          <h3 className="text-2xl sm:text-3xl ml-3 text-white font-bold my-2 tracking-wider">
            IMPORTANT BRANDS HAVE GIVEN US THEIR TRUST
          </h3>
        </div>
      </div>
    </a>
  );
}

export default BlogCard