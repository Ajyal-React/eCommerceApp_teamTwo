import Styled from "styled-components";
import { Title } from "../../Global.style";

export const FlexBoxStyle = Styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 35px;
    padding-top:${(props) => (props.PaddingTop ? props.PaddingTop : "0")};
    margin-bottom: ${(props) => (props.PaddingTop ? props.MarginBottom : "0")};
`;
export const SideLeft = Styled.div`
    @media (width: 500px) {
        width:100%
    }
`;
export const SideRight = Styled.div`
   
`;
export const ImageDiv = Styled.div`
    border:${(props) =>
      props.Border ? `1px solid ${props.Border}` : "1px solid #ddd"}; 
    border-radius: 9px;
    margin-bottom:20px;
    overflow: hidden;
    background-color:${(props) => props.BackGColor};

`;
export const ImgStyle = Styled.img`
    width:${(props) => (props.width ? props.width : "118px")};
    height: ${(props) => (props.width ? props.height : "100%")};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
    @media (width: 500px) {
        margin-left:0;
    }
`;
export const FlexGap = Styled(FlexBoxStyle)`
    gap:7px;
    margin:0
`;
export const Header = Styled(Title)`
   margin:0
`;

export const SpanStyle = Styled.span`
    font-weight: bold;
    color: #0EA965;
`;
export const DivContent = Styled.div`
    text-align:Center;
`;
export const ColorCompination = Styled(FlexGap)`
   width:70px;
   height:30px;
   gap:0;
   box-shadow: 0px 3px 8px #888888;
   margin-bottom:5px

`;
export const ColorOne = Styled.div`
    background:${(props) => (props.BackGColor ? props.BackGColor : "0")};
    width:50%
`;
export const ColorTwo = Styled.div`
    background:${(props) => (props.BackGColor ? props.BackGColor : "0")};
    width:50%
`;
export const SelectField = Styled.select`
    outline: none;
    border: none;
    height: 40px;
    width: 100%;
    background: #F4F4F4;
    border-radius: 5px;
    margin-bottom:15px
`;
