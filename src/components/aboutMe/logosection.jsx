import React from 'react'
import codingNinja from '../../assets/aboutMe/tech-logos/codingNinja.png';
import gdsc from '../../assets/aboutMe/tech-logos/gdsc.png';
import gfg from '../../assets/aboutMe/tech-logos/gfg.png';
import psoc from '../../assets/aboutMe/tech-logos/psoc.png';
import infoSec from '../../assets/aboutMe/tech-logos/infoSec.png';
import metaverse from '../../assets/aboutMe/tech-logos/metaverse.png';

function LogoSection() {
  return (
    <div
    x-data="{}"
    x-init="$nextTick(() => {
        let ul = $refs.logos;
        ul.insertAdjacentHTML('afterend', ul.outerHTML);
        ul.nextSibling.setAttribute('aria-hidden', 'true');
    })"
    className="w-full mt-16 inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
>
    <ul x-ref="logos" className="   flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll">
        <li>
            <img src={codingNinja} className='h-20 w-32'    alt="Facebook" />
        </li>
        <li>
            <img src={gdsc} className='h-32 w-32' alt="Disney" />
        </li>
        <li>
            <img src={gfg} className='h-32 w-32' alt="Airbnb" />
        </li>
        <li>
            <img src={infoSec} className='h-32 w-32' alt="Apple" />
        </li>
        <li>
            <img src={metaverse} className='h-32 w-32' alt="Spark" />
        </li>
        <li>
            <img src={psoc} className='h-32 w-32' alt="Samsung" />
        </li>
       
    </ul>
    <ul class="flex items-center justify-center md:justify-start [&_li]:mx-8 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
         <li>
            <img src={codingNinja} className='h-20 w-32'   alt="Facebook" />
        </li>
        <li>
            <img src={gdsc} className='h-32 w-32' alt="Disney" />
        </li>
        <li>
            <img src={gfg} className='h-32 w-32' alt="Airbnb" />
        </li>
        <li>
            <img src={infoSec} className='h-32 w-32' alt="Apple" />
        </li>
        <li>
            <img src={metaverse} className='h-32 w-32'  alt="Spark" />
        </li>
        <li>
            <img src={psoc} className='h-32 w-32' alt="Samsung" />
        </li>
    </ul>                
</div>
  )
}

export default LogoSection;