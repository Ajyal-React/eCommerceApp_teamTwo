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
import image from "../../images/Base.png";

function TrendingPage() {
  const [data, setdata] = React.useState([
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },{
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
  ]);
  return (
    <FullContainer>
      <TrendingContainer>
        <InnerContainer>
          <SupTitle>top products</SupTitle>
          <Title>trending this week</Title>
          <CardsContainer>

              {data.map((el) => (
            <CustomLink to="/product">
                <TrendingCards
                  image={el.img}
                  name={el.name}
                  price={el.price}
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
