import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainNavbar from '../../Components/Navbar/MainNavbar'
import { MainContainer, MainHeader, Button, Link} from '../../Global.style'
import {BackgroundImage,UpdateFlexBox, DivOpacity} from './HomePage.Style'
import DevicesDisplaySection from '../../Components/devicesDisplaySection/DevicesDisplaySection'

function HomePage() {
  return (
    <MainContainer>
      <MainNavbar/>
      <HeroSection/>
      <DevicesDisplaySection/>      
      <BackgroundImage>
        <DivOpacity></DivOpacity>
        <UpdateFlexBox>
          <MainHeader fontSize='20px' letterSpacing='0.2px' zIndex='99'>Get 50% Off</MainHeader>
          <Button
           backgroundColor='none' 
           borderR='5px' 
           border='1px solid'
            padding='10px 35px' 
            color='#ffff'
            zIndex='99'>
            <Link href='#'>Start Shopping</Link>
            </Button>
        </UpdateFlexBox>
      </BackgroundImage>
    </MainContainer>
  )
}

export default HomePage