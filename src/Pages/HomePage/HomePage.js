import React, { useEffect } from "react";
import HeroSection from "../../Components/HeroSection/HeroSection";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import { MainContainer, Button, LinkBTN } from "../../Global.style";
import {
  BackgroundImage,
  UpdateFlexBox,
  DivOpacity,
  MainHeaderUpdate,
} from "./HomePage.Style";
import DevicesDisplaySection from "../../Components/devicesDisplaySection/DevicesDisplaySection";
import SlickSlider from "../../Components/Slider/SlickSlider";
import TrendingPage from "../TrendingPage/TrendingPage";
import FooterPage from "../FooterPage/FooterPage";
import {
  getFeaturedProductsAction,
  TrendingAction,
} from "../../redux/guest/guestActions";
import { useDispatch, useSelector } from "react-redux";

function HomePage() {
  const dataStore = useSelector((store) => store);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFeaturedProductsAction());
    dispatch(TrendingAction());
  }, [dispatch]);

  return (
    <MainContainer>
      <MainNavbar />
      <HeroSection />
      <DevicesDisplaySection />
      <BackgroundImage>
        <DivOpacity></DivOpacity>
        <UpdateFlexBox>
          <MainHeaderUpdate
            textTransform="uppercase"
            fontSize="20px"
            letterSpacing="0.2px"
            zIndex="99"
          >
            Get 50% Off
          </MainHeaderUpdate>
          <Button
            backgroundColor="none"
            borderR="5px"
            border="1px solid #fff"
            padding="10px 35px"
            color="#ffff"
            zIndex="99"
          >
            <LinkBTN href="#">Start Shopping</LinkBTN>
          </Button>
        </UpdateFlexBox>
      </BackgroundImage>
      <SlickSlider products={dataStore?.guestReducer?.featuredProducts} />
      <TrendingPage trending={dataStore?.guestReducer?.trending} />
      <FooterPage />
    </MainContainer>
  );
}

export default HomePage;
