import styled from "styled-components";
import { FlexBox, Paragraphe, Title } from "./../../Global.style";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

export const FooterContainer = styled("div")`
  min-height: 270px;
`;
export const FirstSide = styled("div")`
  width: 414px;
`;

export const LogoImg = styled("Img")`
  width: 188px;
  height: 39px;
`;

export const FooterText = styled(Paragraphe)`
  max-width: 358px;
  font-size: 12px;
  color: #302f2f;
  text-align: left;
`;
export const SecondSide = styled("div")``;

export const FooterTitle = styled(Title)`
  font-size: 12px;
  color: #302f2f;
`;

export const FooterSubTitle = styled(Paragraphe)`
  font-size: 12px;
  color: #646363;
  padding-right: 1vh;
`;
export const MenuContainer = styled("div")`
  margin: 3vh;
`;
export const ContactContainer = styled("div")`
  margin: 3vh;
`;

export const ThirdSide = styled("div")``;
export const LastSide = styled("div")``;
export const SocialIcons = styled("div")``;
export const FlexCenter = styled(FlexBox)`
  align-items: center;
`;

export const SocialStyle = styled(FlexBox)`
  padding: 10px;
  align-items: center;
`;
export const IconsSec = styled("div")``;
export const BsFillTelephoneFillIcon = styled(BsFillTelephoneFill)`
  color: #fa7400;
  padding-right: 1vh;
  height: 20px;
  width: 20px;
`;
export const GrMailIcon = styled(GrMail)`
  color: #fa7400;
  padding-right: 1vh;
  height: 20px;
  width: 20px;
`;
