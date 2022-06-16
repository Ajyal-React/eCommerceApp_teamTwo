import styled from "styled-components";

export const MainContainer = styled.main`
  max-width: 1920px;
  margin: 0 auto;
  padding: 0;
`;

export const InnerContainer = styled.div`
  width: 80%;
  margin:auto;
`;

export const FlexBox = styled.div`  
  display: flex;
  justify-content: space-between;
 
`;
export const FlexBoxCenter = styled(FlexBox)`  
  align-items:center;
 
 
`;

export const FlexBoxRow = styled(FlexBox)`  
 flex-direction:row;
 
`;



export const Button = styled.button`
  background: ${(props) => props.backgroundColor};
  border-radius: ${(props) => props.borderR};
  border: ${(props) => props.border?props.border:'none'};
  padding: ${(props) => props.padding};
  color:${(props) => props.color?props.color:'#ffff'};
  &:hover{
    background-color:#f7981d;
    cursor: pointer
  }
  z-index: ${(props) => props.zIndex}; 
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  display: ${(props) => props.display};
  align-items: ${(props) => props.alignItems};
  width: ${(props) => props.buttonWidth};
  height: ${(props) => props.buttonHeight};

`;

export const MainHeader = styled.h1`
  letter-spacing:${(props) => props.letterSpacing};
  color: #ffffff;
  text-transform: uppercase;
  font-size: ${(props) => props.fontSize};
  margin:0;
  z-index: ${(props) => props.zIndex}; 
`;

export const SubHeader=styled(MainHeader)`
color: #32353C;
`

export const Title = styled.h2`
  font-size: 30px;
  margin: ${(props) => props.margin};
`;

export const Paragraphe = styled.p`
  font-size: ${(props) => props.fontSize};
  color: ${(props) => props.color};
  margin: ${(props) => props.margin};
`;
export const StyledList = styled.ul`
  list-style:none;
`
export const ListItemsStyle= styled.li`
padding: 0 3vh;
`;
export const Link = styled.a`
  text-decoration: none;
  color:#fff
`
export const HrStyle=styled.hr`

`
