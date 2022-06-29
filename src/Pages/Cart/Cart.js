import React from "react";
import CartCard from "../../Components/Card/CartCard/CartCard";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import {
  CustomLink,
  InnerContainer,
  MainContainer,
  Paragraphe,
} from "../../Global.style";
import { LongArrowAltLeftIcon, MainDiv } from "./Cart.Style";

export default function Cart() {
  return (
    <MainContainer>
      <MainNavbar />
      <InnerContainer>
        <MainDiv>
          <CustomLink to="">
            <Paragraphe
              display={"flex"}
              alignItems={"center"}
              color="hsl(0deg 0% 43%)"
            >
              <LongArrowAltLeftIcon />
              Return to the product details
            </Paragraphe>
          </CustomLink>
        </MainDiv>
        <CartCard />
      </InnerContainer>
    </MainContainer>
  );
}
