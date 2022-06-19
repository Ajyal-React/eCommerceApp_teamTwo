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
import LapImage from "../../images/maxim-hopman-Hin-rzhOdWs-unsplash-removebg-preview.png";
import BagImage from "../../images/BackBag.png";
import GameImage from "../../images/2010.i211.006_gamepad_controller_videogames_composition_realistic_3-01-removebg-preview.png";

function TrendingPage() {
  const [data, setdata] = React.useState([
    {
      img: LapImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: BagImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: GameImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: LapImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: BagImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: GameImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: image,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: LapImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: BagImage,
      name: "Nike Court Air",
      price: "$58",
    },
    {
      img: GameImage,
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
