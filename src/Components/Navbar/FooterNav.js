import React from 'react'
import { FlexBoxRow, HrStyle, FlexBox, FlexBoxCenter} from '../../Global.style'
import { FooterContainer ,FirstSide,LogoImg, FooterText, SecondSide, FooterTitle,FooterSubTitle, MenuContainer, LastSide, SocialIcons, SocialStyle, IconsSec} from './FooterNav.Style';
import LogoImage from '../../images/Group 14849.png'
import { ThirdSide } from './MainNavbar.Style';
import { BsFillTelephoneFill } from "react-icons/bs";
import {GrMail} from "react-icons/gr";
import {RiWhatsappFill} from "react-icons/ri";
import {SiFacebook}from "react-icons/si";
import { IconContext } from 'react-icons/lib';

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
        <FooterTitle>Home</FooterTitle>
        <FooterSubTitle>Featured Categories</FooterSubTitle>
        <FooterSubTitle>Featured Products</FooterSubTitle>
        <FooterSubTitle>Offers</FooterSubTitle>
        </MenuContainer>
    
         <MenuContainer>
        <FooterTitle>Menu</FooterTitle>
        <FooterSubTitle>Home</FooterSubTitle>
        <FooterSubTitle>New arrival</FooterSubTitle>
        <FooterSubTitle>Mobiles</FooterSubTitle>
        </MenuContainer>

        <MenuContainer>
        <FooterTitle>Menu</FooterTitle>
        <FooterSubTitle>Laptops</FooterSubTitle>
        <FooterSubTitle>Headphones</FooterSubTitle>
        <FooterSubTitle>Accessories</FooterSubTitle>
        </MenuContainer>

        </FlexBoxRow>
     </SecondSide>

     <ThirdSide>
     
        <FooterTitle>Contacts</FooterTitle>
        <FooterSubTitle>Fell free get in touch with us via phone or send us a message</FooterSubTitle>
        <IconContext.Provider
      value={{color:'#FA7400'}}>
      
      <IconsSec> <FlexBoxCenter> <FooterSubTitle><BsFillTelephoneFill/>+1 234 567 89 10</FooterSubTitle></FlexBoxCenter></IconsSec>
      <IconsSec> <FlexBoxCenter><FooterSubTitle><GrMail/>support@khoomi.com</FooterSubTitle></FlexBoxCenter></IconsSec></IconContext.Provider>
       
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