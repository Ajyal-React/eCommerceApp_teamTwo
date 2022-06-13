import styled from "styled-components";
import image from "../../images/hero.png";
import { MdDoubleArrow } from "react-icons/md";
import { RiArrowDownSLine } from "react-icons/ri";
import { InnerContainer } from "../../Global.style";


export const MainHero = styled.div`
  display: flex;
  align-items: center;
  background-image: url(${image});
  height: 1088px;
  background-repeat: no-repeat;
  width: 100%;
  @media (max-width: 1600px) {
    height: 900px;
  }
  @media (max-width: 1199.98px) {
    height: 700px;
    background-size: cover;
  }
`;
export const InnerContainerHero = styled(InnerContainer)`
  margin-bottom: 80px;
  @media (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;
export const MdDoubleArrowIcon = styled(MdDoubleArrow)`
  margin-left: 10px;
`;
export const RiArrowDownSLineIcon = styled(RiArrowDownSLine)`
  background: #fff;
  cursor: pointer;
  width: 35px;
  height: 35px;
  padding: 0.5rem;
  border-radius: 50%;
  color: #fa7400;
`;

export const ContainerIcon = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 180px;
  @media (max-width: 1199.98px) {
    margin-top: 100px;
  }
`;
