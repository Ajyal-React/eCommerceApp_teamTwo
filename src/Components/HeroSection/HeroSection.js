import React from "react";
import {
  MainHeader,
} from "../../Global.style";
import {
  ButtonHero,
  ContainerIcon,
  InnerContainerHero,
  MainHero,
  MdDoubleArrowIcon,
  RiArrowDownSLineIcon,
  TextCenter,
} from "./HeroSection.Style";

function HeroSection() {
  return (
    <MainHero>
      <InnerContainerHero>
        <MainHeader letterSpacing='.5px'>PLAYSTATION 5</MainHeader>
        <TextCenter fontSize="20px" color="#fff">
          lightning-fast download speed with super-fast ssd storage
        </TextCenter>
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
