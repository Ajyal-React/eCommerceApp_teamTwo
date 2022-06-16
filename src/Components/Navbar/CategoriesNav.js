import React from "react";
import { InnerContainer,Button,FlexBox,FlexBoxCenter,StyledList,FlexBoxRow, Paragraphe,HrStyle,SubHeader,MainHeader, ListItemsStyle} from "../../Global.style";
import {NavMainHeader,NavContainer, CategoriesSection} from "./CategoriesNav.style"

function CategoriesNav(){
return(
    <InnerContainer>
    <NavContainer>
    <SubHeader fontSize="10px">laptops</SubHeader>
   
        
        <FlexBoxCenter>
    <NavMainHeader fontSize="20px">featured categories</NavMainHeader>
    <CategoriesSection>
        <StyledList>
          
            <FlexBoxRow>
            <ListItemsStyle><SubHeader fontSize="14px">mobiles</SubHeader></ListItemsStyle>
            <ListItemsStyle><SubHeader fontSize="14px">laptops</SubHeader></ListItemsStyle>
            <ListItemsStyle><SubHeader fontSize="14px">play stations</SubHeader></ListItemsStyle>
            <ListItemsStyle><SubHeader fontSize="14px">ipads</SubHeader></ListItemsStyle>
            <ListItemsStyle><SubHeader fontSize="14px">screens</SubHeader></ListItemsStyle>
            <ListItemsStyle><SubHeader fontSize="14px">air pods</SubHeader></ListItemsStyle>
            </FlexBoxRow>
          
        </StyledList>
    </CategoriesSection>
    </FlexBoxCenter>
  
    
    </NavContainer>
    <HrStyle></HrStyle>
    </InnerContainer>
)
}

export default CategoriesNav;