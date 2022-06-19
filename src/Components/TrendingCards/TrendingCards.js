import React from "react";
import { Paragraphe, FlexBoxCenter, FlexBoxAround } from "./../../Global.style";
import { TrendingCard, TrendingImg,PriceBG } from "./TrendingCards.style";

// import image from "../../images/Base.png";

function TrendingCards({name, price, image}) {
  return (
    <TrendingCard>
      <TrendingImg src={image}></TrendingImg>
     
      <FlexBoxAround>
      <FlexBoxCenter>
        <Paragraphe fontSize="14px" color="111111">
          {name}
        </Paragraphe>
       
         
    <PriceBG>
    <Paragraphe fontSize="12px" color="#FF4F04">
         {price}
        </Paragraphe>
    </PriceBG>
     
     
      </FlexBoxCenter>
      </FlexBoxAround>
      </TrendingCard>
  );
}

export default TrendingCards;
