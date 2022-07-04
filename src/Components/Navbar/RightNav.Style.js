import styled from "styled-components";
import {BiUserCircle}from"react-icons/bi"

export const RightNavContainer = styled.div`
display: none;
  @media (max-width: 376px) {
    display:block;
    max-width:300px;
    height:812px;
   background-color:	#FFFFFF;
   position: fixed;
   zIndex: 1;
   top: 0;
   right: 0;
   bottom: 0;
   left: 0;
  padding:4rem 2rem;
  }
`

export const UserSec = styled.div`
display: none;
  @media (max-width: 376px) {
    display:block;
    height:80px;
    max-width:200px;
   margin-bottom:4vh;
  }
`
export const UserImage = styled.img`
display: none;
  @media (max-width: 376px) {
    display:block;
    height:75px;
    width:75px;
  }
`
export const UserData = styled.div`
display: none;
  @media (max-width: 376px) {
    display:block;
    height:75px;
  }
`
export const UserText = styled.p`
display: none;
  @media (max-width: 376px) {
    display:flex;
    font-size:1rem;
    color: #fa7400;
    
    
  }
`
export const RightNavList = styled.ul`
display: none;
  @media (max-width: 376px) {
    display:flex;
    list-style: none;
    width:225px;
  }
`

export const RightNavListItems = styled.li`
display: none;
  @media (max-width: 376px) {
    display:flex;
  }
`
export const FirstPart = styled.div`
display: none;
  @media (max-width: 376px) {
    display:flex;
  }
`
