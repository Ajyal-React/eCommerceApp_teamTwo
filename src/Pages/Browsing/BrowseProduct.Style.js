import { Button } from "style-components";
import styled from "styled-components";
import Styled from "styled-components";
import { Paragraphe, Title } from "../../Global.style";

export const FlexBoxStyle = Styled.div`
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    width: 80%;
    /* gap: 35px; */
    padding-top:${(props) => (props.PaddingTop ? props.PaddingTop : "0")};
    margin-bottom: ${(props) =>
      props.MarginBottom ? props.MarginBottom : "0"};
    @media (max-width: 1400px) {
      width: 100%;
    }
`;
export const FlexBoxContainer = Styled(FlexBoxStyle)`
    width: 100%;
`;
export const SideLeft = Styled.div`
    width: 50%;
    @media (max-width: 768.98px) {
        width:100%;
    }
`;
export const SideRight = Styled.div`
   width:50%;
   padding-left: 2.5rem;
   @media (max-width: 768.98px) {
        width:100%;
        padding-left: 0rem;
        margin-top: 2rem;
    }
`;
export const ImageDiv = Styled.div`
    border:${(props) =>
      props.Border ? `1px solid ${props.Border}` : "1px solid #ddd"}; 
    border-radius: 15px;
    margin-bottom:9px;
    overflow: hidden;
    background-color:${(props) => props.BackGColor};
    display: flex;
    justify-content: center;
    height: 50%;
    align-items: center;
    @media (max-width: 1199.98px) {
      height: 350px;
    }
    @media (max-width: 768.98px) {
      height: 300px;
    }
    @media (max-width: 575.98px) {
      height: 200px;
    }
`;
export const ImageDivCustom = Styled(ImageDiv)`
    height: 100px;
    width: calc(90%/5);
    cursor:pointer;
    /* @media (min-width: 500px) and (max-width: 677px) {
        width: 19%;
        height:80px;
    } */
    @media (max-width: 1199.98px) {
      height: 90px;
    }
    @media (max-width: 768.98px) {
      height: 80px;
    }
    @media (max-width: 575.98px) {
      height: 60px;
    }
`;
export const ImgStyle = Styled.img`
    width: 100%;
    height: ${(props) => (props.width ? props.height : "85%")};
    object-fit: contain;
    margin-left: ${(props) => (props.marginLeft ? props.marginLeft : "0")};
    @media (max-width: 1400px) {
       padding: 10px 0;
    }
    
    @media (max-width: 575.98px) {
      height: 90%;
    }
`;
export const FlexGap = Styled(FlexBoxStyle)`
    gap:10px;
    margin:0;
    width: 100%;
    @media (max-width: 575.98px){
        gap: 7px;
    }
`;
export const Header = Styled(Title)`
   margin:0;
`;

export const SpanStyle = Styled.span`
    font-weight: bold;
    color: #0EA965;
`;
export const DivContent = Styled.div`
    text-align:Center;
    width: calc(90%/4);
`;
export const ColorCompination = Styled(FlexGap)`
   width: 90%;
   height:50px;
   gap:0;
   box-shadow: 0px 3px 8px #888888;
   margin-bottom:5px;
   @media (max-width: 768.98px) {
      height: 35px;
    }
`;
export const ColorOne = Styled.div`
    background:${(props) => (props.BackGColor ? props.BackGColor : "0")};
    width:50%;
`;
export const ColorTwo = Styled.div`
    background:${(props) => (props.BackGColor ? props.BackGColor : "0")};
    width:50%;
`;
export const SelectField = Styled.select`
    outline: none;
    border: 1px solid #AFAFAF;
    height: 40px;
    width: 100%;
    background: #F4F4F4;
    border-radius: 5px;
    margin-bottom:15px;
`;
export const HrS = Styled.hr`
    margin:${(props) => props.margin};
`;
export const CustomButton = Styled(Button)`
    background: #FA7400;
    border-radius: 5px;
    border: none;
    box-shadow: 0px 3px 6px #00000029;
    height:40px;
    width:100%;
    color: #ffff;
`;
export const CustomTitle = styled(Title)`
  color:${(props)=>props.color};
  @media (max-width: 575.98px) {
    font-size: 18px;
    text-align: start;
  }
`;
export const CustomParaghraph = styled(Paragraphe)`
  @media (max-width: 1199.98px) {
    font-size: 16px;
    text-align: start;
  }
`;
export const FormProduct = Styled.form`
   width: 80%;
   @media (max-width: 768.98px) {
      width: 100%;
    }
`;
export const NotAvailable = Styled(SpanStyle)`
   color :#f00
`;
