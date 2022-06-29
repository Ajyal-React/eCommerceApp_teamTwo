import styled, { css } from "styled-components";
import { FlexBox } from "../../../Global.style";
import { ImMinus } from "react-icons/im";
import { ImPlus } from "react-icons/im";
import { RiCloseCircleFill } from "react-icons/ri";

export const ContainerCartCard = styled(FlexBox)`
  height: 147px;
  border: 1px solid #707070;
  padding: 0 2rem 0 1rem;
  @media (max-width: 767.98px) {
    height: 120px;
  }
  @media (max-width: 575.98px) {
    height: 90px;
    padding: 0 0 0 1rem;
  }
`;

export const LeftBox = styled(FlexBox)`
  width: 50%;
  height: 100%;
  align-items: center;
  @media (max-width: 1199.98px) {
    width: 60%;
  }
  @media (max-width: 991.98px) {
    width: 75%;
  }
  
`;

export const RightBox = styled(FlexBox)`
  width: 10%;
  align-items: center;
  @media (max-width: 1199.98px) {
    width: 12%;
  }
  @media (max-width: 991.98px) {
    width: 14%;
  }
  @media (max-width: 767.98px) {
    width: 16%;
  }
  @media (max-width: 575.98px) {
    flex-direction: column;
  }
`;

export const ContainerImage = styled.div`
  height: 80%;
  width: 174px;
  background: #e3e3e3;
`;

export const InnerContainer = styled(FlexBox)`
  padding-left: 5rem;
  @media (max-width: 767.98px) {
    flex-direction: column;
  }
  @media (max-width: 575.98px) {
    padding-left: 2rem;
  }
`;
export const ContainerCounter = styled(FlexBox)`
  width: 35%;
  align-items: center;
  @media (max-width: 767.98px) {
    width: 70%;
  }
`;

const sytleSize = css`
  font-weight: bold;
  @media (max-width: 1199.98px) {
    font-size: 18px;
  }
  @media (max-width: 991.98px) {
    font-size: 16px;
  }
  @media (max-width: 767.98px) {
    font-size: 14px;
  }
  @media (max-width: 575.98px) {
    font-size: 12px;
  }
`;
export const ProductName = styled.p`
  color: #646363;
  font-size: 21px;
  ${sytleSize}
`;
export const MinusIcon = styled(ImMinus)`
  color: #646363;
  cursor: pointer;
  ${sytleSize}
`;
export const PlusIcon = styled(ImPlus)`
  color: #646363;
  cursor: pointer;
  ${sytleSize}
`;
export const CloseIcon = styled(RiCloseCircleFill)`
  color: #d21010;
  cursor: pointer;
  font-size: 21px;
  @media (max-width: 575.98px) {
    margin-bottom: 1rem;
  }
`;
export const Quantity = styled.p`
  width: 44px;
  height: 38px;
  border: 1px solid #646363;
  border-radius: 4px;
  font-size: 20px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  ${sytleSize}
  @media (max-width: 767.98px) {
    width: 33px;
    height: 33px;
  }
`;

export const ProductPrice = styled(ProductName)`
  color: #0ea965;
`;
