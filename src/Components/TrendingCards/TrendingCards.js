import React from "react";
import { Paragraphe,FlexBoxRow } from "./../../Global.style";
import { TrendingCard, TrendingImg,PriceBG ,ProductTitle} from "./TrendingCards.style";

// import image from "../../images/Base.png";

function TrendingCards({name, price, image}) {
  return (
    <TrendingCard>
      <TrendingImg src={image}></TrendingImg>
     
     
    <FlexBoxRow>
        <ProductTitle>
          {name}
        </ProductTitle>
       
         
    <PriceBG>
    <Paragraphe fontSize="12px" color="#FF4F04">
         {price}$
        </Paragraphe>
    </PriceBG>
    </FlexBoxRow>
     
     
    
      </TrendingCard>
  );
}

export default TrendingCards;
