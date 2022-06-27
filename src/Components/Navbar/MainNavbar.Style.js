import styled from "styled-components";
import{BsHeart}from"react-icons/bs";
import {AiOutlineUser}from"react-icons/ai";
import {RiShoppingBagFill}from"react-icons/ri";
 
export const FirstSide = styled.div`
margin:auto;

`



export const NavBG = styled.div`
height: 80px;
background: #FFFFFF;
box-shadow: 0px 3px 6px #00000029;
opacity: 0.79;
position: fixed;
width: 100%;
z-index: 10000;

`

export const CenterSide= styled.div`
margin: auto;

`;

export const ListItems= styled.li`
padding: 0 2.5vh;
`;

export const ThirdSide = styled.div`
margin:auto;
`
export const MainNavIcons = styled.div`

`
export const BsHeartIcon = styled(BsHeart)`
color: #fa7400;
margin-right:3vh;
`
export const AiOutlineUserIcon = styled(AiOutlineUser)`

margin-right:1vh;
`
export const RiShoppingBagFillIcon = styled(RiShoppingBagFill)`

margin-right:3vh;
`