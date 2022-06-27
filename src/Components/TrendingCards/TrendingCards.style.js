import styled from "styled-components";
import { Paragraphe } from "./../../Global.style";

export const TrendingCard = styled("div")`
  width: 100%;
  /* min-height: 260px; */
  margin: 0;
  /* padding: 0 2rem 2rem 2rem; */
  border-radius: 7px;
`;

export const TrendingImg = styled("div")`
  width: 100%;
  height: 240px;
  object-fit: contain;
  margin: auto;
  padding: 1rem;
  border: 1px solid #dcdcdc;
  border-radius: 1rem;
  @media (max-width: 1199.98px) {
    height: 220px;
  }
  @media (max-width: 991.98px) {
    height: 200px;
  }
  @media (max-width: 768.98px) {
    height: 180px;
  }
  @media (max-width: 575.98px) {
    height: 150px;
  }
`;
export const ProductTitle = styled(Paragraphe)`
  font-size: 12px;
  color: #111111;
  /* max-width: 150px; */
  /* text-align: left; */
  /* margin: auto; */
`;

// export const PriceBG = styled(FlexBoxCenter)`
//   width: 57px;
//   height: 30px;
//   background-color: #ff4f0416;
//   border-radius: 15px;
//   margin: 2vh;
//   position: relative;
//   justify-content: center;
// `;
