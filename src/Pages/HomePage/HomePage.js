import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import { MainContainer } from '../../Global.style'
import createMainNav from '../../Components/Navbar/Navbar'

function HomePage() {
  return (
    <MainContainer>
      <createMainNav/>
      <HeroSection/>
    </MainContainer>
  )
}

export default HomePage