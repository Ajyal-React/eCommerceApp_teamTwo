import styled from "styled-components";
import { FlexBox } from "../../Global.style";
import { FaLongArrowAltLeft } from "react-icons/fa";

export const MainDiv = styled.div`
  margin-top: 140px;
`;

export const PaymentSection = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 575.98px) {
    gap: 0;
  }
`;

export const PaymentMethod = styled.div`
  width: 56%;
  @media (max-width: 1199.98px) {
    width: 100%;
  }
`;
export const PaymentSummary = styled.div`
  width: 39%;
  margin-top: 72px;
  @media (max-width: 1199.98px) {
    width: 100%;
  }
  @media (max-width: 575.98px) {
    margin-top: 20px;
  }
`;
export const FormStyle = styled.form``;
export const ChooseMethod = styled.div``;

export const Methods = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
`;
export const MainMethodDiv = styled.div``;
export const MethodOne = styled.div`
  display: flex;
  /* gap: 27%; */
  background: hwb(192deg 92% 6%);
  border-radius: 6px 6px 0 0;
  align-items: center;
  justify-content: space-between;
  /* padding-left: 19px; */
  padding : 0 1rem;
`;
export const MethodTwo = styled(MethodOne)`
  background: none;
  /* gap: 29%; */
  justify-content: space-between;
`;

export const InputRadioDiv = styled.div`
  /* width: 124px; */
  display: flex;
  margin-top: 5px;
  align-items: baseline;
  /* justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : "space-evenly"}; */
`;
export const Label = styled.h5`
  font-size: 15px;
  font-weight: bold;
  @media (max-width: 575.98px) {
    margin-top: 0px;
    font-size: 12px;
  }
`;
export const Images = styled.div`
  width: 50%;
  @media (max-width: 575.98px) {
    width: 70%;
    display: flex;
    justify-content: end;
    flex-wrap: wrap;
  }
`;
export const Image = styled.img`
  width: 60px;
  height: 37px;
`;
export const CustomFlex = styled(FlexBox)`
  gap: 10px;
`;
export const SummaryContent = styled.div`
  border: 1px solid #ddd;
  border-radius: 5px;
`;
export const TotalDiv = styled(SummaryContent)``;

export const Fileds = styled.div`
  margin-top: 40px;
`;

export const Heading = styled.h5`
  font-size: 15px;
  text-align:start;
  color: ${(props) => (props.color ? props.color : "hsl(330deg 1% 70%)")};
  @media (max-width: 991.98px) {
    margin:14px;
  }
  @media (max-width: 575.98px) {
    margin:10px;
  }
`;
export const CheckOutDiv = styled(FlexBox)`
  border-top: 2px solid #dddddd45;
  margin-top: 35px;
  padding-top: 20px;
`;
export const LongArrowAltLeftIcon = styled(FaLongArrowAltLeft)`
  margin-right: 10px;
`;
