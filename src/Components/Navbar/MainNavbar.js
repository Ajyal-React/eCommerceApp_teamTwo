import React from "react";
import { BiSearch } from "react-icons/bi";
import {
  InnerContainer,
  Button,
  FlexBoxCenter,
  StyledList,
  FlexBoxRow,
  Paragraphe,
  CustomLink,
} from "../../Global.style";
import {
  FirstSide,
  NavBG,
  CenterSide,
  ThirdSide,
  ListItems,
} from "./MainNavbar.Style";
import image from "../../images/Group 14849.png";

function MainNavbar() {
  return (
    <NavBG>
      <InnerContainer>
        <FlexBoxRow>
          <FirstSide>
            <FlexBoxCenter>
              <Button
               backgroundColor="#7B77770F"
                borderR="3px"
                border="none"
                buttonWidth="110px"
                buttonHeight="33px"
                fontSize="16px"
                color="#32353C"
               margin="0 3.5vh 0 0"
              >
                English
              </Button>
              <BiSearch />
            </FlexBoxCenter>
          </FirstSide>

          <CenterSide>
            <StyledList>
              <FlexBoxCenter>
                  <ListItems>
                    <Paragraphe fontSize="16px" color="#32353C">
                      Home
                    </Paragraphe>
                  </ListItems>
                  <ListItems>
                    <Paragraphe fontSize="16px" color="#32353C">
                      New arrival
                    </Paragraphe>
                  </ListItems>
                  <ListItems>
                    <Paragraphe fontSize="16px" color="#32353C">
                      Mobiles
                    </Paragraphe>
                  </ListItems>
                  <ListItems>
                    {" "}
                    <img src={image} alt="logo" />
                  </ListItems>
                  <ListItems>
                    <Paragraphe fontSize="16px" color="#32353C">
                      Laptops
                    </Paragraphe>
                  </ListItems>
                  <ListItems>
                    <Paragraphe fontSize="16px" color="#32353C">
                      HeadPhones
                    </Paragraphe>
                  </ListItems>
                  <ListItems>
                    <Paragraphe fontSize="16px" color="#32353C">
                      Mobiles
                    </Paragraphe>
                  </ListItems>
              </FlexBoxCenter>
            </StyledList>
          </CenterSide>

          <ThirdSide>
            <FlexBoxCenter>
              <CustomLink to='/signin'>
                <Button
                  backgroundColor="#FFFFFF"
                  borderR="10px"
                  border="none"
                  buttonWidth="60px"
                  buttonHeight="25px"
                  fontSize="12px"
                  color="#FA7400"
                >
                  Sign in
                </Button>
              </CustomLink>
            </FlexBoxCenter>
          </ThirdSide>
        </FlexBoxRow>
      </InnerContainer>
    </NavBG>
  );
}

export default MainNavbar;
