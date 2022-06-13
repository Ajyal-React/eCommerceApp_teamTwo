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
import { CenterSection,navContainer ,firstSection,signButton} from "./MainNavbar.Style";
// import { CenterSection } from "./MainNavbar.Style";
import image from '../../images/Group 14849.png'

function MainNavbar() {
  return (
    <MainContainer>
      <InnerContainer>
       <navContainer>
        <firstSection>
        <Button background-color="#DCDCDC" border-radius="10px">
          English
        </Button>
        <div>
          <BiSearch />
        </div>
        </firstSection>
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
        <signButton background-color="	#D3D3D3" border-radius="40px">
          <Paragraphe font-size="20px" color="#FFA500">
            Sign in
          </Paragraphe>
        </signButton>
        </navContainer>
      </InnerContainer>
    </MainContainer>
  );
}

export default MainNavbar;
