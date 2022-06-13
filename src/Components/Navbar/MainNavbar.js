import React from "react";
import {
  MainContainer,
  InnerContainer,
  Button,
  FlexBox,
  List,
} from "../../Global.style";
import { BiSearch } from "react-icons/bi";
import { Paragraphe } from "./../../Global.style";
import { CenterSection,NavContainer ,FirstSection,SignButton} from "./MainNavbar.Style";
// import { CenterSection } from "./MainNavbar.Style";
import image from '../../images/Group 14849.png'

function MainNavbar() {
  return (
    <MainContainer>
      <InnerContainer>
       <NavContainer>
        <FirstSection>
        <Button background-color="#DCDCDC" border-radius="10px">
          English
        </Button>
        <div>
          <BiSearch />
        </div>
        </FirstSection>
        <CenterSection>
          <FlexBox>
            <List>
              <li>
                <Paragraphe font-size="20px">Home</Paragraphe>
              </li>
              <li>
                <Paragraphe font-size="20px">New arrival</Paragraphe>
              </li>
              <li>
                <Paragraphe font-size="20px">Mobiles</Paragraphe>
              </li>
              <li><img src={image} alt="logo"/></li>
              <li>
                <Paragraphe font-size="20px">Laptops</Paragraphe>
              </li>
              <li>
                <Paragraphe font-size="20px">Headphones</Paragraphe>
              </li>
              <li>
                <Paragraphe font-size="20px">Accessories</Paragraphe>
              </li>
            </List>
          </FlexBox>
        </CenterSection>
        <SignButton>
          <Paragraphe font-size="20px" color="#FFA500">
            Sign in
          </Paragraphe>
        </SignButton>
        </NavContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default MainNavbar;
