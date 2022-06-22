import styled from "styled-components";
import { BsArrowRight } from "react-icons/bs";

export const ContaierProduct = styled.div`
  padding: 10px;
`;
export const TextInnerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
`;
export const ContainerImage = styled.div`
  height: 270px;
  @media (max-width: 575.98px) { 
    height: 230px;
  }
`;
export const BsArrowRightIcon = styled(BsArrowRight)`
  margin-left: 8px;
  font-size: 18px;
  &:hover{
    transform: scale(1.3);
    transition: all 0.2s ease;
  }
`;

export const MoreInfo = styled.p`
  font-size:17px;
  color: #A5A5A5;
  display:flex;
  align-items:center;
  cursor: pointer;
  &:hover{
    color:#FA7400;
  }
`;
