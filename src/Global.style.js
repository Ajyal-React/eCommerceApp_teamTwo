import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
`;
export const MarginTop = css`
  margin-top: 100px;
  @media (max-width: 1199.98px) {
    margin-top: 80px;
  }

  @media (max-width: 767.98px) {
    margin-top: 60px;
  }

  @media (max-width: 575.98px) {
    margin-top: 30px;
  }
`;
export const FullContainer = styled.div`
  width: 100%;
  ${MarginTop}
`;

export const InnerContainer = styled.div`
  width: 85%;
  margin: auto;
`;

export const FlexBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const FlexCol = styled(FlexBox)`
  flex-direction: column;
`;

export const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color: ${(props) => (props.color ? props.color : "#ffff")};
  &:hover {
    background-color: #f7981d;
    cursor: pointer;
  }
  z-index: ${(props) => props.zIndex};
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.buttonWidth};
  height: ${(props) => props.buttonHeight};
  border: none;
`;

export const MainHeader = styled.h1`
  letter-spacing: ${(props) => props.letterSpacing};
  color: #ffffff;
  // text-transform: uppercase;
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => (props.margin ? props.margin : 0)};
  z-index: ${(props) => props.zIndex};
  text-transform: uppercase;

  @media (max-width: 767.98px) {
    font-size: 25px;
  }

  @media (max-width: 575.98px) {
    font-size: 20px;
    text-align: center;
  }
`;

export const Title = styled.h2`
  font-size: 30px;
  margin-top: 0;
  text-transform: uppercase;
   @media (max-width: 1199.98px) {
    font-size: 25px;
  }
  
  @media (max-width: 767.98px) {
    font-size: 20px;
  }

  @media (max-width: 575.98px) { 
    font-size: 18px;
    text-align: center;
  }
`;
export const SupTitle = styled.p`
  font-size: 14px;
  letter-spacing: -0.31px;
  color: #302f2f;
  text-transform: uppercase;
  margin-bottom: 0;

  @media (max-width: 575.98px) { 
    margin-top: 12px;
    text-align: center;
  }
`;

export const Paragraphe = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
  @media (max-width: 575.98px) { 
    margin-top: 12px;
  }
`;
export const List = styled.ul`
  list-style: none;
  display: flex;
`;
export const LinkBTN = styled.a`
  text-decoration: none;
  color: #fff;
`;
export const Image = styled.img`
  /* width: 100%; */
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  margin: ${(props) => props.margin};
  object-fit: contain;
`;

export const ContainerInput = styled.div`
  padding: 1rem;
  box-shadow: 0px 12px 20px #00000014;
  color: #ddd;
  margin: 20px 0;
  width: 100%;
  height: 80px;
  background: #fff;
  display: flex;
  align-items: center;
  :first-of-type {
    border-left: 6px solid #fa7400;
    padding-top: 0.3rem;
    flex-direction: column;
    align-items: start;
  }
`;
export const StylePlaceholder = css`
  font-size: 14px;
  color: #b9b9b9;
  display: flex;
  align-items: center;
  margin-bottom: 0.5rem;
  @media (max-width: 575.98px) { 
    margin-top: 12px;
  }
`;

export const Input = styled.input`
  color: #b9b9b9;
  border: none;
  outline: none;
  letter-spacing: 1px;
  font-size: 14px;
  width: 70%;
  
  &[type="email"] {
    font-size: 18px;
    letter-spacing: 2px;
    color: #707070;
  }
  &placeholder {
    ${StylePlaceholder}
  }
  @media (max-width: 575.98px) { 
    margin-top: 12px;
  }
`;

export const Span = styled.span`
  ${StylePlaceholder}
`;
export const Bolder = css`
  font-weight: bolder;
`;
export const Price = styled.p`
  width: 56px;
  height: 31px;
  background: #ff4f0416;
  border-radius: 17px;
  color: #ff4f04;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  margin: 0;
  @media (max-width: 575.98px) { 
    margin-top: 12px;
  }
`;
export const ProductName = styled.p`
  font-size: 16px;
  color: #111111;
  font-weight: bold;
  @media (max-width: 575.98px) { 
    margin-top: 14px;
  }
`;

export const CustomLink = styled(Link)`
  text-decoration: none;
`;
export const SubHeader = styled(MainHeader)`
  color: #32353c;
`;
export const FlexBoxAround = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const FlexBoxCenter = styled(FlexBox)`
  align-items: center;
`;

export const FlexBoxRow = styled(FlexBox)`
  flex-direction: row;
`;
export const HrStyle = styled.hr``;
export const StyledList = styled.ul`
  list-style: none;
`;
export const ListItemsStyle = styled.li`
  padding: 0 3vh;
`;
