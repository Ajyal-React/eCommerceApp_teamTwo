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
// import axios from 'axios';

import { useDispatch } from "react-redux";
import {useSelector} from 'react-redux';
import { TrendingAction } from "../../redux/guest/guestActions";
function TrendingPage() {
  const trendingData = useSelector(data=>data);
  const dispatch= useDispatch();
  console.log(trendingData);
  const [data, setData] = React.useState([]);
  React.useEffect(()=>{
    dispatch(TrendingAction)
  //   const fetchApi= async()=>{
  //   const res=  await axios.get('https://omar-tech-store.herokuapp.com/api/products/trending-products');
  //     // console.log(res.data);
  //     setData(res.data)
  //  }
  //  fetchApi();
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
