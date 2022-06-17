import React from "react";
import {
  FullContainer,
  InnerContainer,
  SupTitle,
  Title,
} from "../../Global.style";
import TrendingCards from "../../Components/TrendingCards/TrendingCards";
import {
  CardsContainer,
  TrendingContainer,
} from "./TrendingPage.style";

function TrendingPage() {
  return (
    <FullContainer>
      <TrendingContainer>
        <InnerContainer>
          <SupTitle>top products</SupTitle>
          <Title>trending this week</Title>
          <CardsContainer>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
            <TrendingCards></TrendingCards>
          </CardsContainer>
        </InnerContainer>
      </TrendingContainer>
    </FullContainer>
  );
}

export default TrendingPage;
