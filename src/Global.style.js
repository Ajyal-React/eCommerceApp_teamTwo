import styled from "styled-components";

export const MainContainer = styled.main`
  width: 100vw;
  max-width: 1920px;
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
  background-color: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderR};
  border: none;
`;

export const MainHeader = styled.h1`
  letter-spacing: -2.53px;
  color: #ffffff;
  text-transform: uppercase;
  font-size: 54px;
`;

export const Title = styled.h2`
  font-size: 30px;
`;

export const Paragraphe = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
`;
export const List = styled.ul`
list-style:none;
`
