import React from "react";
import {
  CustomLink,
  FullContainer,
  InnerContainer,
  SupTitle,
  Title,
} from "../../Global.style";
import TrendingCards from "../../Components/TrendingCards/TrendingCards";
import { CardsContainer, TrendingContainer } from "./TrendingPage.style";

function TrendingPage({trending}) {
  return (
    <FullContainer>
      <TrendingContainer>
        <InnerContainer>
          <SupTitle>top products</SupTitle>
          <Title>trending this week</Title>
          <CardsContainer>
            {trending?.map((element) => (
              <CustomLink to="/product">
                  <TrendingCards
                    image={element.images}
                    name={element.name}
                    price={element.price}
                  ></TrendingCards>
              </CustomLink>
            ))}
          </CardsContainer>
        </InnerContainer>
      </TrendingContainer>
    </FullContainer>
  );
}

export default TrendingPage;
