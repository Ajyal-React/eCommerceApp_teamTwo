import styled from "styled-components";
import { CustomLink, MainHeader } from "../../Global.style";
import { FlexBox } from "./../../Global.style";

export const TrendingContainer = styled("section")`
  padding: 40px;
  background: #f9f8f8;
  @media (max-width: 575.98px) {
    padding: 0px;
  }
`;
export const TrendingMainHeader = styled(MainHeader)`
  color: #32353c;
`;

export const CardsContainer = styled(FlexBox)`
  flex-wrap: wrap;
  flex-direction: row;
`;

export const CustomLinkTrend = styled(CustomLink)`
  flex-wrap: wrap;
  flex-direction: row;
  width: calc(90% / 5);
  margin-bottom: 1.5rem;
  @media (max-width: 1199.98px) {
    width: calc(90% / 4);
    margin-bottom: 1rem;
  }
  @media (max-width: 991.98px) {
    width: calc(90% / 3);
  }
  @media (max-width: 768.98px) {
    width: calc(90% / 2);
  }
`;
