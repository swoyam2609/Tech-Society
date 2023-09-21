import React,{ useEffect, useRef } from 'react';
import background from '../../assets/aboutMe/overlay.png';
import Typed from "typed.js";

const PhotoBanner = () => {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Coding Ninjas",
        "GDSC",
        "Geeks For Geeks",
        "InfoSec",
        "MetaVerse",
        "PSoc",
      ],
      typeSpeed: 120,
      backSpeed: 120
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="h-64 lg:h-96 relative">
      <div
        className="bg-black bg-opacity-50 h-full absolute inset-0 flex flex-col justify-center text-white"
        style={bannerStyle}
      >
        <div className="ml-5 lg:ml-60">
          <div className="text-2xl lg:text-4xl w-3/4  font-semibold text-left  max-w-2xl">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold">
              MEET OUR CHAPTERS,
            </p>
            <span ref={el} />
          </div>
          <a href="/contact">
            <button className="mt-8 w-32  bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 transition duration-300">
              See More
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PhotoBanner;
