import React from "react";
import { Paragraphe, FlexBox } from "./../../Global.style";
import { TrendingCard, TrendingImg } from "./TrendingCards.style";
import image from "../../images/Base.png";

function TrendingCards() {
  return (
    <TrendingCard>
      <TrendingImg src={image}></TrendingImg>
      <FlexBox>
        <Paragraphe fontSize="14px" color="111111">
          Nike Court Air
        </Paragraphe>
        <Paragraphe fontSize="12px" color="#FF4F04">
          $58
        </Paragraphe>
      </FlexBox>
    </TrendingCard>
  );
}

export default TrendingCards;
