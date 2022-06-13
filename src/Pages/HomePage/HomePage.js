import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainNavbar from '../../Components/Navbar/MainNavbar'
import { MainContainer } from '../../Global.style'
import DevicesDisplaySection from '../../Components/devicesDisplaySection/DevicesDisplaySection'

function HomePage() {
  return (
    <MainContainer>
      <MainNavbar/>
      <HeroSection/>
      <DevicesDisplaySection/>
    </MainContainer>
  )
}

export default HomePage