import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainNavbar from '../../Components/Navbar/MainNavbar'
import { MainContainer } from '../../Global.style'

function HomePage() {
  return (
    <MainContainer>
      <MainNavbar/>
      <HeroSection/>
    </MainContainer>
  )
}

export default HomePage