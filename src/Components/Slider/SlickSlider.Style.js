import styled from "styled-components";
import { ButtonHero } from "../HeroSection/HeroSection.Style";

export const CustomBtn = styled(ButtonHero)`
  border: 0.4000000059604645px solid #999999;
  width: 260px;
  height: 55px;
  margin: 0 auto 5rem auto;
  &:hover{
    background-color: #f3f3f3;
  }
`;
