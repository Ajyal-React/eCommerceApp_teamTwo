import {
  FullContainer,
  SupTitle,
  Title,
} from "../../Global.style";

import {
  Header,
  HeaderLeft,
  HeaderRight,
  Products,
  CardsLeft,
  Slider,
  FeaturedCategoriesSection,
  Button,
} from "./index.style";
import CardFeaturedCategories from "../CardFeaturedCategories";
import TopSliderSection from "../TopSliderSection";
import { useEffect } from "react";
import { GetFC } from "../../redux/FeaturedCategories/FCAction";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const FeaturedCategories = (props) => {
  const [FeaturedCategories, setFeaturedCategories] = useState([]);

  const { data } = useSelector((state) => state.FCReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetFC());
    setFeaturedCategories(data);
  }, [data,dispatch]);

  return (
    <>
      <FullContainer>
        <FeaturedCategoriesSection>
          <Header>
            <HeaderLeft>
              <SupTitle>Laptops</SupTitle>
              <Title>Featured Categories</Title>
            </HeaderLeft>
            <HeaderRight></HeaderRight>
          </Header>

          <Products>
            <CardsLeft>
              {/*  <CardFeaturedCategories productName={FeaturedCategories[0].name} />  */}
              <CardFeaturedCategories  />
            </CardsLeft>

            <Slider>
              <TopSliderSection />
            </Slider>
          </Products>
          <Button>View More</Button>
        </FeaturedCategoriesSection>
      </FullContainer>
    </>
  );
};

export default FeaturedCategories;
