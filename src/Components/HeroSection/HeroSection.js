import React from "react";
import {
  MainHeader,
  Paragraphe,
} from "../../Global.style";
import {
  ButtonHero,
  ContainerIcon,
  InnerContainerHero,
  MainHero,
  MdDoubleArrowIcon,
  RiArrowDownSLineIcon,
} from "./HeroSection.Style";

function HeroSection() {
  return (
    <MainHero>
      <InnerContainerHero>
        <MainHeader letterSpacing='.5px'>PLAYSTATION 5</MainHeader>
        <Paragraphe fontSize="20px" color="#fff">
          lightning-fast download speed with super-fast ssd storage
        </Paragraphe>
        <ButtonHero>
          Start Shopping <MdDoubleArrowIcon />
        </ButtonHero>
        <ContainerIcon>
          <RiArrowDownSLineIcon />
        </ContainerIcon>
      </InnerContainerHero>
    </MainHero>
  );
}

export default HeroSection;
