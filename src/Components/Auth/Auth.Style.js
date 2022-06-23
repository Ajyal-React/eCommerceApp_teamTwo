import styled, { css } from "styled-components";
import {
  Bolder,
  FlexBox,
  MainContainer,
  Button,
  Image,
  Paragraphe,
} from "../../Global.style";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

export const MainSign = styled(MainContainer)`
  display: flex;
  height: 100vh;
  @media (max-width: 1199.98px) {
    flex-direction: column;
  }
`;

export const LeftBox = styled.div`
  background-image: linear-gradient(#fa7400, #7d3a00);
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6rem;
  box-sizing: border-box;
  @media (max-width: 1399.98px) {
    width: 645px;
  }
  @media (max-width: 1199.98px) {
    width: 100%;
    height: 50%;
  }
`;
export const RightBox = styled(LeftBox)`
  width: auto;
  flex-grow: 1;
  box-sizing: border-box;
  background: #f3f3f3;
  @media (max-width: 1199.98px) {
    padding: 0px;
  }
`;

export const SignText = styled.p`
  font-size: 30px;
  border-left: 8px solid #fa7400;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  padding-left: 20px;
  margin-bottom: 32px;
  @media (max-width: 1199.98px) {
    font-size: 25px;
    margin-bottom: 0;
    margin-top: 1rem;
  }

  @media (max-width: 767.98px) {
    font-size: 20px;
  }

  @media (max-width: 575.98px) {
    font-size: 18px;
  }
`;

export const InnerRigth = styled.form`
  width: 65%;
  margin: auto;
  @media (max-width: 1399.98px) {
    width: 85%;
  }
  @media (max-width: 1199.98px) {
    margin-top: 1rem;
  }
  /* @media (max-width: 767.98px) {
    width: 65%;
  }

  @media (max-width: 575.98px) {
    width: 65%;
  } */
`;

export const Style = css`
  color: #b9b9b9;
  font-size: 20px;
  margin-right: 10px;
`;

export const EmailIcon = styled(MdEmail)`
  ${Style}
`;
export const LocklIcon = styled(IoMdLock)`
  ${Style}
`;
export const FaLongArrow = styled(FaLongArrowAltRight)`
  ${Style}
  color: #fff;
`;

export const StyleFont = css`
  font-size: 20px;
  color: #707070;
`;

export const AuthBtn = styled(Button)`
  display: flex;
  justify-content: end;
  align-items: center;
  background: none;
  width: 100%;
  ${Bolder};
  ${StyleFont};
  cursor: pointer;
`;
export const ContainerIcon = styled(FlexBox)`
  display: flex;
  align-items: center;
  background: #f6921e;
  border-radius: 50%;
  margin-left: 8px;
  width: 28px;
  height: 28px;
`;
export const AlreadySign = styled(FlexBox)`
  justify-content: start;
  align-items: center;
  position: absolute;
  bottom: 40px;
  width: auto;
  ${StyleFont};
  @media (max-width: 1199.98px) {
    bottom: 0;
  }
  @media (max-width: 575.98px) {
    left: 25%;
    font-size: 14px;
  }
`;
export const Bold = styled.p`
  ${Bolder}
  color:#3B3B3B;
  margin-left: 8px;
  cursor: pointer;
`;
export const Italic = styled.span`
  font-style: italic;
  ${Bolder}
`;
export const Forget = styled.span`
  ${Bolder};
  color: #22b9ff;
  margin-right: 20px;
  text-transform: uppercase;
  cursor: pointer;
`;

export const ImageLogo = styled(Image)`
  margin: 4rem 0;
  height: 70px;
  width: 360px;
  object-fit: contain;
  @media (max-width: 1199.98px) {
    width: 100%;
    margin: 0;
  }
`;
export const AuthP = styled(Paragraphe)`
  @media (max-width: 1199.98px) {
    margin: 0;
  }
`;
