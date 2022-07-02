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
  MainNavIcons,
  BsHeartIcon,
  AiOutlineUserIcon,
  RiShoppingBagFillIcon,
  CustomSign,
  MenuResponsive,
  LogoImg,
  CategoriesList
} from "./MainNavbar.Style";
import image from "../../images/Group 14849.png";
import { useSelector } from "react-redux";


function MainNavbar() {
  const dataStore = useSelector((store) => store);
  return (
    <NavBG>
      <InnerContainer>
        <FlexBoxCenter>
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
          <MenuResponsive/>
          
          <CenterSide>
          <FlexBoxCenter>
            <CategoriesList>
              <FlexBoxCenter>
                <ListItems>
                  <Paragraphe fontSize="16px" color="#32353C">
                    <CustomLink to="/profile">Home</CustomLink>
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
                </FlexBoxCenter>
            </CategoriesList>
                <LogoImg>
                  {" "}
                  <img src={image} alt="logo" />
                </LogoImg>
                <CategoriesList>
              <FlexBoxCenter>
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
            </CategoriesList>
            </FlexBoxCenter>
          </CenterSide>
          <ThirdSide>
            <FlexBoxCenter>
              {dataStore?.userReducer?.user?._id ? (
                <MainNavIcons>
                  <FlexBoxCenter>
                    <BsHeartIcon />
                    <AiOutlineUserIcon />
                    <Paragraphe marginRight="3vh">0.00$</Paragraphe>
                    <CustomLink to="/cart">
                      <RiShoppingBagFillIcon />
                    </CustomLink>
                  </FlexBoxCenter>
                </MainNavIcons>
              ) : (
                <CustomLink to="/signin">
                  <CustomSign>Sign in</CustomSign>
                </CustomLink>
              )}
            </FlexBoxCenter>
          </ThirdSide>
        </FlexBoxCenter>
      </InnerContainer>
    </NavBG>
  );
}

export default MainNavbar;
