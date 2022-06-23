import React from "react";
import {
  // InnerContainer,
  FlexBoxCenter,
  StyledList,
  FlexBoxRow,
  HrStyle,
  SubHeader,
  ListItemsStyle,
  SupTitle,
} from "../../Global.style";
import {
  NavMainHeader,
  NavContainer,
  CategoriesSection,
} from "./CategoriesNav.style";

function CategoriesNav() {
  return (
    <>
      <NavContainer>
        <SupTitle>laptops</SupTitle>
        
      
        <FlexBoxCenter>
        <FlexBoxRow>
          <NavMainHeader fontSize="20px">featured categories</NavMainHeader>
          <CategoriesSection>
            <StyledList>
              <FlexBoxRow>
                <ListItemsStyle>
                  <SubHeader fontSize="14px">mobiles</SubHeader>
                </ListItemsStyle>
                <ListItemsStyle>
                  <SubHeader fontSize="14px">laptops</SubHeader>
                </ListItemsStyle>
                <ListItemsStyle>
                  <SubHeader fontSize="14px">play stations</SubHeader>
                </ListItemsStyle>
                <ListItemsStyle>
                  <SubHeader fontSize="14px">ipads</SubHeader>
                </ListItemsStyle>
                <ListItemsStyle>
                  <SubHeader fontSize="14px">screens</SubHeader>
                </ListItemsStyle>
                <ListItemsStyle>
                  <SubHeader fontSize="14px">air pods</SubHeader>
                </ListItemsStyle>
              </FlexBoxRow>
            </StyledList>
          </CategoriesSection>
          </FlexBoxRow>
          </FlexBoxCenter>
          
       
      </NavContainer>
      <HrStyle></HrStyle>
    </>
  );
}

export default CategoriesNav;
