import React from "react";
import { Paragraphe, FlexBox } from "./../../Global.style";
import { TrendingCard, TrendingImg } from "./TrendingCards.style";
import TrendingPage from "../../Pages/TrendingPage/TrendingPage";
// import image from "../../images/Base.png";

function TrendingCards({name, price, image}) {
  return (
    <TrendingCard>
      <TrendingImg src={image}></TrendingImg>
      <FlexBox>
        <Paragraphe fontSize="14px" color="111111">
          {name}
        </Paragraphe>
        <Paragraphe fontSize="12px" color="#FF4F04">
         {price}
        </Paragraphe>
      </FlexBox>
    </TrendingCard>
  );
}

export default TrendingCards;
