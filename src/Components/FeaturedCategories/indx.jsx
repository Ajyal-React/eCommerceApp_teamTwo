import {
  FullContainer,
  InnerContainer,
  SupTitle,
  Title,
} from "../../Global.style";

import { Link } from "react-router-dom";

import {
  Header,
  HeaderLeft,
  HeaderRight,
  Products,
  Tabs,
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

  const { data, isLoading, isSuccess } = useSelector(
    (state) => state.FCReducer
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetFC(data));
    setFeaturedCategories(data);
  }, [data, isLoading, isSuccess]);

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
             
             {/*  {
               FeaturedCategories.map((el) => { */}
                 <CardFeaturedCategories /* productName={FeaturedCategories.name}  */ />
                 <CardFeaturedCategories /* productName={FeaturedCategories.name} */ />
                 <CardFeaturedCategories /* productName={FeaturedCategories._id.name} */ />
                 <CardFeaturedCategories /* productName={FeaturedCategories._id.name} */ />
              {/*  })
              } */}
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