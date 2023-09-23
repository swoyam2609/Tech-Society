import React from 'react'
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css/bundle'
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import leaders from '../../assets/home/leaders1.jpeg';
import cimg1 from "../../assets/home/home-carousel/carousel1.png";
import cimg2 from "../../assets/home/home-carousel/carousel3.jpg";
import cimg3 from "../../assets/home/home-carousel/DSCN6814.JPG";
import img1 from "../../assets/home/img1.jpeg";
import img2 from "../../assets/home/img2.jpg";
import img3 from "../../assets/home/img3.JPG";
import gallery1 from "../../assets/home/gallery/gallery1.jpeg";
import gallery2 from "../../assets/home/gallery/DSCN6759.JPG";
import gallery3 from "../../assets/home/gallery/DSCN6762.JPG";
import gallery4 from "../../assets/home/gallery/DSCN6785.JPG";
import gallery5 from "../../assets/home/gallery/DSCN6786.JPG";
import gallery6 from "../../assets/home/gallery/DSCN7045.JPG";
import Event from '../../components/home/EventCard';
import EventPic1 from '../../../src/assets/home/event1.jpeg'
import EventPic2 from '../../../src/assets/home/event2.png'
import EventPic3 from '../../../src/assets/home/DSCN6775.JPG'
import EventPic4 from '../../../src/assets/home/DSCN6779.JPG'
// import BlogCard from '../../components/home/BlogCard'
const events = [
  {
    title: 'WATCH STREAM',
    subject: 'HACKATHON',
    time: '3rd MARCH 2023, 11:00 AM',
    imageUrl:EventPic1
    },
  {
    title: 'GAME RESULTS',
    subject: 'CYBER HUNT',
    time: '3rd MARCH 2023, 2:00 PM',
    imageUrl:EventPic2,
  },
  {
    title: 'WATCH STREAM',
    subject: 'SWING N  CODE',
    time: '2nd MARCH 2023, 3:00 PM',
    imageUrl:EventPic3,
  },
  {
    title: 'GAME RESULTS',
    subject: 'SWITCH CODING',
    time: '4th MARCH 2023, 6:00 PM',
    imageUrl:EventPic4,
  },
]

function Home() {
  return (
    <div className="min-h-full w-full z-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        navigation
        pagination={{ clickable: true }}
        className="h-min"
      >
        <SwiperSlide>
          <img
            src={cimg1}
            className="object-cover w-full h-"
            alt="carousel-img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cimg2} className="object-cover w-full" alt="carousel-img" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={cimg3} className="object-cover w-full" alt="carousel-img" />
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
            <img
              src={img1}
              className="w-72 my-5 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={img2}
              className="w-72 my-5 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={img3}
              className="w-72 my-5 hover:scale-105 duration-300"
              alt="Images"
            />
          </div>
          <p className="text-[#848484] leading-loose">
            A coding environment is a vital tool for developers, providing a
            digital workspace where they write, test, and debug their code. It
            typically includes a code editor with features like syntax
            highlighting and autocompletion, a terminal for executing commands,
            and access to libraries and frameworks. These environments can vary
            from local setups on a developer's machine to cloud-based platforms
            that offer collaboration and scalability. Choosing the right coding
            environment is crucial for productivity and efficient
            software development.
          </p>
          <a href="/about">
            <button className="bg-[#3786FF] text-xs my-8 px-8 py-4 text-white duration-300 hover:scale-110">
              ABOUT US
            </button>
          </a>
        </div>
      </div>
      <div className="w-full flex justify-center text-center items-center p-5 relative">
  <div
    className="absolute inset-0 bg-no-repeat bg-center bg-contain"
    style={{
      backgroundImage: {leaders},
    }}
  ></div>
        <div className="xl:w-1/2 flex flex-col justify-center items-center my-20">
          <div className="my-10">
            <h5 className="text-sm m-auto text-[#3786ff] my-2 tracking-wider">
              WATCH OUT
            </h5>
            <h2 className="text-4xl sm:text-5xl m-auto text-white font-bold my-2 tracking-wider">
              GREAT LEADERS
            </h2>
          </div>
          <div className="flex flex-wrap xl:flex-nowrap justify-center items-center gap-2 my-10 hover:scale-105 duration-300">
            <div className="bg-leaders-bg h-96 w-auto text-left px-12">
              <div className="h-56"></div>
              <h5 className="text-sm text-[#64d6ff] my-2 font-bold tracking-wider">
                SECRETARY 2022
              </h5>
              <a href="https://www.linkedin.com/in/shubhasai-mohapatra/">
                <h2 className="text-4xl sm:text-5xl text-white font-bold my-2 tracking-wider">
                  SHUBHASAI MOHAPATRA
                </h2>
              </a>
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
          <div className="container mx-auto">
            <h1 className="text-3xl font-semibold my-4">All Events</h1>
            <div className="container mx-auto">
              {events.map((event, index) => (
                <Event key={index} {...event} isGray={index % 2 === 1} />
              ))}
            </div>
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
            <img
              src={gallery1}
              className="h-48 my-2 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={gallery2}
              className="h-48 my-2 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={gallery3}
              className="h-48 my-2 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={gallery4}
              className="h-48 my-2 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={gallery5}
              className="h-48 my-2 hover:scale-105 duration-300"
              alt="Images"
            />
            <img
              src={gallery6}
              className="h-48 my-2 hover:scale-105 duration-300"
              alt="Images"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home
