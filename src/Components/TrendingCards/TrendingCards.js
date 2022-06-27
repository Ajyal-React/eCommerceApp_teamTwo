import React from "react";
import { FlexBoxRow, Image, Price } from "./../../Global.style";
import {
  TrendingCard,
  TrendingImg,
  ProductTitle,
} from "./TrendingCards.style";

// import image from "../../images/Base.png";

function TrendingCards({ name, price, image }) {
  return (
    <TrendingCard>
      <TrendingImg>
        <Image src={image} width="100%" height="100%" />
      </TrendingImg>
      <FlexBoxRow padding={'.5rem 0'} alignItems="center">
        <ProductTitle>{name}</ProductTitle>
        <Price>
            {price}$
        </Price>
      </FlexBoxRow>
    </TrendingCard>
  );
}

export default TrendingCards;
