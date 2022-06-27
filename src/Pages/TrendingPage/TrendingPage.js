import React from "react";
import {
  FullContainer,
  InnerContainer,
  SupTitle,
  Title,
} from "../../Global.style";
import TrendingCards from "../../Components/TrendingCards/TrendingCards";
import { CardsContainer, CustomLinkTrend, TrendingContainer } from "./TrendingPage.style";

function TrendingPage({trending}) {
  return (
    <FullContainer>
      <TrendingContainer>
        <InnerContainer>
          <SupTitle>top products</SupTitle>
          <Title>trending this week</Title>
          <CardsContainer>
            {trending?.map((element) => (
              <CustomLinkTrend to="/product">
                  <TrendingCards
                    image={element.images}
                    name={element.name}
                    price={element.price}
                  ></TrendingCards>
              </CustomLinkTrend>
            ))}
          </CardsContainer>
        </InnerContainer>
      </TrendingContainer>
    </FullContainer>
  );
}

export default TrendingPage;
