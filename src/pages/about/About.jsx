import React from 'react'
import Landing from '../../components/aboutMe/landing';
import Landing2 from '../../components/aboutMe/landing2';
import LogoSection from '../../components/aboutMe/logosection';
import PhotoBanner from '../../components/aboutMe/photoBanner';
import Leads from '../../components/aboutMe/leads';
function About() {
  return (
    <div className='overflow-hidden'>
      <Landing />
      <Landing2 />
      <PhotoBanner/>
      <LogoSection/>
      <Leads/>
    </div>
  )
}

export default About