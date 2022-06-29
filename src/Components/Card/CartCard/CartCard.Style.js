import styled from "styled-components";
import { FlexBox } from "../../../Global.style";
import { ImMinus } from "react-icons/im";
import { ImPlus } from "react-icons/im";
import { MdOutlineClose } from "react-icons/md";

export const ContainerCartCard = styled(FlexBox)`
  height: 147px;
  border: 1px solid #707070;
  padding: 0 1rem;
`;

export const LeftBox = styled(FlexBox)`
  width: 50%;
  height: 100%;
  align-items: center;
`;

export const RightBox = styled(FlexBox)`
  width: 20%;
  align-items: center;
`;

export const ContainerImage = styled.div`
  height: 80%;
  width: 174px;
  background: #e3e3e3;
`;

export const InnerContainer = styled(FlexBox)`
  padding-left: 5rem;
`;
export const ContainerCounter = styled(FlexBox)`
  width: 30%;
  align-items: center;
`;
export const ProductName = styled.p`
  color: #646363;
  font-size: 21px;
  font-weight: bold;
`;
export const MinusIcon = styled(ImMinus)`
  color: #646363;
  cursor: pointer;
`;
export const PlusIcon = styled(ImPlus)`
  color: #646363;
  cursor: pointer;
`;
export const CloseIcon = styled(MdOutlineClose)`
  color: #646363;
  cursor: pointer;
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
`;
