import React from 'react'
import { Button, InnerContainer, MainHeader, Paragraphe } from '../../Global.style'
import { MainHero } from './HeroSection.Style'

function HeroSection() {
  return (
    <MainHero>
      <InnerContainer>
        <MainHeader letterSpacing='-2.53px'>PLAYSTATION 5</MainHeader>
        <Paragraphe fontSize='20px' color='#fff'>lightning-fast download speed with super-fast ssd storage</Paragraphe>
        <Button>Start Shopping</Button>
      </InnerContainer>
    </MainHero>
  )
}

export default HeroSection