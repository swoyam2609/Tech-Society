
import image1 from '../../assets/aboutMe/image1.png';
import image3 from '../../assets/aboutMe/image2.png';
import image2 from '../../assets/aboutMe/image3.png';
const Landing2 = () => {
  return (
    <div className=' text-white p-4' style={{background:"#0C0A0A"}} >
    
  
    <div className="flex flex-wrap justify-center pt-20">
    
      {/* Three images */}

      <div className="p-4">
        <img
          src={image1}
          alt="1"
          className="h-50 object-cover"
        />
      </div>
      <div className=" p-4">
        <img
          src={image2}
          alt="2"
          className=" object-cover"
        />
      </div>
      <div className=" p-4">
        <img
          src={image3}
          alt="3"
          className="object-cover"
        />
      </div>
</div>
<div className="flex flex-wrap justify-center">
      {/* Two paragraphs */}
      <div className="w-[420px] p-4">
        <p className="text-white font-roboto text-4xl font-bold leading-tight tracking-wide uppercase">A Clan That Slays
Together Stays
Together</p>
      </div>
      <div className="w-full lg:w-1/2 p-4 ">
        <p className="text-s">Tincidunt elit magnis nulla facilisis sagittis is maecenas.
Sapien nunced amet ultrices, dolores sit lorem ipsum is
simply free text available in the market velit purus aliquet
massa fringilla leo orci.Tincidunt elit magnis nulla facilisis sagittis is maecenas.
Sapien nunced amet ultrices, dolores sit lorem ipsum is
simply free text available in the market velit purus aliquet
massa fringilla leo orci.</p>
      </div>
    </div>
    </div>
  );
};

export default Landing2;
