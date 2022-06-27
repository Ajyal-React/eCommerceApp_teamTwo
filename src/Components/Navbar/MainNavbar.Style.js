import styled from "styled-components";
import { BsHeart } from "react-icons/bs";
import { AiOutlineUser } from "react-icons/ai";
import { RiShoppingBagFill } from "react-icons/ri";
import { Button } from "../../Global.style";

export const FirstSide = styled.div`
  margin: auto;
`;

export const NavBG = styled.div`
  height: 100px;
  background: rgba(255, 255, 255, 0.79);
  box-shadow: 0px 3px 6px #00000029;
  position: fixed;
  width: 100%;
  z-index: 10000;
  display: flex;
`;

export const CenterSide = styled.div`
  margin: auto;
`;

export const ListItems = styled.li`
  padding: 0 20px;
`;

export const ThirdSide = styled.div`
  margin: auto;
`;
export const MainNavIcons = styled.div``;
export const BsHeartIcon = styled(BsHeart)`
  color: #fa7400;
  margin-right: 3vh;
`;
export const AiOutlineUserIcon = styled(AiOutlineUser)`
  margin-right: 1vh;
`;
export const RiShoppingBagFillIcon = styled(RiShoppingBagFill)`
  margin-right: 3vh;
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
`;
