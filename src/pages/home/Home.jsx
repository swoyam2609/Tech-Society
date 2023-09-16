import React from 'react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import BlogCard from "../../components/home/BlogCard";


import cimg from "../../assets/home/home-carousel/carousel1.png"
import img1 from "../../assets/home/img1.jpeg";
import gallery1 from "../../assets/home/gallery1.jpeg";
import EventCard from '../../components/home/EventCard';

function Home() {
  return (
    <div className="min-h-full w-full z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img src={cimg} className="object-cover w-full" alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cimg} className="object-cover w-full" alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cimg} className="object-cover w-full" alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cimg} className="object-cover w-full" alt="carousel-img" />
        </SwiperSlide>
      </Swiper>
      <div className="w-full flex justify-center text-center items-center p-5 bg-standard-bg bg-cover min-h-fit">
        <div className="xl:w-1/2 flex flex-col justify-center items-center my-20">
          <div className="my-10">
            <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
              WELCOME TO THE BEST
            </h5>
            <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
              CODING ENVIRONMENT
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 my-10">
            <img src={img1} className="w-72 my-5" alt="Images" />
            <img src={img1} className="w-72 my-5" alt="Images" />
            <img src={img1} className="w-72 my-5" alt="Images" />
          </div>
          <p className="text-[#848484] leading-loose">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <a href="/about">
            <button className="bg-[#3786FF] text-xs my-8 px-8 py-4 text-white duration-300 hover:bg-[#002152] hover:font-bold hover:rounded-md">
              ABOUT US
            </button>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center text-center items-center p-5 bg-standard-bg-2 bg-cover min-h-fit">
        <div className="xl:w-1/2 flex flex-col justify-center items-center my-20">
          <div className="my-10">
            <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
              WATCH OUT
            </h5>
            <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
              GREAT LEADERS
            </h2>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-2 my-10">
            <div className="leaders-1 h-96 w-80 md:w-96 text-left px-12">
              <div className="h-56"></div>
              <h5 className="text-sm text-[#3786ff] my-2 tracking-wider">
                SECRETARY 2022
              </h5>
              <h2 className="text-4xl sm:text-5xl text-white font-bold my-2 tracking-wider">
                SOURAV PATI
              </h2>
            </div>
            <div>
              <div className="leaders-2 w-80 md:w-96 h-48"></div>
              <div className="leaders-2 w-80 md:w-96 h-48 my-2"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-center items-center p-5 bg-standard-bg bg-cover min-h-fit">
        <div className="xl:w-1/2 flex flex-col justify-center items-center my-20">
          <div className="my-10">
            <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
              CHECK ALL OF OUR
            </h5>
            <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
              EVENTS
            </h2>
          </div>
          <div className="grid grid-cols-1 my-10">
            <EventCard />
            <EventCard />
            <EventCard />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-center items-center p-5 bg-standard-bg bg-cover min-h-fit">
        <div className="xl:w-1/2 flex flex-col justify-center items-center my-20">
          <div className="my-10">
            <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
              CHECK OUT OUR
            </h5>
            <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
              PHOTO GALLERY
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
            <img src={gallery1} className="h-48 my-2" alt="Images" />
            <img src={gallery1} className="h-48 my-2" alt="Images" />
            <img src={gallery1} className="h-48 my-2" alt="Images" />
            <img src={gallery1} className="h-48 my-2" alt="Images" />
            <img src={gallery1} className="h-48 my-2" alt="Images" />
            <img src={gallery1} className="h-48 my-2" alt="Images" />
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center text-center items-center p-5 bg-[#0C0A0A] bg-cover min-h-fit">
        <div className="xl:w-2/3 flex flex-col justify-center items-center my-20">
          <div className="my-10">
            <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
              RECENT ARTCILES
            </h5>
            <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
              LATEST BLOGS
            </h2>
          </div>
          <div className="grid lg:grid-cols-3 gap-5 my-10">
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home