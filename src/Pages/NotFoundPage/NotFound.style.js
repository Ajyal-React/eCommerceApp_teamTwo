import styled from "styled-components";
import { FlexBox } from "../../Global.style";

export const MainBox = styled.div`
  margin: auto;
  width: 100%;
  margin-top: 4rem;
`;

// export const Err = styled.div`
//   color: #fa7400;
//   font-family: "Nunito Sans", sans-serif;
//   font-size: 11rem;
//   position: absolute;
//   left: 20%;
//   top: 8%;
// `;
// export const Err1 = styled.div`
//   position: absolute;
//   font-size: 11rem;
//   left: 42%;
//   top: 3%;
//   color: #fa7400;
// `;
// export const Err2 = styled.div`
//   color: #fa7400;
//   font-family: "Nunito Sans", sans-serif;
//   font-size: 11rem;
//   position: absolute;
//   left: 68%;
//   top: 8%;
// `;

export const Msg = styled.div`
  text-align: center;
  font-family: "Nunito Sans", sans-serif;
  font-size: 1.6rem;
  width: 75%;
  margin: auto;
  @media (max-width: 1199.98px) {
    font-size: 1.2rem;
  }

  @media (max-width: 767.98px) {
    font-size: 1rem;
  }

  @media (max-width: 575.98px) {
    font-size: 0.8rem;
  }
`;
export const ImageNotFound = styled(FlexBox)`
  width: 50%;
  margin: auto;
  margin-bottom: 2rem;
  height: 350px;
  @media (max-width: 991.98px) {
    height: auto;
  }
`;
