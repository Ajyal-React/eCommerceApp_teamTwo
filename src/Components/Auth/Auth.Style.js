import styled, { css } from "styled-components";
import { Bolder, FlexBox, MainContainer } from "../../Global.style";
import { MdEmail } from "react-icons/md";
import { IoMdLock } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";

export const MainSign = styled(MainContainer)`
  display: flex;
  height: 100vh;
`;

export const LeftBox = styled.div`
  background-image: linear-gradient(#fa7400, #7d3a00);
  width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 6rem;
  box-sizing: border-box;
`;
export const RightBox = styled(LeftBox)`
  width: auto;
  flex-grow: 1;
  box-sizing: border-box;
  background: #f3f3f3;
`;

export const SignText = styled.p`
  font-size: 30px;
  border-left: 8px solid #fa7400;
  letter-spacing: 2.4px;
  text-transform: uppercase;
  padding-left: 20px;
  margin-bottom: 32px;
`;

export const InnerRigth = styled.form`
  width: 65%;
  margin: auto;
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

export const EndText = styled(FlexBox)`
  justify-content: end;
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
