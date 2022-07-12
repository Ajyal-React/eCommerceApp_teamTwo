import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import {
  InnerContainer,
  Button,
  FlexBoxCenter,
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
  CategoriesList,
  MenuButton,
  GoToCart,
} from "./MainNavbar.Style";
import image from "../../images/Group 14849.png";
import { useSelector } from "react-redux";
import RightNav from "./RightNav";

function MainNavbar() {
  const dataStore = useSelector((store) => store);
  const [isShown, setIsShown] = useState(false);
  const handleClick = () => {
    setIsShown(true);
  };
  const totalPrice = JSON.parse(localStorage.getItem("cart"))?.totalPrice;
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

          <MenuButton onClick={handleClick}>
            <MenuResponsive />
          </MenuButton>
          {isShown && <RightNav />}

          <CenterSide>
          <FlexBoxCenter>
            <CategoriesList>
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
                    <CustomLink to='/profile'><AiOutlineUserIcon /></CustomLink>
                    {totalPrice > 0 ? (
                      <Paragraphe marginRight="3vh">{totalPrice}$</Paragraphe>
                    ) : null}
                    <GoToCart to="/cart">
                      <RiShoppingBagFillIcon />
                    </GoToCart>
                  </FlexBoxCenter>
                </MainNavIcons>
              ) : (
                <CustomLink to="/login">
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
