import React from 'react'
import { FlexBoxRow, HrStyle, FlexBox, FlexBoxCenter, FlexBoxAround, FlexCol} from '../../Global.style'
import { FooterContainer ,FirstSide,LogoImg, FooterText, SecondSide, FooterTitle,FooterSubTitle, MenuContainer, 
   LastSide, SocialIcons, SocialStyle, IconsSec, BsFillTelephoneFillIcon, GrMailIcon,ContactContainer} from './FooterNav.Style';
import LogoImage from '../../images/Group 14849.png'
import { ThirdSide } from './MainNavbar.Style';

import {RiWhatsappFill} from "react-icons/ri";
import {SiFacebook}from "react-icons/si";
import { IconContext } from 'react-icons/lib';
import { Paragraphe } from './../../Global.style';

function FooterNav (){
    return(
     <FooterContainer>
        <FlexBoxRow>

     <FirstSide>
   
     <LogoImg src={LogoImage}></LogoImg>
    <FooterText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod t
        empor incididunt ut labore et dolore ma
        gna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</FooterText>
    
     </FirstSide>

     <SecondSide>
        <FlexBoxRow>
        <MenuContainer>
         <FlexCol>
        <FooterTitle>Home</FooterTitle>
        <FooterSubTitle>Featured Categories</FooterSubTitle>
        <FooterSubTitle>Featured Products</FooterSubTitle>
        <FooterSubTitle>Offers</FooterSubTitle>
        </FlexCol>
        </MenuContainer>
    
         <MenuContainer>
            <FlexCol>
        <FooterTitle>Menu</FooterTitle>
        <FooterSubTitle>Home</FooterSubTitle>
        <FooterSubTitle>New arrival</FooterSubTitle>
        <FooterSubTitle>Mobiles</FooterSubTitle>
        </FlexCol>
        </MenuContainer>

        <MenuContainer>
        <FlexCol>
        <FooterTitle>Menu</FooterTitle>
        <FooterSubTitle>Laptops</FooterSubTitle>
        <FooterSubTitle>Headphones</FooterSubTitle>
        <FooterSubTitle>Accessories</FooterSubTitle>
        </FlexCol>
        </MenuContainer>

        </FlexBoxRow>
     </SecondSide>

     <ThirdSide>
     <ContactContainer>
     <FlexCol>
        <FooterTitle>Contacts</FooterTitle>
        <FooterSubTitle>Fell free get in touch with us via phone or send us a message</FooterSubTitle>
      <IconsSec> <FlexBoxCenter><BsFillTelephoneFillIcon/> <FooterSubTitle>+1 234 567 89 10</FooterSubTitle></FlexBoxCenter></IconsSec>
      <IconsSec> <FlexBoxCenter><GrMailIcon/><FooterSubTitle>support@khoomi.com</FooterSubTitle></FlexBoxCenter></IconsSec>
      </FlexCol>
      </ContactContainer>
     </ThirdSide>

     </FlexBoxRow>
     <HrStyle></HrStyle>

     <LastSide>
        <FlexBox>
     
     <FooterSubTitle>all copyRights are reserved @2022</FooterSubTitle>

     <SocialIcons>
    <FlexBoxRow>
      <IconContext.Provider
      value={{color:'#FA7400'}}>
         <SocialStyle> <SiFacebook/></SocialStyle>
    <SocialStyle><RiWhatsappFill/></SocialStyle> 
      </IconContext.Provider>
    
     </FlexBoxRow>
     </SocialIcons>

     </FlexBox>
     </LastSide>
     </FooterContainer>
    )
}
export default FooterNav;