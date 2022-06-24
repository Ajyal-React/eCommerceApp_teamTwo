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
import axios from 'axios';
function TrendingPage() {
  const [data, setData] = React.useState([]);
  React.useEffect(()=>{
    const fetchApi= async()=>{
    const res=  await axios.get('https://omar-tech-store.herokuapp.com/api/products/trending-products');
      setData(res.data)
   }
   fetchApi();
  },[]);
  return (
    <FullContainer>
      <TrendingContainer>
        <InnerContainer>
          <SupTitle>top products</SupTitle>
          <Title>trending this week</Title>
          <CardsContainer>

            {data.map((element) => (
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
