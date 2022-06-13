import React from 'react'
import HeroSection from '../../Components/HeroSection/HeroSection'
import MainNavbar from '../../Components/Navbar/MainNavbar'
import { MainContainer, MainHeader, Button} from '../../Global.style'
import {BackgroundImage,UpdateFlexBox} from './HomePage.Style'

function HomePage() {
  return (
    <MainContainer>
      <MainNavbar/>
      <HeroSection/>

      
      <BackgroundImage>
        <UpdateFlexBox>
          <MainHeader fontSize='20px'>get 50% off</MainHeader>
          <Button
           backgroundColor='none' borderR='5px' border='1px solid' padding='10px 20px' color='#ffff'>
            start Shopping</Button>
        </UpdateFlexBox>
      </BackgroundImage>

    </MainContainer>
  )
}

export default HomePage