import styled from "styled-components";
import { FaLongArrowAltLeft } from "react-icons/fa";
import { CustomLink, FlexBox } from "../../Global.style";

export const LongArrowAltLeftIcon = styled(FaLongArrowAltLeft)`
  margin-right: 10px;
`;
export const MainDiv = styled.div`
  margin-top: 140px;
`;

export const ContainerCards = styled.div`
  margin-top: 3rem;
  @media (max-width: 1199.98px) {
    margin-top: 2rem;
  }
  @media (max-width: 767.98px) {
    margin-top: 0rem;
  }
`;
export const GoToPayment = styled(CustomLink)`
  background: #fa7400;
  border-radius: 5px;
  border: none;
  box-shadow: 0px 3px 6px #00000029;
  min-height: 40px;
  width: 25%;
  color: #ffff;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 991.98px) {
    width: 50%;
    font-size: 14px;
  }
`;
export const ContainerBtn = styled(FlexBox)`
  justify-content: flex-end;
  margin: 2rem 0 4rem 0;
`;
