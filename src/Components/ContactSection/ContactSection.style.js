import styled, { css } from "styled-components";
import { FlexBox, Paragraphe } from "../../../../Global.style";
import { FaUserAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";

export const ContactDetails = styled.div`
  background-image: linear-gradient(
    140deg,
    #78b09e 0%,
    #daf5f4 50%,
    #c5e0da 75%
  );
  height: 165px;
  padding-top: 35px;
  height: 165px;
  padding-top: 35px;
  margin-top: 100px;
  width: 100%;
  z-index: 99999;
  display: flex;
  justify-content: end;
  position: fixed;
  @media (max-width: 1199.98px) {
    height: 230px;
    padding-bottom: 2rem;
  }
  @media (max-width: 767.98px) {
    justify-content: flex-start;
    padding-left: 2rem;
    padding-right: 2rem;
    height: 280px;
    align-items: flex-start;
  }
  @media (max-width: 575.98px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;
export const CustomFlex = styled(FlexBox)`
  justify-content: center;
  /* margin-left: 186px; */
  width: 80%;
  @media (max-width: 1399.98px) {
    width: 70%;
  }
  @media (max-width: 1199.98px) {
    width: 50%;
    flex-direction: column;
  }
  @media (max-width: 991.98px) {
    width: 45%;
  }
  @media (max-width: 767.98px) {
    width: 80%;
  }
  @media (max-width: 575.98px) {
    width: 100%;
  }
`;

export const H5 = styled.h5`
  margin: 0;
  width: 80px;
`;
export const ConteainerUl = styled.div`
  margin-right: ${(props) => props.marginRight};
  width: 25%;
  @media (max-width: 1399.98px) {
    width: 30%;
  }
  @media (max-width: 1199.98px) {
    width: auto;
    margin-right: 0;
  }
`;

export const ImgProfile = styled.div`
  position: absolute;
  left: 23%;
  top: 36%;
  background: #ddd;
  border-radius: 50%;
  box-shadow: 4px 4px 6px #00000096;
  width: 160px;
  height: 160px;
  @media (max-width: 1199.98px) {
    left: 32%;
    top: 55%;
  }
  @media (max-width: 767.98px) {
    left: 4%;
    top: 77%;
    width: 120px;
    height: 120px;
  }
`;

const styleIcon = css`
  color: #aaaaaa;
  margin-right: 20px;
`;
export const UserIcon = styled(FaUserAlt)`
  ${styleIcon}
`;
export const EmailIcon = styled(MdEmail)`
  ${styleIcon}
`;
export const TelephoneFillIcon = styled(BsTelephoneFill)`
  ${styleIcon}
`;
export const FillBagFillIcon = styled(BsFillBagFill)`
  ${styleIcon}
`;
export const ParagraphProfile = styled(Paragraphe)`
  margin: 0;
  @media (max-width: 1199.98px) {
    font-size: 14px;
    text-align: center;
  }
`;
