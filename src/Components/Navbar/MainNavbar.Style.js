import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import { Button, CustomLink, Paragraph } from "../../Global.style";
import { CgMenuLeft } from "react-icons/cg";

export const FirstSide = styled.div`
  margin: auto;
  @media (max-width: 991.98px) {
    display: none;
  }
`;
export const MenuResponsive = styled(CgMenuLeft)`
  display: none;
  @media (max-width: 991.98px) {
    display: block;
    height: 20px;
    width: 20px;
  }
`;
export const MenuButton = styled(Button)`
  display: none;
  @media (max-width: 991.98px) {
    display: block;
  }
`;

export const NavBG = styled.div`
  height: 100px;
  background: rgba(255, 255, 255, 0.79);
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
  width: 100%;
  z-index: 10000;
  display: flex;
  @media (max-width: 991.98px) {
    height: 75px;
  }
`;
export const CategoriesList = styled.ul`
  list-style: none;
  margin: 0;
  @media (max-width: 991.98px) {
    display: none;
  }
`;

export const CenterSide = styled.div`
  margin: auto;
`;

export const ListItems = styled.li`
  padding: 0 20px;

  @media (max-width: 1700px) {
    padding: 0 10px;
  }
  @media (max-width: 991.98px) {
    display: none;
    padding: 0;
  }
`;
export const LogoImg = styled.div`
  padding: 0 20px;
  @media (max-width: 991.98px) {
    padding: 0;
  }
  @media (max-width: 575.98px) {
    width: 100px;
  }
`;

export const ThirdSide = styled.div`
  margin: auto;
`;
export const MainNavIcons = styled.div``;
export const BsHeartIcon = styled(BsHeart)`
  color: #fa7400;
  margin-right: 1vh;
`;
export const AiOutlineUserIcon = styled(AiOutlineUser)`
  margin-right: 1vh;
`;
export const RiShoppingBagFillIcon = styled(RiShoppingBagFill)`
  /* margin-right: 3vh; */
  @media (max-width: 768.98px) {
    font-size: 12px;
  }
`;
export const CustomSign = styled(Button)`
  width: 90px;
  height: 40px;
  background: #fff;
  box-shadow: 0px 3px 6px #f9f8f88a;
  border-radius: 20px;
  color: #fa7400;
  &:hover {
    background: #fff;
    color: #fa7400;
  }
  @media (max-width: 991.98px) {
    background: none;
    width: 45px;
    height: 0;
    padding: 0;
  }
`;

export const GoToCart = styled(CustomLink)`
  background: #0000000f;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  @media (max-width: 768.98px) {
    width: 35px;
    height: 35px;
  }
`;

export const CartCount = styled(Paragraph)`
  
`