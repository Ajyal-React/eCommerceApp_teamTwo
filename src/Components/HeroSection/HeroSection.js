import React from "react";
import {
  Button,
  MainHeader,
  Paragraphe,
} from "../../Global.style";
import {
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
        <MainHeader>PLAYSTATION 5</MainHeader>
        <Paragraphe fontSize="20px" color="#fff">
          lightning-fast download speed with super-fast ssd storage
        </Paragraphe>
        <Button
          backgroundColor="#fff"
          borderR="9px"
          style={{ marginTop: "100px" }}
        >
          Start Shopping <MdDoubleArrowIcon />
        </Button>
        <ContainerIcon>
          <RiArrowDownSLineIcon />
        </ContainerIcon>
      </InnerContainerHero>
    </MainHero>
  );
}

export default HeroSection;
