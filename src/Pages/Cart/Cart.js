import React from "react";
import CartCard from "../../Components/Card/CartCard/CartCard";
import MainNavbar from "../../Components/Navbar/MainNavbar";
import {
  CustomLink,
  InnerContainer,
  MainContainer,
  Paragraph,
} from "../../Global.style";
import {
  LongArrowAltLeftIcon,
  MainDiv,
  ContainerCards,
  GoToPayment,
  ContainerBtn
} from "./Cart.Style";
export default function Cart() {
  return (
    <MainContainer>
      <MainNavbar />
      <InnerContainer>
        <MainDiv>
          <CustomLink to="">
            <Paragraph>
              <LongArrowAltLeftIcon />
              Return to the product details
            </Paragraph>
          </CustomLink>
        </MainDiv>
        <ContainerCards>
          <CartCard />
        </ContainerCards>
        <ContainerBtn>
          <GoToPayment
            width="auto"
            margin="2rem 0"
            padding="1rem 3rem"
            to="/payment"
          >
            Go To Payment
          </GoToPayment>
        </ContainerBtn>
      </InnerContainer>
    </MainContainer>
  );
}
