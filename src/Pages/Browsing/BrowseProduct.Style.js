import { Button } from "style-components";
import styled from "styled-components";
import Styled from "styled-components";
import { Paragraphe, Title } from "../../Global.style";

export const FlexBoxStyle = Styled.div`
    display: flex;
    flex-wrap:wrap;
    gap: 35px;
    padding-top:${(props) => (props.PaddingTop ? props.PaddingTop : "0")};
    margin-bottom: ${(props) => (props.MarginBottom ? props.MarginBottom : "0")};
`;
export const SideLeft = Styled.div`
    @media (min-width: 500px) and (max-width: 677px) {
        width:100%
    }
`;
export const SideRight = Styled.div`
   width:41%
   @media (min-width: 500px) and (max-width: 677px) {
    width: 100%;
}
`;
export const ImageDiv = Styled.div`
    border:${(props) =>
      props.Border ? `1px solid ${props.Border}` : "1px solid #ddd"}; 
    border-radius: 15px;
    margin-bottom:9px;
    overflow: hidden;
    background-color:${(props) => props.BackGColor};
`;
export const ImageDivCustom = Styled(ImageDiv)`
    @media (min-width: 500px) and (max-width: 677px) {
        width: 19%;
        height:80px;
    }
`;
export const ImgStyle = Styled.img`
    width:${(props) => (props.width ? props.width : "118px")};
    height: ${(props) => (props.width ? props.height : "100%")};
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
    @media (min-width: 500px) and (max-width: 677px) {
        margin-left:0;
        width: 116%;
    }
`;
export const FlexGap = Styled(FlexBoxStyle)`
    gap:7px;
    margin:0;
    @media (min-width: 500px) and (max-width: 677px) {
        gap: 5px;
    }
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
    border: 1px solid #AFAFAF;
    height: 40px;
    width: 81%;
    background: #F4F4F4;
    border-radius: 5px;
    margin-bottom:15px;
    @media (min-width: 500px) and (max-width: 677px) {
        width:100%
    }
`;
export const HrS= Styled.hr`
 margin:${(props)=>props.margin}
`
export const CustomButton=Styled(Button)`
background: #FA7400;
border-radius: 5px;
border: none;
box-shadow: 0px 3px 6px #00000029;
height:40px;
width:81%;
color: #ffff;
@media (min-width: 500px) and (max-width: 677px) {
    width:100%
}
`
export const CustomTitle = styled(Title)`
@media (max-width: 575.98px) {
    font-size: 18px;
    text-align: start;
  }
`
export const CustomParaghraph = styled(Paragraphe)`
@media (max-width: 1199.98px) {
    font-size: 16px;
    text-align: start;
  }
`