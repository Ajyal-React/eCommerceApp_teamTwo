import React from "react";
import { MainHeader } from "../../Global.style";
import {
  ButtonHero,
  ContainerIcon,
  InnerContainerHero,
  MainHero,
  MdDoubleArrowIcon,
  RiArrowDownSLineIcon,
  TextCenter,
} from "./HeroSection.Style";

function HeroSection({offer}) {
  return (
    <MainHero image={offer?.imageBanner}>
      <InnerContainerHero>
        <MainHeader letterSpacing=".5px">{offer?.name}</MainHeader>
        <TextCenter fontSize="20px" color="#fff">
          {offer?.description}
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
