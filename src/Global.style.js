import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  max-width: 1920;
  margin: 0 auto;
  padding: 0;
  

`;

export const InnerContainer = styled.div`
  width: 80%;
  margin: auto;
 
`;

export const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border};
  padding: ${(props) => props.padding};
  color:${(props) => props.color};
  &:hover{
    background-color:#f7981d;
    cursor: pointer
  }

`;

export const MainHeader = styled.h1`
  letter-spacing:${(props) => props.letterSpacing};
  color: #ffffff;
  // text-transform: uppercase;
  font-size: ${(props) => props.fontSize};
  margin:0;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Paragraphe = styled.p`
  font-size: ${(props) => props.fontSize};
  color:${(props) => props.color};
`;
export const List = styled.ul`
list-style:none;
display: flex;
`
export const Link = styled.a`
  text-decoration: none;
  color:#fff
`