import styled from "styled-components";
import { FlexBox } from "../../../../Global.style";

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
`;
export const CustomFlex = styled(FlexBox)`
  justify-content: center;
  /* margin-left: 186px; */
  width: 80%;
`;

export const H5 = styled.h5`
  margin: 0;
  width: 80px;
`;
export const ConteainerUl = styled.div`
  margin-right: 4rem;
`;

export const ImgProfile = styled.div`
  position: absolute;
  left: 350px;
  top: 160px;
  background: #ddd;
  padding: 35px;
  border-radius: 50%;
`;
