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
import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';
import { TrendingAction } from "../../redux/guest/guestActions";

function TrendingPage() {

  const dispatch= useDispatch();
  const storeData = useSelector(data=>data);
  const trendingData = [...storeData.guestReducer]

  React.useEffect(()=>{
    dispatch(TrendingAction());
  },[dispatch]);


  return (
    <FullContainer>
      <TrendingContainer>
        <InnerContainer>
          <SupTitle>top products</SupTitle>
          <Title>trending this week</Title>
          <CardsContainer>

            {trendingData.map((element) => (
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
